import Ember from 'ember';

export default Ember.Controller.extend({
  sortedBrands: Ember.computed.sort('model.brands', 'sortDefinition'),
  sortDefinition: ['sortId'],
});
