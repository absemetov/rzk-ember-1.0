import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    timestamp: DS.attr('number'),
    qty: DS.attr('number'),
    price: DS.attr('number'),
    product: DS.belongsTo('fireProduct', {async: true, inverse: null}), // _not_ embedded
    total: Ember.computed('price', 'qty', function() {
      return this.get('price') * this.get('qty');
      //return Math.round(this.get('price') * this.get('qty') * 100) / 100;
    }),
});
