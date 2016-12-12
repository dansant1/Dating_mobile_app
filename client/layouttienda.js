Template.layoutTiendas.onRendered(function () {
  //Session.set('abrir', '');
});

Template.layoutTiendas.helpers({
  mostrar: function () {
    return Session.get('abrir');
  }
});

Template.layoutTiendas.events({
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
    let number = 982200441;
    let message = '¡Necesito ayuda!';

    console.log("número: " + number + ", mensaje: " + message);

    //CONFIGURACIÓN
    var options = {
        replaceLineBreaks: false,
        android: {
            intent: 'INTENT'
        }
    };

    var success = function () { alert('Mensaje enviado exitosamente'); };
    var error = function (e) { alert('Mensaje fallido:' + e); };
    sms.send(number, message, options, success, error);
  }
});
