Meteor.methods({
    crearObtenerUsuario(datos) {
        console.log("Method run");
        window.plugins.toast.showLongBottom("Method run");
        let user = Meteor.users.findOne({"emails.address": datos.email});
        if (user) {
            return {
                user: user._id
            }
        } else {
            datos = {...datos, password: Random.id()};
            console.log("intenta crear");
            let usuarioId = Accounts.createUser(datos);
            if (usuarioId) {
                console.log("creado");
                Roles.addUsersToRoles(usuarioId, ['usuario'], 'app');
                return {
                    user: usuarioId
                }
            }
        }
    },
    crearUsuario(datos) {
      let userId = Accounts.createUser({
        email: datos.email,
        password: datos.password
      });

      if (userId) {
        Meteor.users.update({_id: userId}, {
            $set: {
                'profile.edad': datos.profile.edad,
                'profile.verificado': false
            }
        })
        Roles.addUsersToRoles(userId, ['usuario'], 'app');
        console.log(userId);

      } else {
        throw new Meteor.Error('Error', 'Usuario no Creado');
      }
    },
    crearAdministrador(datos) {

        let usuarioId = Accounts.createUser(datos);
        if (usuarioId) {

            Roles.addUsersToRoles(usuarioId, ['administrador'], 'app');

        } else {
            return;
        }
    },
    actualizarInfo: function (datos) {

        Meteor.users.update({_id: this.userId}, {
            $set: {
                'profile.nombre': datos.nombre,
                'profile.edad': datos.edad,
                'profile.phoneNumber': datos.phoneNumber,
                'profile.telefonoDeConocido': datos.telefonoDeConocido
            }
        })

    },
    editarTienda(id, datos) {
      Tiendas.update({_id: id}, {
        $set: {
          nombre: datos.nombre,
          rubro: datos.rubro,
          telefono: datos.telefono,
          horario: datos.horario
        }
      })
    },
    eliminarTienda(id) {
      Tiendas.remove({_id: id})
    },
    editarAnuncio(id, datos) {
      Anunciantes.update({_id: id}, {
        $set: {
          nombre: datos.nombre,
          telefono: datos.telefono,
          genero: datos.genero,
          edad: datos.edad,
          ubicacion: datos.ubicacion
        }
      })
    },
    crearVendedor: function (datos) {

        let usuarioId = Accounts.createUser({
            email: datos.email,
            password: datos.password
        });

        let tiendaId = Tiendas.insert({
            nombre: datos.nombre,
            rubro: datos.rubro,
            telefono: datos.telefono,
            horario: datos.horario,
            userId: usuarioId
        });

        if (usuarioId) {

            Roles.addUsersToRoles(usuarioId, ['vendedor'], 'app');

            Meteor.users.update({_id: usuarioId}, {
                $set: {
                    'profile.tiendaId': tiendaId
                }
            });

        } else {
            return;
        }
    },
    crearProducto: function (datos) {
        if (this.userId) {
            let tiendaId = Tiendas.findOne({userId: this.userId})._id;
            let producto = Productos.insert({
                tiendaId: tiendaId,
                titulo: datos.titulo,
                descripcion: datos.descripcion,
                precio: datos.precio,
                calificacion: 0
            });
        } else {
            return;
        }
    },
    crearToken: function (telefono) {
        let userId = this.userId;

        let r = Math.round(new Date().getTime() / 10000.0);

        let t = Tokens.insert({
            //userId: this._id,
            token: r
        });

        let verifico = false;

        if (t) {
            twilio = Twilio('AC1fbb7fded7f812a8f1e92eb0ece4bdc8', '369dca7f7fc5d0e156862bcd4c458a91');

              twilio.sendSms({
                  to: '+51' + telefono, // Any number Twilio can deliver to
                  from: '+14043345398', // A number you bought from Twilio and can use for outbound communication
                  body: `Código de verificación ${r}` // body of the SMS message
              }, function (err, responseData) { //this function is executed when a response is received from Twilio
                  if (!err) {
                      console.log(responseData.from);
                      console.log(responseData.body);
                  } else {
                      console.log(err);
                  }
              });



        }

    },
    verificarToken: function (token, telefono) {

        Tokens.find({/*userId: this.userId*/}).forEach(function (t) {
            if (t.token === token) {
                Tokens.remove({_id: t._id});
                return true;
            } else {
                Tokens.remove({_id: t._id});
            }
        });

        Meteor.users.update({ _id: this.userId }, {
          $set: {
            'profile.verificado': true,
            'profile.phoneNumber': telefono
          }
        });

    }
});
