/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rzk-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    //disqus
    disqus: {
      shortname: 'rzk-com-ua',
      lazyLoad: false
    },
    shopCurrency: 'грн',
    shopUrl: 'http://rzk.com.ua',
    //apiHost: 'https://rzk-laravel-ukraine-absemetov.c9users.io',
    apiHost: 'https://rzk.com.ua',
    //for ember simple auth:)))
    baseURL:'/',
      // ...
    firebase: {
      //rzk.com.ua
      apiKey: "AIzaSyDHq5ONqkHh5kck-cKXt-jTvM2xiZBrSWM",
      authDomain: "rzk-com-ua.firebaseapp.com",
      databaseURL: "https://rzk-com-ua.firebaseio.com",
      storageBucket: "rzk-com-ua.appspot.com",
      messagingSenderId: "523783490177"
      
      //rzk.com.ru
      // apiKey: "AIzaSyC1dfb6olWIm5zHMMNtgxkxORUe19B6Kvk",
      // authDomain: "rzk-com-ru.firebaseapp.com",
      // databaseURL: "https://rzk-com-ru.firebaseio.com",
      // storageBucket: "rzk-com-ru.appspot.com",
      // messagingSenderId: "957086886491"

    },
    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
    moment: {
      // To cherry-pick specific locale support into your application.
      // Full list of locales: https://github.com/moment/moment/tree/2.10.3/locale
      includeLocales: ['ru']
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  
  
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:application',
    //routeAfterAuthentication: 'catalogs',
    //routeIfAlreadyAuthenticated: 'catalogs'
  };
  
  ENV['ember-simple-auth-token'] = {
    //serverTokenEndpoint: 'https://rzk-laravel-ukraine-absemetov.c9users.io/api/token-auth',
    serverTokenEndpoint: 'https://rzk.com.ua/api/token-auth',
    identificationField: 'email',
    refreshAccessTokens: true,
    //serverTokenRefreshEndpoint: 'https://rzk-laravel-ukraine-absemetov.c9users.io/api/token-refresh',
    serverTokenRefreshEndpoint: 'https://rzk.com.ua/api/token-refresh',
    tokenExpireName: 'exp',
    refreshLeeway: 30,
    timeFactor: 1000  // example - set to "1000" to convert incoming seconds to milliseconds.
  };
  
  if (environment === 'production') {
    ENV['ember-simple-auth-token'].serverTokenRefreshEndpoint = 'https://rzk.com.ua/api/token-refresh';
    ENV['ember-simple-auth-token'].serverTokenEndpoint = 'https://rzk.com.ua/api/token-auth';
    ENV.apiHost = 'https://rzk.com.ua';
  }
  
  return ENV;
};
