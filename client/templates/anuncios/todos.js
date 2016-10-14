Template.todos.onCreated( function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('anunciantes');
    self.subscribe('fotos');
  });
});

Template.todos.events({
  'click .anuncio': function () {
    FlowRouter.go('/anunciante/' + this._id);
  }
});

Template.todos.helpers({
  anunciantes() {
    return Anunciantes.find({anuncia: true});
  },
  foto: function () {
    return Fotos.find({'metadata.anuncianteId': Template.parentData(0)._id});
  }
});
