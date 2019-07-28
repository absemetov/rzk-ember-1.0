import Ember from 'ember';

export default Ember.Route.extend({
    //cart: Ember.inject.service(),
    shoppingCart: Ember.inject.service(),
    model() {
        return this.get('store').query('product', {cart_json: this.get('shoppingCart.info.jsonId') });
        // if(this.get('cart.cartGoodsIds.length') === 0) {
        //     return [];
        // } else {
        //   return this.get('store').query('product', {ids: this.get('cart.cartGoodsIds')});
        // }
    },
    setupController(controller, model) {
    //     // Call _super for default behavior
      this._super(controller, model);
      var cartId = JSON.parse(this.get('shoppingCart.info.jsonId'));

      if(cartId.length !== model.get("length")) {
        cartId.forEach((id) => {
          if (!model.findBy('id', id)) {
            //delete item
            this.get('shoppingCart').add({id: id, qty: 0});
          }
        });
      }
    //     var cartGoodsArray = this.get('cart.cartGoodsArray');
    //     this.get('cart').clear();
    //     model.forEach((model_item) => {
    //       var cart_item = cartGoodsArray.findBy('id', model_item.get('id'));
    //       this.get('cart').add(model_item, cart_item.count, true);
    //     });
    //     //collapse menu
    //     //var application = this.controllerFor('application');
    //     //application.set('collapsed', true);
    },
    titleToken: 'Корзина',
    activate () {
      this._super();
      window.scrollTo(0,0);
    }
});