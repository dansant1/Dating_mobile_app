import CallNumber from 'call-number';

Template.PerfilAnunciante.onRendered(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
    watchSlidesProgress: false
  });

  $('table tr').each(function(){  $(this).find('th').first().addClass('first');  $(this).find('th').last().addClass('last');  $(this).find('td').first().addClass('first');
  $(this).find('td').last().addClass('last');});$('table tr').first().addClass('row-first');$('table tr').last().addClass('row-last');
});

Template.PerfilAnunciante.events({
  'click .llamar'() {
    let numero = this.telefono;
    
    function onSuccess(result){
      console.log("Success: " + result);
    }

    function onError(result) {
      console.log("Error: " + result);
    }

    CallNumber.callNumber(onSuccess, onError, numero, false);
  },
  'click .panico'() {

        let number = document.getElementById('numberTxt').value;
        let message = document.getElementById('messageTxt').value;
        
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

Template.PerfilAnunciante.helpers({
  estaPendiente() {
    let anuncioId = FlowRouter.getParam('anuncioId');
    let pendiente = Contactos.findOne({ anuncioId: anuncioId, userId: Meteor.userId() }).pendiente;
    let existe = Contactos.findOne({ anuncioId: anuncioId, userId: Meteor.userId() })
    if ( pendiente === false || existe === undefined  ) {
      return true;
    } else {
      return false;
    }
  }
});
