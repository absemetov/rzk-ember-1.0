import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  currentUser: Ember.inject.service('current-user'),
  sortProperties: ['timestamp:desc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties'),
  cart: Ember.inject.service(),
  actions: {
        deleteCart(cart) {
          cart.destroyRecord();
        }
  }
});

