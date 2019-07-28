import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  //cart: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  loadingSlider: Ember.inject.service(),
  carrierNumberValidation: Ember.computed('model.order.errors.carrierNumber', function() {

      if(this.get('model.order.errors.carrierNumber')) {
        return 'error';  
      } else {
        return 'default';
      }
    
  }),
  actions: {
      save(order) {
        this.set('disabledButton', true);
        this.set("buttonState", "loading");
        this.get('loadingSlider').startLoading();
        
        order.save()
          .then((order) => {
            this.set("buttonState", "default");
            this.get('shoppingCart').fire('save');
            this.get('shoppingCart').clear();
            //this.get('cart').clearFire();
            this.transitionToRoute('share-order', order.get('id'), {queryParams: {hash: order.get('hash'), z: 1}});
          }).catch(() => {
            this.set("buttonState", "default");
            this.set('disabledButton', false);
          });
      },
      selectCarrierId(id) {
        this.set('model.order.carrierId', id);
      },
      selectPaymentId(id) {
        this.set('model.order.paymentId', id);
      }
  }
});
