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
