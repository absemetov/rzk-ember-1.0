import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    //cart: Ember.inject.service(),
    shoppingCart: Ember.inject.service(),
    name: DS.attr('string'),
    fullName: Ember.computed('name', 'brandName', function() {
      if (this.get('brandName')) {
        return `${this.get('brandName')} ${this.get('name')}`; 
      } else {
        return this.get('name');  
      }
    }),
    brandName: DS.attr('string'),
    brandUrl: DS.attr('string'),
    warehouse: DS.attr('string'),
    instock: DS.attr('boolean'),
    description: DS.attr('string'),
    oftenBuy: DS.hasMany('product'),
    photos: DS.hasMany('photo'),
    tags: DS.hasMany('catalog'),
    price: DS.attr('number'),
    count: DS.attr('number'),
    countOrder: DS.attr('number'),
    unit: DS.attr('string'),
    imageUrl: DS.attr('string'),
    imageStyle: Ember.computed('imageUrl', function() {
      if (this.get('imageUrl') && ~this.get('imageUrl').indexOf("http")) {
        return Ember.String.htmlSafe("height: 250px;");
      } else {
        return Ember.String.htmlSafe("");
      }
    }),
    imageUrl250: Ember.computed('imageUrl', function() {
      if (this.get('imageUrl') && ~this.get('imageUrl').indexOf("http")) {
        return this.get('imageUrl');
      } else {
        return `https://s3.eu-central-1.amazonaws.com/rzk.com.ua/250.${this.get('imageUrl')}`;  
      }
    }),
    imageUrl800: Ember.computed('imageUrl', function() {
      if (this.get('imageUrl') && ~this.get('imageUrl').indexOf("http")) {
        return this.get('imageUrl');
      } else {
        return `https://s3.eu-central-1.amazonaws.com/rzk.com.ua/800.${this.get('imageUrl')}`;  
      }
    }),
    // qty: Ember.computed('cart.cartGoodsArray.[]', function() {
    //   var item = this.get('cart.cartGoodsArray').findBy('id',this.get('id'));
    //   if(item) {
    //     return item.count;  
    //   }
    //   return 0;
    // }),
    qty: Ember.computed('shoppingCart.cartArray.@each.qty', function() {
      if(this.get('shoppingCart').getItem(this.get('id')).length) {
        return this.get('shoppingCart').getItem(this.get('id'))[0].qty;
      } else {
        return 0;
      }
    }),
    // sort: Ember.computed('cart.cartGoodsArray.[]', function() {
    //   var item = this.get('cart.cartGoodsArray').findBy('id',this.get('id'));
    //   if(item) {
    //     return item.sort;  
    //   }
    // }),
    //catalogs: DS.hasMany('catalog'),
    total: Ember.computed('price', 'qty', function() {
      return this.get('price') * this.get('qty');
      //return Math.round(this.get('price') * this.get('qty') * 100) / 100;
    }),
    //to User Order
    totalByCount: Ember.computed('price', 'count', function() {
      return Math.round(this.get('price') * this.get('count') * 100) / 100;
    }),
    totalByCountOrder: Ember.computed('price', 'countOrder', function() {
      return Math.round(this.get('price') * this.get('countOrder') * 100) / 100;
    })
});
