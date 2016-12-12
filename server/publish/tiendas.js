Meteor.publish('productos', function () {
  if (this.userId) {
    return Productos.find();
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('tiendas', function () {
  if (this.userId) {
    return Tiendas.find();
  } else {
    this.stop();
    return;
  }
});


Meteor.publish('productosxtienda', function () {
  if (this.userId) {
    let tiendaId = Tiendas.findOne({usuarioId: this.userId})._id;
    return Productos.find({tiendaId: tiendaId});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('fotosp', function () {
  if (this.userId) {
    return FotosProductos.find();
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('todosComentariosProductos', function () {
  if (this.userId) {
    return ComentariosProductos.find();
  } else {
    this.stop();
    return;
  }
});


Meteor.publish('ComentariosProductos', function (productoId) {
  if (this.userId) {
    return ComentariosProductos.find({productoId: productoId});
  } else {
    this.stop();
    return;
  }
});
