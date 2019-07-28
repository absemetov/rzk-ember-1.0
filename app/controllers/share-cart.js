import Ember from 'ember';

export default Ember.Controller.extend({
    //cart: Ember.inject.service(),
    shoppingCart: Ember.inject.service(),
    cartGoodsCount: Ember.computed.mapBy('model.lineItems', 'countOrder'),
    countGoods: Ember.computed.sum('cartGoodsCount'),
    actions: {
        importToCart (products) {
            this.get('shoppingCart').clear();
            products.forEach((model_item) => {
              //this.get('shoppingCart').add(model_item, model_item.get('countOrder'));
              this.get('shoppingCart').add({
                  id: model_item.get("id"),
                  qty: parseInt(model_item.get('countOrder'), 10),
                  total: model_item.get('totalByCountOrder')
              });
            });
            this.get('shoppingCart').fire();
            this.transitionToRoute('cart');
        }
    }
});
