Template.Favoritos.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('favoritos');
    self.subscribe('fotos');
    self.subscribe('anunciantes');
  });
});

Template.Favoritos.helpers({
  favoritos() {
    return Favoritos.find({});
  },
  fotosDeFavoritos(anuncianteId) {
    return Fotos.find({anuncianteId: anuncianteId});
  },
  nombreDeFavoritos(anuncianteId) {
    return Anunciantes.findOne({_id: anuncianteId}).nombre;
  }
});
