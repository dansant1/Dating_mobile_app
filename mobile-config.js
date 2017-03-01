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

App.icons({
  'android_mdpi': 'public/android/mipmap-mdpi/ic_launcher.png',
  'android_hdpi': 'public/android/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi': 'public/android/mipmap-xhdpi/ic_launcher.png',
  'android_xxhdpi': 'public/android/mipmap-xxhdpi/ic_launcher.png',
  'android_xxxhdpi': 'public/android/mipmap-xxxhdpi/ic_launcher.png',
});

/*App.launchScreens({
  android_mdpi_portrait: ,
  android_mdpi_landscape: ,
  android_hdpi_portrait: ,
  android_hdpi_landscape: ,
  android_xhdpi_portrait: ,
  android_xhdpi_landscape:,
  android_xxhdpi_portrait: ,
  android_xxhdpi_landscape:
})*/

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

App.setPreference('SplashScreen', 'CDVSplashScreen');
App.setPreference('AutoHideSplashScreen', false);
App.setPreference('SplashScreenDelay', '1000');
