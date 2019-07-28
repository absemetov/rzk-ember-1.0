/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/magnific-popup/dist/jquery.magnific-popup.min.js');
  app.import('bower_components/magnific-popup/dist/magnific-popup.css');
  
  //fontawesome
  app.import('bower_components/fontawesome-free-webfonts/css/fontawesome.css');
  app.import('bower_components/fontawesome-free-webfonts/css/fa-brands.css');
  app.import('bower_components/fontawesome-free-webfonts/css/fa-regular.css');
  app.import('bower_components/fontawesome-free-webfonts/css/fa-solid.css');
  
  app.import('bower_components/fontawesome-free-webfonts/webfonts/fa-solid-900.woff2', {
    destDir: 'webfonts'
  });
  
  app.import('bower_components/fontawesome-free-webfonts/webfonts/fa-brands-400.woff2', {
    destDir: 'webfonts'
  });
  
  app.import('bower_components/fontawesome-free-webfonts/webfonts/fa-regular-400.woff2', {
    destDir: 'webfonts'
  });
  
  app.import('bower_components/fontawesome-free-webfonts/webfonts/fa-regular-400.woff', {
    destDir: 'webfonts'
  });
  
  app.import('bower_components/fontawesome-free-webfonts/webfonts/fa-regular-400.ttf', {
    destDir: 'webfonts'
  });
  
  //algolia and autocomplite
  app.import('bower_components/algoliasearch/dist/algoliasearch.min.js');
  app.import('bower_components/algolia-autocomplete.js/dist/autocomplete.min.js');
  //custom js
  app.import('vendor/script.js');
  
  return app.toTree();
};
