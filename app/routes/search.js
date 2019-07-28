import Ember from 'ember';
import RSVP from 'rsvp';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model(params) {
    let firstLetter = params['q'].charAt(0);
    
    if (firstLetter === '.') {
        
        //remove slashes
        
        while(params['q'].charAt(0) === '.')
        {
          params['q'] = params['q'].substr(1);
        }
        
        return RSVP.hash({
          catalogs: this.store.query('catalog', params)
        });

    } else {
        return RSVP.hash({
          //goods: this.store.query('product', params)
          products: this.infinityModel("product", {
            perPage: 16,
            q: params['q'],
            startingPage: 1,
            modelPath: 'controller.model.products'
          })
        });
    }
    
  },
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    // Implement your custom setup after
    this.controllerFor('application').set('myParam', controller.get('q'));
   //Ember.$("#search-input").val(controller.get('q'));
  //   // Call _super for default behavior
  //   //this._super(controller, model);
  //   // Implement your custom setup after
    
  //   //this.controllerFor('application').set('query', controller.get('q'));
    
  },
  titleToken: 'Поиск товаров',
  activate () {
    this._super();
    window.scrollTo(0,0);
  }
});
