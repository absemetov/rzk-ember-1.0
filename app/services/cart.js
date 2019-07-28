import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
import config from '../config/environment';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  shopCurrency: config.shopCurrency,
  ajax: Ember.inject.service(),
  cartStorage: storageFor('cart'),
  fireId: storageFor('fireid'),
  fireStorage: storageFor('firecart'),
  productSort: ['sort'],
  sortedProducts: Ember.computed.sort('cartStorage', 'productSort'),
  cartGoodsIds: Ember.computed.mapBy('sortedProducts', 'id'),
  goodsPosition: Ember.computed.mapBy('cartGoodsArray', 'sort'),
  incrementSort: Ember.computed.max('goodsPosition'),
  cartGoodsTotal: Ember.computed.mapBy('cartStorage', 'total'),
  total: Ember.computed.sum('cartGoodsTotal'),
  cartGoodsCount: Ember.computed.mapBy('cartStorage', 'count'),
  countGoods: Ember.computed.sum('cartGoodsCount'),
  cartGoodsArray: Ember.computed('cartStorage.[]', function(){
    if(this.get('cartGoodsIds.length') === 0) {
        return [];
    } else {
        return this.get('cartStorage.content');
    }
  }),
  cartToJson: Ember.computed('cartStorage.[]', function(){
        var jsonCart = [];
        
        this.get('cartGoodsArray').map(function(item) {
          //jsonCart = item.id;
          jsonCart.push({'id': item.id, 'qty': item.count});
        });
        
        return JSON.stringify(jsonCart);
  }),
  add(product, qty, firedisable) {
    
    var item = this.get('cartStorage.content').findBy('id', product.get('id'));

    var count_goods = parseInt(qty, 10);
    
    if(!count_goods) {
      count_goods = null;
    }
    
    var total = count_goods * product.get('price');
    
    var increment;
    
    if(this.get('cartGoodsIds.length') === 0) {
      increment = 1;
    } else {
      increment = this.get('incrementSort') + 1;
    }
    
    if(!item) {
      if (count_goods > 0) {
        this.get('cartStorage').addObject({'id': product.get('id'), 'sort': increment, 'count': count_goods, 'total': total});
        product.set('count', count_goods);
      }
    } else {
      
      Ember.set(item, 'count', count_goods);
      Ember.set(item, 'total', total);

      this.get('cartStorage').removeObject(item);
      product.set('count', 0);
      
      if(count_goods > 0) {
        this.get('cartStorage').addObject(item);
        product.set('count', count_goods);
      }
      
    }
    
    //firebase
    if (firedisable === undefined) {
        
        var fireitem = this.get('fireStorage.content').findBy('id', product.get('id'));
        var firecart = this.get('fireId.content.firstObject.firebase_cart_id');
        
        var formData = {
            id: product.get('id'),
            qty: count_goods,
            firebase_cart_id: firecart ? firecart : null,
            firebase_product_id: fireitem ? fireitem.firebase_product_id : null,
            total: this.get('total')
        };
        
        if(fireitem) {
          this.get('fireStorage').removeObject(fireitem);
        }
        
        this.get('ajax').request('/fire/product', {
            method: 'POST',
            data: formData,
        }).then( response => {
          if (response.firebase_product_id) {
            this.get('fireStorage').addObject({
              'id': product.get('id'),
              'firebase_product_id': response.firebase_product_id
            });
          }
          if(!firecart) {
            this.get('fireId').addObject({
              'firebase_cart_id': response.firebase_cart_id
            });
          }
        });
    } 

  },
  remove(productId){
    var item = this.get('cartStorage.content').findBy('id', productId);
    this.get('cartStorage').removeObject(item);
  },
  clear(){
    this.get('cartStorage').clear();
  },
  clearFire(){
    this.get('fireStorage').clear();
    this.get('fireId').clear();
  }
});