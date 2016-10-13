Template.Contactos.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('contactos');
    self.subscribe('anunciantes');
    self.subscribe('fotos');
  });
});

Template.Contactos.helpers({
  contactos() {
    return Contactos.find({ userId: Meteor.userId() });
  },
  fotosDeContacto(anuncianteId) {
    return Fotos.find({anuncianteId: anuncianteId});
  },
  nombreDeContacto(anuncianteId) {
    return Anunciantes.findOne({_id: anuncianteId}).nombre;
  },
  ContactoPendiente(anuncianteId) {
    let anuncioId = anuncianteId
    let pendiente = Contactos.findOne({ anuncioId: anuncioId, userId: Meteor.userId() }).pendiente;
    let existe = Contactos.findOne({ anuncioId: anuncioId, userId: Meteor.userId() })
    if ( pendiente === false || existe === undefined  ) {
      return true;
    } else {
      return false;
    }
  }
});
