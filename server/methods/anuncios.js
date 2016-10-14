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
  }
});
