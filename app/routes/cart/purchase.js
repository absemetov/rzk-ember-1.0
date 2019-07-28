import Ember from 'ember';
//import { storageFor } from 'ember-local-storage';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  //cart: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  //fireId: storageFor('fireid'),
  model() {
    if(this.get('shoppingCart.info.count') === 0) {
      this.transitionTo('cart');
    }
    return RSVP.hash({
      order: this.store.createRecord('order'),
      //lineItems: this.get('store').query('product', {ids: this.get('cart.cartGoodsIds')})
    });
  },
  activate() {
    this._super();
    window.scrollTo(0,0);
  },
  setupController(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    
    // var cartGoodsArray = this.get('cart.cartGoodsArray');
    // this.get('cart').clear();
    // model.lineItems.forEach((model_item) => {
    //   var cart_item = cartGoodsArray.findBy('id', model_item.get('id'));
    //   this.get('cart').add(model_item, cart_item.count);
    // });
    //after redirect load user data
    
    if(this.get('session.isAuthenticated')) {
      if(this.get('currentUser.user')) {
        model.order.set('lastName', this.get('currentUser.user.lastName'));
        model.order.set('firstName', this.get('currentUser.user.firstName'));
        model.order.set('address', this.get('currentUser.user.address'));
        model.order.set('phoneNumber', this.get('currentUser.user.phoneNumber'));
      } else {
        this.get('store').queryRecord('user', {}).then((user) => {
          model.order.set('lastName', user.get('lastName'));
          model.order.set('firstName', user.get('firstName'));
          model.order.set('address', user.get('address'));
          model.order.set('phoneNumber', user.get('phoneNumber'));
        });
      }
    }
    
    //model.order.set('firebaseCartId', this.get('fireId.content.firstObject.firebase_cart_id'));
    model.order.set('firebaseCartId', window.localStorage.getItem('storage:fireId'));
    //model.order.set('lineItems', model.lineItems);
    model.order.set('jsonCart', this.get('shoppingCart.info.jsonIdQty'));
    model.order.set('total', this.get('shoppingCart.info.total'));
    controller.set('disabledButton', false);
  },
  titleToken: 'Оформление заказа',
});
