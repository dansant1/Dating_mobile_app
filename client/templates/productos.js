Template.productos.onCreated( function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('todosproductos');
    self.subscribe('fotosp');
    self.subscribe('todosComentariosProductos');
  });
});

Template.productos.events({
  'click .anuncio': function () {
    FlowRouter.go('/productos/' + this._id);
  }
});

Template.productos.helpers({
  productos() {
    return Productos.find();
  },
  foto: function () {
    return FotosProductos.find({'metadata.tiendaId': Template.parentData(0)._id});
  },
  comentarios: function () {
    return ComentariosProductos.find({productoId: this._id}).fetch().length;
  }
});

Template.tienda.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('tiendas');
    self.subscribe('productos',  FlowRouter.getParam('tiendaId'));
  });
});

Template.tienda.helpers({
  nombre: function () {
    return Tiendas.findOne({_id: FlowRouter.getParam('tiendaId')}).nombre
  },
  productos: function () {
    return Productos.find();
  }
});

Template.tiendas.onCreated( function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('tiendas');
    self.subscribe('productos');
  //  self.subscribe('todosComentariosProductos');
  });
});

//Template.tiendas.events({
//'click .anuncio': function () {
//    FlowRouter.go('/productos/' + this._id);
//  }
//});

Template.tiendas.helpers({
  tiendas() {
    return Tiendas.find();
  },
  productos: function (tiendaId) {
    return Productos.find({tiendaId: tiendaId}).fetch().length;
  }
});
