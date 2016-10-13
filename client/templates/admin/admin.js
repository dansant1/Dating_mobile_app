Template.loginAdmin.events({
  'submit form': function (event, template) {
    event.preventDefault();

    let email = template.find("[name='email']").value;
    let password = template.find("[name='password']").value;

    if (email !== "" && password !== "") {
      Meteor.loginWithPassword(email, password, function (error) {
        if (error) {
          console.log('Hubo un error');
        } 
      });
    }
  }
});
