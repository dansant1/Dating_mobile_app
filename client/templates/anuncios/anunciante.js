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
