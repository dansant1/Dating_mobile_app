Template.todos.onCreated( function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('anunciantes');
  });
});

Template.todos.events({
  'click .anuncio': function () {
    FlowRouter.go('/anunciante/fdsf');
  }
});

Template.todos.helpers({
  anunciantes() {
    return Anunciantes.find();
  }
});
