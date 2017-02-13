import { Meteor } from 'meteor/meteor';


ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1317953378285616',
    secret: '566fc6bf1f7b288f9e69989d2d185e7c'
});


Accounts.onCreateUser(function (options, user) {


    console.log('THIS');
    console.log(user);
    if (!user.services.facebook) {
        return user;
    }

    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});

console.log('TEST');
