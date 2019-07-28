import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.query('user', params);
  },
  queryParams: {
    page: {
      refreshModel: true
    },
    q: {
      refreshModel: true
    }
  },
  actions: {
    loading: function(transition) {
      let controller = this.controllerFor('users.index');

      transition.finally(() => {
        const model_lenght = controller.get('model.length');
        const page = controller.get('page') - 1;
        if(model_lenght === 0){
          if(page !== 0) {
            this.transitionTo({ queryParams: { page: page }});  
          }
        }
        
      });
    }
  },
  activate () {
    this._super();
    window.scrollTo(0,0);
  }

});
