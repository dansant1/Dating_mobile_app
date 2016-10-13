Meteor.publish('favoritos', function () {
  if (this.userId) {
    return Favoritos.find({userId: this.userId});
  } else {
    this.stop();
    return;
  }
});
