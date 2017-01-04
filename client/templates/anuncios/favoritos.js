Template.Favoritos.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('favoritos');
    self.subscribe('anunciantes');
    self.subscribe('fotos');
  });
});

Template.Favoritos.helpers({
  favoritos() {
    return Favoritos.find({ de: Meteor.userId() });
  },
  fotosDeContacto(anuncianteId) {
    return Fotos.find({'metadata.anuncianteId': anuncianteId});
  },
  nombreDeContacto(anuncianteId) {
    return Anunciantes.findOne({_id: anuncianteId}).nombre;
  },
  telefono: function (anuncianteId) {
    return Anunciantes.findOne({_id: anuncianteId}).telefono;
  }
});