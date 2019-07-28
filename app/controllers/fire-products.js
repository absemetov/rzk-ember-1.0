import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['orderBy'],
    orderBy: 'qty',
    sortedGoods: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: Ember.computed('orderBy', function() {
      if(this.get('orderBy') === 'qty') {
        return  ['qty:desc'];    
      } else {
        return  ['orders:desc'];
      }
    }),
    actions: {
        toggleSort(value) {
          this.set('orderBy', value);
        }   
    }
});
