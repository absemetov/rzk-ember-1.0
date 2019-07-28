import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //v1.0.0
  //Fire route
  this.route('fire-carts', { path: 'fire/c' }, function() {
    this.route('cart', { path: ':cart_id' });
  });

  this.route('fire-products', { path: 'fire/p' });

  //shop routes

  this.route('catalogs', { path: 'c' }, function() {
    this.route('show', { path: '*path' });
  });

  this.route('product', { path: 'p/:product_id' });

  this.route('user', function() {
    this.route('orders', function() {
      this.route('show', { path: ':order_id' });
    });
    this.route('profile');
  });

  this.route('cart', function() {
    this.route('purchase');
    this.route('checkout');    
  });

  this.route('search');

  this.route('login');

  this.route('register');

  this.route('forgot-password');

  this.route('reset-password', { path: 'password/reset/:token' });

  this.route('share-order', { path: 'share-order/:order_id' });

  this.route('sale', { path: 's' },  function() {
    this.route('show', { path: ':sale_id' });
  });

  this.route('brand', { path: 'b' }, function() {
    this.route('show', { path: ':brand_id'});
    this.route('catalog', { path: ':brand_id/c/*path' });  
  });

  this.route('share-cart', { path: 'share-cart/:cart_id' });
  
  // this.route('users', function() {
  //   this.route('user', { path: ':user_id' });
  // });

  // this.route('orders', function() {
  //   this.route('order', { path: ':order_id' });
  // });

  
});

export default Router;
