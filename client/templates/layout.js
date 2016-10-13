Template.layout.onRendered(function () {
  Session.set('abrir', '');
});

Template.layout.helpers({
  mostrar: function () {
    return Session.get('abrir');
  }
});

Template.layout.events({
  'click .abrir': function () {
    if ( Session.get('abrir') === "") {
      Session.set('abrir', 'mostrar');
    } else {
      Session.set('abrir', '');
    }
  },
  'click .cerrar': function () {
    if ( Session.get('abrir') === "") {
      Session.set('abrir', 'mostrar');
    } else {
      Session.set('abrir', '');
    }
  }
});
