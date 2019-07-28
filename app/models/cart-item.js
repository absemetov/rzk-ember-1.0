import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    cart: Ember.inject.service(),
    name: DS.attr('string'),
    price: DS.attr('number'),
    count: DS.attr('number'),
    unit: DS.attr('string'),
    qty: Ember.computed('cart.cartGoodsArray.[]', function() {
      var item = this.get('cart.cartGoodsArray').findBy('id',this.get('id'));
      if(item) {
        return item.count;  
      }
      return 0;
    }),
    sort: Ember.computed('cart.cartGoodsArray.[]', function() {
      var item = this.get('cart.cartGoodsArray').findBy('id',this.get('id'));
      if(item) {
        return item.sort;  
      }
    }),
    imageUrl: DS.attr('string'),
    //catalogs: DS.hasMany('catalog'),
    total: Ember.computed('price', 'qty', function() {
      return Math.round(this.get('price') * this.get('qty') * 100) / 100;
    }),
});