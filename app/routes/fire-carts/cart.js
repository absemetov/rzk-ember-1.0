import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('fire-cart', params.cart_id);
  },
  //renderTemplate () {
    // this.render({
    //   into: 'application'
    // });
  //},
  titleToken: function(model) {
    return `Корзина ${model.get('id')}`;
  },
  setupController: function(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    this.controllerFor('fire-carts.cart').set('currency', config.currency);
  },
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});
