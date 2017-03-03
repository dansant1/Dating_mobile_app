Meteor.methods({
    crearObtenerUsuario: function (datos) {
        let user = Meteor.users.findOne({"emails.address": datos.email});
        if (user) {
            return {
                user: user._id
            }
        } else {
            datos = {...datos, password: Random.id()}
            let usuarioId = Accounts.createUser(datos);
            if (usuarioId) {
                Roles.addUsersToRoles(usuarioId, ['usuario'], 'app');
                return {
                    user: usuarioId
                }
            }
        }
    },
    crearAdministrador: function (datos) {

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
                'profile.telefono': datos.telefono,
                'profile.telefonoDeConocido': datos.telefonoDeConocido
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
                    Meteor.users.update({ _id: userId }, { 'profile.verificado': true, 'profile.phoneNumber': telefono });
                } else {
                    console.log(err);
                }
            });
        }

    },
    verificarToken: function (token) {

        Tokens.find({/*userId: this.userId*/}).forEach(function (t) {
            if (t.token === token) {
                Tokens.remove({_id: t._id});
                return true;
            } else {
                Tokens.remove({_id: t._id});
            }
        });

    }
});
