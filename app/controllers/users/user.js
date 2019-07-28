import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    redirect() {
      this.transitionToRoute('users');
    }
  }
});
