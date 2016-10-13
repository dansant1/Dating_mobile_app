Meteor.publish('contactos', function () {
  if (this.userId) {
    return Contactos.find({userId: this.userId});
  } else {
    this.stop();
    return;
  }
});
