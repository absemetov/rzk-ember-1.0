import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    queryParams: ['z', 'hash'],
    //cart: Ember.inject.service(),
    cartGoodsCount: Ember.computed.mapBy('model.lineItems', 'countOrder'),
    countGoods: Ember.computed.sum('cartGoodsCount'),
    // actions: {
    //     importToCart (products) {
    //         this.get('cart').clear();
    //         products.forEach((model_item) => {
    //           this.get('cart').add(model_item, model_item.get('countOrder'));
    //         });
    //         this.transitionToRoute('cart');
    //     }
    // }
});
