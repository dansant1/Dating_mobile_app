Meteor.publish('anunciantes', function () {
  if (this.userId) {
    return Anunciantes.find({anuncia: true});
  } else {
    this.stop();
    return;
  }
});


Meteor.publish('postulantes', function () {
  if (this.userId) {
    return Anunciantes.find({anuncia: false});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('users', function () {
  if (this.userId) {
    return Meteor.users.find();
  } else {
    this.stop();
    return;
  }
});


Meteor.publish('comentarios', function (anuncianteId) {
  if (this.userId) {
    return Comentarios.find({anuncianteId: anuncianteId});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('todosComentarios', function () {
  if (this.userId) {
    return Comentarios.find({});
  } else {
    this.stop();
    return;

  }
});


Meteor.publish('contactos', function () {
  if (this.userId) {
    return Contactos.find({});
  } else {
    this.stop();
    return;

  }
});
