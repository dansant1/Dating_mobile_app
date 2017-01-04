function geocodeLatLng () {

  let geocoder = new google.maps.Geocoder;
  let latlng;

navigator.geolocation.getCurrentPosition(function (position) {
    latlng = {
      lat: position.coords.latitude, 
      lng: position.coords.longitude
    }

    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          let number = 982200441;
          //let number = Meteor.user().profile.telefonoDeConocido;
          let ubicacion = results[0].formatted_address;
          let message = '¡Necesito ayuda!, estoy en ' + ubicacion + " Mis coordenadas son: " + latlng.lat + ", " + latlng.lng;

          if (message) {
            
            //CONFIGURACIÓN
            var options = {
              replaceLineBreaks: false,
                android: {
                  intent: 'INTENT'
              }
            };

            var success = function () { //alert('Mensaje enviado exitosamente'); 
            };
            var error = function (e) { alert('Mensaje fallido:' + e); };
            sms.send(number, message, options, success, error);
          
        }

          console.log(results[1]);
          //return results[1].formatted_address;
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
    //alert(latlng.lat);
}, function (error) {
              alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
});
  
  

 
}

Template.layout.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('bannersPub');
  });
});

Template.layout.onRendered(function () {
  GoogleMaps.load({ v: '3', key: 'AIzaSyAVctAqnGHneN7aqeg7o5NTQTU-378KqEM', libraries: 'geometry,places' });
  Session.set('abrir', '');
});

Template.layout.helpers({
  mostrar: function () {
    return Session.get('abrir');
  },
  banners: function () {
    return BannersPub.find();
  }
});

Template.layout.events({
  'click .abrir': function () {
    if ( Session.get('abrir') === "") {
      Session.set('abrir', 'mostrar');
    } else {
      Session.set('abrir', '');
    }
  },
  'click .cerrar': function () {
    if ( Session.get('abrir') === "") {
      Session.set('abrir', 'mostrar');
    } else {
      Session.set('abrir', '');
    }
  },
  'click .panico': function () {
    if (GoogleMaps.loaded()) {   
      //alert('holas');
      let ubicacion = geocodeLatLng();
      Session.set('abrir', '');
    }
  },
  'click .logout': function  () {
    Meteor.logout();
  },
  'click .a': function () {
    Session.set('abrir', '');
  },
  'click .t':function () {
    Session.set('abrir', '');
  }
});
