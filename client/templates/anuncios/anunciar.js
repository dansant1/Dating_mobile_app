Template.Anunciar.helpers({
  mostrar: function () {
    return Session.get('abrir');
  }
});

Template.Anunciar.events({
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
  'click .ingresar': function (event, template) {
    event.preventDefault();

    let datos = {
      piel: template.find("[name='piel']").value,
      cabello: template.find("[name='pelo']").value,
      intereses: template.find("[name='intereses']").value,
      genero: template.find("[name='genero']").value,
      ubicacion: template.find("[name='ubicacion']").value,
      contextura: template.find("[name='medidas']").value
    }

    if (
      datos.piel !== "" &&
      datos.intereses !== "" &&
      datos.cabello !== "" &&
      datos.genero !== "" &&
      datos.ubicacion !== "" &&
      datos.contextura !== ""
    ) {
      Meteor.call('postular', datos, function (error) {
        if (error) {
          console.log('Hubo un error');
          FlowRouter.go('/anuncios');
        } else {
          FlowRouter.go('/anuncios');
        }
      });
    }
  }
});
