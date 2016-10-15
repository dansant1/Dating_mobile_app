Meteor.methods({
  postular: function (datos) {

    if (this.userId) {

      let anuncia = Anunciantes.find({userId: this.userId}).fetch().length;

      if (anuncia === 0) {
        datos.nombre = Meteor.users.findOne({_id: this.userId}).profile.nombre;
        datos.edad = Meteor.users.findOne({_id: this.userId}).profile.edad;
        datos.telefono = Meteor.users.findOne({_id: this.userId}).profile.telefono;
        datos.userId = this.userId;
        datos.calificacion = 0;
        datos.anuncia = false;
        datos.precio = 0;
        //console.log(datos);
        Anunciantes.insert(datos);
      } else {
        return;
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
  contactar: function (anuncianteId) {
    if (this.userId) {

      if (Contactos.find({anuncianteId: anuncianteId, de: this.userId}).fetch().length >= 1 ) {
        return;
      } else {
        Contactos.insert({
          de: this.userId,
          anuncianteId: anuncianteId,
          createdAt: new Date(),
          aprobado: false
        });
      }


    }
  }
});
