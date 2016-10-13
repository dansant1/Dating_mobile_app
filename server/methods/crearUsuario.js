Meteor.methods({
  crearUsuario: function (datos)  {
		/*check(datos, {
			email: String,
			password: String,
      username: String
      profile: {
				nombre: String,

			}
		}); */

		let usuarioId = Accounts.createUser(datos);


		if (usuarioId) {

			Roles.addUsersToRoles(usuarioId, ['usuario'], 'app');

      return {
        user: usuarioId
      }

		} else {
			return;
		}

	},
  crearAdministrador: function () {

    let usuarioId = Accounts.createUser(datos);
		if (usuarioId) {

			Roles.addUsersToRoles(usuarioId, ['administrador'], 'app');

		} else {
			return;
		}
  }
});
