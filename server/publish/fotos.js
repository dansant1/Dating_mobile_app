Meteor.publish('fotos', function () {
  if (this.userId) {
    return Fotos.find({});
  } else {
    this.stop();
    return;
  }

});
