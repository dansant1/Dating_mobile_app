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


FlowRouter.route('/admin', {
  name: 'Administrador',
  action() {
    BlazeLayout.render('Admin', { administrador: 'Administrador'});
  }
});
