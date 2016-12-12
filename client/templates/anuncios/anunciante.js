//import CallNumber from 'call-number';

Template.PerfilAnunciante.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('anunciantes');
    self.subscribe('fotos');
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    self.subscribe('comentarios', anuncianteId);
    self.subscribe('contactos');
  });
});

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
    Modal.show('contactoAnunciante');
    //CallNumber.callNumber(onSuccess, onError, numero, false);
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
  },
  'click .1': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 1, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .2': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 2, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .3': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 3, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .4': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 4, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .5': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 5, anuncianteId,  function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .6': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 6, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .7': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 7, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .8': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 8, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .9': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 9, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .10': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('calificar', 10, anuncianteId,function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.show('calificar');
      }
    });
  },
  'click .contacto': function () {
    let anuncianteId = FlowRouter.getParam('anuncianteId')
    Meteor.call('contactar', anuncianteId, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Listo');
      }
    });
  }
});

Template.PerfilAnunciante.helpers({
  estaPendiente() {
    /*let anuncioId = FlowRouter.getParam('anuncianteId');
    let pendiente = Contactos.findOne({ anuncianteId: anuncioId, userId: Meteor.userId() }).aprobado;
    let existe = Contactos.findOne({ anuncianteId: anuncioId, userId: Meteor.userId() })
    if ( pendiente === false || existe === undefined  ) {
      return false;
    } else {
      return true;
    }*/
    let anuncioId = FlowRouter.getParam('anuncianteId')
    let aprobado = Contactos.find({ anuncianteId: anuncioId, de: Meteor.userId()}).aprobado;
    if (aprobado === false) {
      return true;
    } else {
      return false;
    }
  },
  fotos() {
      return Fotos.find({'metadata.anuncianteId': Template.parentData(0)._id});
  },
  anunciante: function () {
    return Anunciantes.findOne({_id: FlowRouter.getParam('anuncianteId')});
  },
  comentarios: function () {
    return Comentarios.find({}, {sort: {createdAt: -1}});
  }
});



Template.calificar.events({
  'click .comentar': function (event, template) {
    let comentario = template.find("[name='comentario']").value;
    let anuncianteId = FlowRouter.getParam('anuncianteId');
    Meteor.call('comentar', comentario, anuncianteId, function (err) {
      if (err) {
        console.log(err);
      } else {
        Modal.hide('calificar');
      }
    });
  }
});
