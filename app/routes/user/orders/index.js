import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(AuthenticatedRouteMixin, InfinityRoute, {
    model() {
        //return this.get('store').queryRecord('user', {orders: 'all'});
        return this.infinityModel("order", {
            perPage: 16,
            startingPage: 1,
            //modelPath: 'controller.model.products'
        });
    },
    activate() {
        this._super();
        window.scrollTo(0,0);
    }
});
