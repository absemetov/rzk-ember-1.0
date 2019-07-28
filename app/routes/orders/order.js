import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').queryRecord('order', params);
  },
  activate() {
    this._super();
    window.scrollTo(0,0);
  },
  actions: {
    error(error) {
      if (error) {
        return this.transitionTo('catalogs');
      }
    }
  }
});
