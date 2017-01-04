Meteor.methods({
  crearUsuario: function (datos)  {

		let usuarioId = Accounts.createUser(datos);


		if (usuarioId) {

			Roles.addUsersToRoles(usuarioId, ['usuario'], 'app');
      console.log('creado');

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
  crearVendedor: function (datos) {

    let usuarioId = Accounts.createUser({
      email: datos.email,
      password: datos.password
    });

    let tiendaId = Tiendas.insert({
      nombre: datos.nombre,
      rubro: datos.rubro,
      telefono: datos.telefono,
      horario: datos.horario
    });

		if (usuarioId) {

			Roles.addUsersToRoles(usuarioId, ['vendedor'], 'app');

      Meteor.users.update({_id: usuarioId}, {
        $set: {
          'profile.tiendaId': tiendaId
        }
      });
      
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
