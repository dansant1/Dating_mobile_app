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
