Meteor.methods({
  crearUsuario: function (datos)  {

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
  crearAdministrador: function (datos) {

    let usuarioId = Accounts.createUser(datos);
		if (usuarioId) {

			Roles.addUsersToRoles(usuarioId, ['administrador'], 'app');

		} else {
			return;
		}
  },
  crearVendedor: function (datos, tienda) {

    let usuarioId = Accounts.createUser(datos);

    let tiendaId = Tiendas.insert({
      nombre: tienda,
      usuarioId: usuarioId
    });

		if (usuarioId) {
			Roles.addUsersToRoles(usuarioId, ['vendedor'], 'app');
		} else {
			return;
		}
  },
  crearProducto: function (datos) {
    if (this.userId) {
      let tiendaId = Tiendas.findOne({usuarioId: this.userId})._id;
      let producto = Productos.insert({
        tiendaId: tiendaId,
        titulo: datos.titulo,
        descripcion: datos.descripcion,
        precio: datos.precio,
        calificacion: 0
      });
    } else {
      return;
    }
  }
});
