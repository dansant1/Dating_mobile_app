Meteor.publish('anunciantes', function () {
  if (this.userId) {
    return Anunciantes.find({});
  } else {
    this.stop();
    return;
  }
});
