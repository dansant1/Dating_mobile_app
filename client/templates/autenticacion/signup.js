Template.signup.events({
  'click .ingresar': function (event, template) {
      event.preventDefault();

      let datos = {
        username: template.find("[name='username']").value,
        email: template.find("[name='email']").value,
        password: template.find("[name='password']").value,
        profile: {
          nombre: template.find("[name='nombre']").value,
          edad: template.find("[name='edad']").value,
          telefono: template.find("[name='telefono']").value
        }
      }

      console.log(datos);

      if (datos.profile.nombre !== "" && datos.email !== "" && datos.password !== "" && datos.profile.edad >= 18 && datos.profile.telefono !== "") {
        Meteor.call('crearUsuario', datos, function (error, result) {
            if (error) {
              console.log('Hubo un error');
            } else {
              Meteor.loginWithPassword(datos.email, datos.password, function (error) {
                if (error) {
                  console.log('Hubo un error');
                } else {
                  FlowRouter.go('/anuncios');
                }
              });
            }
        });
      }
  }
});
