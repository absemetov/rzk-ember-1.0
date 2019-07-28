import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        return this.get('store').queryRecord('order', {order_id: params.order_id});
    },
    activate() {
        this._super();
        window.scrollTo(0,0);
    }
});
