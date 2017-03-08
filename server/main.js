import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
// var users = [{nombre:"Admin User",email:"admin@sincompromiso.pe",roles:['admin']}];
//
// _.each(users, function (user) {
//   var id;
//
//   id = Accounts.createUser({
//     email: user.email,
//     password: "miguel24",
//     profile: { name: user.name }
//   });
//
//   if (user.roles.length > 0) {
//
//     Roles.addUsersToRoles(id, user.roles, 'default-group');
//   }
//
// });

/*  user = Accounts.createUser({
    email: 'user@gmail.com',
    password: "20dejunio"
  });

  Meteor.users.update({_id: user}, {
    $set: {
      'profile.nombre': 'Daniel Parker',
      'profile.verificado': false
    }
  })
  Roles.addUsersToRoles(user, 'usuario', 'app');*/
});
