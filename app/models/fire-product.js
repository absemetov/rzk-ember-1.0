import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  unit: DS.attr('string'),
  image_url: DS.attr('string'),
  qty: DS.attr('number'),
  orders: DS.attr('number'),
  timestamp: DS.attr('number')
});
