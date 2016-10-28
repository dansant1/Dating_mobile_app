Meteor.publish('contactos2', function () {
  if (this.userId) {
    return Contactos.find({userId: this.userId});
  } else {
    this.stop();
    return;
  }
});
