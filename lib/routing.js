FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('login');
  }
});

FlowRouter.route('/signup', {
  name: 'Signup',
  action() {
    BlazeLayout.render('signup');
  }
});

FlowRouter.route('/anuncios', {
  name: 'Anuncios',
  action() {
    BlazeLayout.render('layout', { contenido: 'todos'});
  }
});

FlowRouter.route('/productos', {
  name: 'Tiendas',
  action() {
    BlazeLayout.render('layoutTiendas', { contenido: 'productos'});
  }
});

FlowRouter.route('/productos/:productoId', {
  name: 'Tiendas',
  action() {
    console.log('gola');
    BlazeLayout.render('layoutTiendas', { contenido: 'producto'});
  }
});

FlowRouter.route('/compras', {
  name: 'Tiendas',
  action() {
    BlazeLayout.render('layoutTiendas', { contenido: 'compras'});
  }
});

FlowRouter.route('/tiendas', {
  name: 'Tiendas',
  action() {
    BlazeLayout.render('layoutTiendas', { contenido: 'tiendas'});
  }
});

FlowRouter.route('/tiendas/:tiendaId', {
  name: 'Tienda',
  action() {
    BlazeLayout.render('layoutTiendas', { contenido: 'tienda'});
  }
});

FlowRouter.route('/anunciante/:anuncianteId', {
  name: 'Perfil.Anunciante',
  action() {
    BlazeLayout.render('layout', { contenido: 'PerfilAnunciante'});
  }
});

FlowRouter.route('/contactos', {
  name: 'Contactos',
  action() {
    BlazeLayout.render('layout', { contenido: 'Contactos'});
  }
});

FlowRouter.route('/favoritos', {
  name: 'Favoritos',
  action() {
    BlazeLayout.render('layout', { contenido: 'Favoritos'});
  }
});

FlowRouter.route('/anunciar', {
  name: 'Anunciar',
  action() {
    BlazeLayout.render('Anunciar');
  }
});

FlowRouter.route('/comentar', {
  name: 'Comentar',
  action() {
    BlazeLayout.render('Comentar');
  }
});


FlowRouter.route('/admin', {
  name: 'Administrador',
  action() {
    BlazeLayout.render('Admin', { administrador: 'Administrador'});
  }
});

FlowRouter.route('/admin/anuncios', {
  name: 'Administrador.anuncios',
  action() {
    BlazeLayout.render('Admin', { administrador: 'AdministradorAnuncios'});
  }
});

FlowRouter.route('/admin/contratos', {
  name: 'Administrador.contratos',
  action() {
    BlazeLayout.render('Admin', { administrador: 'AdministradorContratos'});
  }
});


FlowRouter.route('/admin/usuarios', {
  name: 'Administrador.anuncios',
  action() {
    BlazeLayout.render('Admin', { administrador: 'Usuarios'});
  }
});

// Vendedores
FlowRouter.route('/ventas', {
  name: 'Ventas.login',
  action() {
    BlazeLayout.render('Ventas', { ventas: 'adminVentas'});
  }
});
