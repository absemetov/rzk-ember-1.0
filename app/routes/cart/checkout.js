import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    activate() {
        if(this.get('session.isAuthenticated')) {
          this.transitionTo('cart.purchase');
        }
        window.scrollTo(0,0);
    },
    titleToken: 'Авторизация'
});
