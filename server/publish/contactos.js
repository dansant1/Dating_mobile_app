Meteor.publish('contactos2', function () {
  if (this.userId) {
    return Contactos.find({de: this.userId});
  } else {
    this.stop();
    return;
  }
});
