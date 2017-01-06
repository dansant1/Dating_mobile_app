Template.productos.onCreated( () => {
  
  let template = Template.instance();

    template.searchQuery = new ReactiveVar();
    template.searching   = new ReactiveVar( false );

    template.autorun( () => {
      template.subscribe( 'productos2', template.searchQuery.get(), () => {
          console.log('funco');
          setTimeout( () => {
            console.log(template.searching.get());
            template.searching.set( false );
          }, 300 );
    });


    template.subscribe( 'todosComentariosProductos' );
    template.subscribe( 'fotosp' );

    });
    
});

Template.productos.events({
  'click .anuncio': function () {
    FlowRouter.go('/productos/' + this._id);
  },
  'keyup [name="search"]' ( event, template ) {
    console.log('hola');
    let value = event.target.value.trim();

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      console.log(template.searchQuery.get());
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});

Template.productos.helpers({
  productos() {
    let a = Productos.find();
    if ( a ) {
      return a;
    }
  
  },
  foto: function () {
    return FotosProductos.find({'metadata.tiendaId': Template.parentData(0)._id});
  },
  comentarios: function () {
    return ComentariosProductos.find({productoId: this._id}).fetch().length;
  },
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  }
});

/*Template.tienda.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('tiendas');
    self.subscribe('productos',  FlowRouter.getParam('tiendaId'));
  });
});*/

Template.tiendas.onCreated( () => {
  
  let template = Template.instance();

    template.searchQuery = new ReactiveVar();
    template.searching   = new ReactiveVar( false );

    template.autorun( () => {
      template.subscribe( 'tiendas2', template.searchQuery.get(), () => {
          console.log('funco');
          setTimeout( () => {
            console.log(template.searching.get());
            template.searching.set( false );
          }, 300 );

      });

      template.subscribe('productos',  FlowRouter.getParam('tiendaId'));
    
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

Template.tiendas.events({
  'keyup [name="search"]' ( event, template ) {
    console.log('hola');
    let value = event.target.value.trim();

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      console.log(template.searchQuery.get());
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});

Template.tienda.onCreated( function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('tiendas');
    self.subscribe('productos',  FlowRouter.getParam('tiendaId'));
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
    let t = Tiendas.find();
    if (t) {
      return t
    }
  },
  productos: function (tiendaId) {
    return Productos.find({tiendaId: tiendaId}).fetch().length;
  },
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  }
});
