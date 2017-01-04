Meteor.methods({
  postular: function (datos) {

    if (this.userId) {

      let anuncia = Anunciantes.find({userId: this.userId}).fetch().length;

      if (anuncia === 0) {
        datos.nombre = Meteor.users.findOne({_id: this.userId}).username;
        datos.edad = Meteor.users.findOne({_id: this.userId}).profile.edad;
        datos.telefono = 1;
        datos.userId = this.userId;
        datos.calificacion = 0;
        datos.anuncia = false;
        datos.precio = 0;

        Anunciantes.insert(datos);
      } else {
        return;
      }

    } else {
      return;
    }
  },
  agregarTerminos: function (termino) {
    if (Terminos.find().fetch().length > 0) {

    } else {
      Terminos.insert({
        contenido: termino
      });
    }

  },
  agregarPoliticas: function (politica) {
    if (Politicas.find().fetch().length > 0) {

    } else {
      Politicas.insert({
        contenido: politica
      });
    }

  },
  agregarAnunciante: function (data, password) {

    if (this.userId) {
      
        let usuarioId = Accounts.createUser({
          email: data.email,
          password: password
        });

        data.userId = usuarioId;
        data.calificacion = 0;
        data.anuncia = true;
        data.destacado = false;
        
        let anuncianteId;

        if (usuarioId) {
          anuncianteId = Anunciantes.insert(data);
          Roles.addUsersToRoles(usuarioId, ['anunciante'], 'app');

          Meteor.users.update({_id: usuarioId}, {
            $set: {
              'profile.anuncianteId': anuncianteId
            }
          });
        }

        

        return {
          id: anuncianteId
        }

    } else {
      return;
    }
  },
  aprobar: function (anuncianteId) {
    if (this.userId) {
      Anunciantes.update({_id: anuncianteId}, {
        $set: {
          anuncia: true
        }
      });
    } else {
      return;
    }
  },
  desaprobar: function (anuncianteId) {
    if (this.userId) {
      Anunciantes.update({_id: anuncianteId}, {
        $set: {
          anuncia: false
        }
      });
    } else {
      return;
    }
  },
  ponerPrecio: function (precio, anuncianteId) {
    if (this.userId) {
      Anunciantes.update({_id: anuncianteId}, {
        $set: {
          precio: precio
        }
      });
    }
  },
  calificar: function (numero, anuncianteId) {
    if (this.userId) {

      let calificacion = Anunciantes.findOne({_id: anuncianteId}).calificacion;

      let calificacionFinal = numero + calificacion

      Anunciantes.update({_id: anuncianteId}, {
        $set: {
          calificacion: calificacionFinal
        }
      });
    }
  },
  calificarProducto: function (numero, anuncianteId) {
    if (this.userId) {

      let calificacion = Productos.findOne({_id: anuncianteId}).calificacion;

      let calificacionFinal = numero + calificacion

      Productos.update({_id: anuncianteId}, {
        $set: {
          calificacion: calificacionFinal
        }
      });
    }
  },
  comentar: function (comentario, anuncianteId) {
    if (this.userId) {
      Comentarios.insert({
        userId: this.userId,
        createdAt: new Date(),
        comentario: comentario,
        anuncianteId: anuncianteId,
        username: Meteor.users.findOne({_id: this.userId}).username
      });
    }
  },
  comentarProducto: function (comentario, anuncianteId) {
    if (this.userId) {
      ComentariosProductos.insert({
        userId: this.userId,
        createdAt: new Date(),
        comentario: comentario,
        productoId: anuncianteId,
        username: Meteor.users.findOne({_id: this.userId}).username
      });
    }
  },
  contactar: function (anuncianteId) {
    if (this.userId) {

      if (Contactos.find({anuncianteId: anuncianteId, de: this.userId}).fetch().length >= 1 ) {
        return;
      } else {
        Contactos.insert({
          de: this.userId,
          anuncianteId: anuncianteId,
          createdAt: new Date()
        });
      }


    }
  },
  favorito: function (anuncianteId) {
    if (this.userId) {

      if (Favoritos.find({anuncianteId: anuncianteId, de: this.userId}).fetch().length >= 1 ) {
        return;
      } else {
        Favoritos.insert({
          de: this.userId,
          anuncianteId: anuncianteId,
          createdAt: new Date()
        });
      }


    }
  },
  ofertar: function (anuncianteId, oferta) {
    Ofertas.insert({
      anuncianteId: anuncianteId,
      userId: this.userId,
      oferta: oferta,
      aprobado: false,
      createdAt: new Date()
    });
  },
  aprobarOferta: function (id) {
    Ofertas.update({_id: id}, {
      $set: {
        aprobado: true
      }
    });
  },
  desaprobarOferta: function (id) {
    Ofertas.update({_id: id}, {
      $set: {
        aprobado: false
      }
    });
  },
  agregarProductos: function (datos) {
    if (this.userId) {

      let productoId = Productos.insert({
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        precio: datos.precio,
        tiendaId: Meteor.users.findOne({_id: this.userId}).profile.tiendaId,
        calificacion: 0
      });

      return {
        id: productoId
      }
    } else {
      return;
    }
  }
});
