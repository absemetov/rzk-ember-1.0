import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  
  cartArray: null,

  init() {
    this.set('cartArray', JSON.parse(window.localStorage.getItem("storage:cartNew")) || []);
    //LS event
    var callback = this._handleStorageEvent.bind(this);
    Ember.$(window).on('storage', callback);
  },
  
  info: Ember.computed('cartArray.@each.qty', function() {
    var countItems = 0;
    var sumQty = 0;
    var sumItems = 0;
    this.get('cartArray').forEach(function(item) {
      countItems++;
      sumQty += item.qty;
      sumItems += item.total;
    });
    var jsonId = JSON.stringify(this.get('cartArray').map(function(data) {     
      return data.id;
    }));
    var jsonIdQty = JSON.stringify(this.get('cartArray').map(function(data) {     
      return {id: data.id, qty: data.qty};
    }));
    return {count: countItems, total: Math.round(sumItems * 100) / 100, sumCount: sumQty, jsonId: jsonId, jsonIdQty: jsonIdQty};
  }),
  
  getItem(id) {
    return this.get('cartArray').filter(function(value) {
      return value.id === id; 
    });
  },
  
  add(data) {
    //var qtyInt = parseInt(qty, 10);
    if(data.qty) {
      if(this.getItem(data.id).length) {
        //edit Item
        Ember.set(this.getItem(data.id)[0], 'qty', data.qty);
        Ember.set(this.getItem(data.id)[0], 'total', data.total);
      } else {
        //add Item
        this.get('cartArray').pushObject(data);
      }
      //item.set('qtyShoppingCart', qtyInt);
    } else {
      //delete Item
      this.set('cartArray', this.get('cartArray').filter(function(value) {
        return value.id !== data.id; 
      }));
      //item.set('qtyShoppingCart', 0);
    }
    //save array to LS
    window.localStorage.setItem("storage:cartNew", JSON.stringify(this.get('cartArray')));
  },
  
  fire(data_json) {
    var formData = {
        firebase_cart_id: window.localStorage.getItem("storage:fireId"),
        cart_json: data_json,
        total: this.get('info.total')
    };
    this.get('ajax').request('/fire/product', {
        method: 'POST',
        data: formData,
    }).then( response => {
      if(window.localStorage.getItem('storage:fireId') === null) {
        window.localStorage.setItem('storage:fireId', response.firebase_cart_id);  
        //console.log(response.firebase_cart_id);
      }
    });
  },
  
  clear(){
    window.localStorage.removeItem("storage:cartNew");
    window.localStorage.removeItem("storage:fireId");
    this.set('cartArray', []);
  },
  
  _handleStorageEvent(event) {
    var storageEvent = event.originalEvent;
    var storageKey = storageEvent.key;
    if (storageKey === "storage:cartNew") {
      this.set('cartArray', JSON.parse(window.localStorage.getItem("storage:cartNew")) || []);
    }
  }
  
});
