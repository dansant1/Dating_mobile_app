Template.todos.onCreated( function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('anunciantes');
    self.subscribe('fotos');
    self.subscribe('todosComentarios');
  });
});

Template.todos.onRendered(function () {
  $('.md-select').on('click', function(){
  $(this).toggleClass('active')
})

$('.md-select ul li').on('click', function() {
  var v = $(this).text();
  $('.md-select ul li').not($(this)).removeClass('active');
  $(this).addClass('active');
  $('.md-select label button').text(v)
})
});

Template.todos.events({
  'click .anuncio': function () {
    FlowRouter.go('/anunciante/' + this._id);
  }
});

Template.todos.helpers({
  anunciantes() {
    return Anunciantes.find({anuncia: true});
  },
  foto: function () {
    return Fotos.find({'metadata.anuncianteId': Template.parentData(0)._id});
  },
  comentarios: function () {
    return Comentarios.find({anuncianteId: this._id}).fetch().length;
  }
});
