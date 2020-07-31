Meteor.publish('fotos', function () {
  
    return Fotos.find({});
  

});

Meteor.publish('fotost', function () {
  if (this.userId) {
    return FotosTienda.find({});
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
