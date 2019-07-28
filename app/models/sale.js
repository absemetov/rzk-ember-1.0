import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  published_at: DS.attr('number'),
  products: DS.hasMany('product'),
  mainPage: DS.attr('boolean')
});
