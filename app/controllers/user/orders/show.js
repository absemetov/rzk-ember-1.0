import Ember from 'ember';

export default Ember.Controller.extend({
    //cart: Ember.inject.service(),
    cartGoodsCount: Ember.computed.mapBy('model.lineItems', 'countOrder'),
    countGoods: Ember.computed.sum('cartGoodsCount'),
    classStatus: Ember.computed('model.statusId', function() {
        
        switch (this.get('model.statusId')) {
          case 1:
            return 'primary';
          case 2:
            return 'success';
          case 3:
            return 'default';
          case 4:
            return 'danger';
          case 5:
            return 'warning';
          case 6:
            return 'info';
          case 7:
            return 'success';
          case 8:
            return 'info';
          case 9:
            return 'danger';
          case 10:
            return 'default';
        }

    })
});
