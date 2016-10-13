Meteor.publish('anunciantes', function () {
  if (this.userId) {
    return Anunciantes.find({anuncia: true});
  } else {
    this.stop();
    return;
  }
});
