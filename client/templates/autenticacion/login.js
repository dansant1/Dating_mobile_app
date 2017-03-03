document.addEventListener("backbutton", onBackButtonDown, false);

function onBackButtonDown(event) {
    event.preventDefault();
    event.stopPropagation()
}

Template.login.onRendered(()=> {
});


Template.login.events({
    'click .ingresar'(event, template) {
        event.preventDefault();

        Meteor.loginWithNativeFacebook(['email'], function(err) {
          if ( err ){
            console.log( err );
            return ;
          }
          FlowRouter.go('/verificar');
        })

        /*let datos = {
         email: template.find("[name='usuario']").value,
         password: template.find("[name='password']").value
         }
         //alert(datos);
         if (datos.email !== "" && datos.password !== "") {
         Meteor.loginWithPassword(datos.email, datos.password, function (error) {
         if (error) {
         alert(error);
         } else {
         FlowRouter.go('/anuncios');
         }
         });
         } else {

         alert('Completa los datos' );

         }*/
    },
    'click #logout'(){
      Meteor.logout();
    }
});


Template.loginAnunciante.events({
    'click .ingresar'(event, template) {
        event.preventDefault();

        let datos = {
         email: template.find("[name='usuario']").value,
         password: template.find("[name='password']").value
         }

         if (datos.email !== "" && datos.password !== "") {
         Meteor.loginWithPassword(datos.email, datos.password, function (error) {
         if (error) {
         alert(error);
         } else {
           FlowRouter.go('/');
         }
         });
         } else {

           alert('Completa los datos' );

         }
    }
});

Template.tiendas.onCreated((options, user) => {
    console.log(options);
    console.log(user);
});


Template.Verificar.onCreated(()=> {
    console.log(Meteor.connection.userId());
});

Template.Verificar.events({
    'click .sms': function (e, t) {
        e.preventDefault();

        let datos = {
            user: t.find("[name='user']").value,
            celular: t.find("[name='celular']").value,

        }

        if (datos.user !== "" && datos.celular !== "") {
            Meteor.call('crearToken', datos.celular, function (err) {
                if (err) {
                    alert(err);
                } else {
                    FlowRouter.go('/codigo');
                    alert('Te hemos enviado un sms con el código de verificación');
                }
            });
        } else {
            alert('Complete los datos');
        }
    }
});

Template.codigo.events({
    'click .v': function (e, t) {
        let codigo = t.find("[name='codigo']").value;

        if (codigo !== "") {
            Meteor.call('verificarToken', codigo, function (err) {
                if (err) {
                    alert(err);
                } else {
                    FlowRouter.go('/anuncios');
                }
            });
        } else {
            alert('Ingrese el código de verificación');
        }
    }
});
