import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    name: DS.attr('string'),
    price: DS.attr('number'),
    qty: DS.attr('number'),
    unit: DS.attr('string'),
    total: Ember.computed('price', 'qty', function() {
      return Math.round(this.get('price') * this.get('qty') * 100) / 100;
    }),
});
