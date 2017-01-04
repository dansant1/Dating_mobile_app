Meteor.publish('fotos', function () {
  if (this.userId) {
    return Fotos.find({});
  } else {
    this.stop();
    return;
  }

});


Meteor.publish('bannersPub', function () {
  if (this.userId) {
    return BannersPub.find({});
  } else {
    this.stop();
    return;
  }

});

