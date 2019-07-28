import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['z', 'hash'],
  actions: {
    redirect() {
      this.transitionToRoute('orders');
    }
  }
});
