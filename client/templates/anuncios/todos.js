Template.todos.onCreated( function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('anunciantes');
  });
});

Template.todos.helpers({
  anunciantes() {
    return Anunciantes.find();
  }
});
