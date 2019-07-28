import Ember from 'ember';
import RSVP from 'rsvp';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model(params) {
    
    var catalogsController = this.controllerFor('catalogs.show');
    
    catalogsController.set('previousTransition', params.path);
    catalogsController.set('selectedGoods', null);
    catalogsController.set('rootCatalogs', null);
    catalogsController.set('breadcrumbsGoods', null);
    
    //catalogsController.set('currentlyLoading', true);
    
    return RSVP.hash({
      panel: this.get('store').queryRecord('panel', { path: params.path, tag: params.tag, brand: params.brand }),
      products: this.infinityModel("product", {
        perPage: 16,
        startingPage: 1,
        path: params.path,
        tag: params.tag,
        brand: params.brand,
        sort: params.sort,
        modelPath: 'controller.model.products'
      })
    });
    
  },
  queryParams: {
    tag: {
      refreshModel: true
    },
    brand: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    }
  },
  activate () {
    this._super();
    window.scrollTo(0,0);
  },
  titleToken () {
    var catalogs = this.controllerFor('catalogs.show');
    return catalogs.get('selectedBrands').concat(catalogs.get('selectedTags')).concat(catalogs.get('title'));
  },
  actions: {
    // loading(transition) {
    //   let controller = this.controllerFor('catalogs.show');
    //   //controller.set('currentlyLoading', true);
    //   transition.promise.finally(function() {
    //       controller.set('currentlyLoading', false);
    //   });
    // },
    error(error) {
      if (error) {
        return this.transitionTo('catalogs');
      }
    }
  }
});
