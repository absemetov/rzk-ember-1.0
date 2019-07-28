import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'q'],
  page: 1,
  q: '',
  searchInputChanged: Ember.observer('q', function() {
    this.setProperties({
      'page': 1
    });
  })
});
