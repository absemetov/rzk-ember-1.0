import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').findRecord('user', params.user_id);
  },
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});
