App.info({
    id: 'com.grupo.ddv.sincompromiso.pe',
    name: 'Sin Compromiso',
    description: 'APP',
    author: 'Sin Compromiso - DDV',
    email: 'danieldelgadilloh@gmail.com',
    website: 'http://sincompromiso.grupoddv.com',
    version: '0.0.1',
    buildNumber: '100',
});

App.configurePlugin('cordova-plugin-facebook4', {
    APP_ID: '128403600999995',
    APP_NAME: 'SinCompromiso'
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

App.setPreference('SplashScreen', 'CDVSplashScreen');
App.setPreference('AutoHideSplashScreen', false);
App.setPreference('SplashScreenDelay', '30000');
