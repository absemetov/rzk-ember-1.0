import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

import LoadingSliderMixin from '../mixins/loading-slider';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, LoadingSliderMixin, {
    currentUser: service(),
    
    beforeModel() {
        return this._loadCurrentUser();
    },
    
    sessionAuthenticated() {
        
        this._super(...arguments);
        
        this._loadCurrentUser().then(()=>{
            
            //const attemptedTransition = this.get('session.attemptedTransition');

            // if (attemptedTransition) {
            //   attemptedTransition.retry();
            //   this.set('session.attemptedTransition', null);
            // } else {
            //   this.transitionTo('/');
            // }
            
        }).catch(() => this.get('session').invalidate());
        
    },
    _loadCurrentUser() {
        return this.get('currentUser').load();
    },
    title: function(tokens) {
        //tokens = Ember.makeArray(tokens);
        tokens.unshift('Интернет-магазин RZK Маркет Украина: электрофурнитура, розетки, выключатели, кабель, провод');
        return tokens.reverse().join(' - ');
    },
    activate () {
        this._super();
        window.scrollTo(0,0);
    }
});