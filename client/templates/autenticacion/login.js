Template.login.events({
  'click .ingresar'(event, template) {
    event.preventDefault();

    let datos = {
      email: template.find("[name='usuario']").value,
      password: template.find("[name='password']").value
    }

    if (datos.email !== "" && datos.password !== "") {
      Meteor.loginWithPassword(datos.email, datos.password, function (error) {
        if (error) {
          console.log('Hubo un error');
        } else {
          FlowRouter.go('/anuncios');
        }
      });
    } else {
      console.log('Hubo un error :p' );
    }


  }
});
