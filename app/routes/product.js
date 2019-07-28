import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    var catalogsShow = this.controllerFor('catalogs.show');
    if(catalogsShow.get('model')) {
      return RSVP.hash({
        product: this.store.findRecord('product', params.product_id),
        breadcrumbsGoods: this.get('store').query('catalog', {for_goods: params.product_id})
      });
    } else {
      return RSVP.hash({
        rootCatalogs: this.get('store').query('catalog', {root: true}),
        breadcrumbsGoods: this.get('store').query('catalog', {for_goods: params.product_id}),
        product: this.get('store').findRecord('product', params.product_id)
      });
    }
  },
  renderTemplate(controller, model) {

    var catalogsShow = this.controllerFor('catalogs.show');
    
    catalogsShow.set('selectedGoods', model.product);
    catalogsShow.set('breadcrumbsGoods', model.breadcrumbsGoods);
    
    if(!catalogsShow.get('model')) {
       controller.set('rootCatalogs', model.rootCatalogs);
       controller.set('breadcrumbsGoods', model.breadcrumbsGoods);
       this.render('product', {
        controller: controller,
        model: model.product
       });
    } else {
      this.render('catalogs.show', {
        controller: catalogsShow
      });
    }
    
  },
  activate() {
    this._super();
    window.scrollTo(0,0);
  },
  titleToken (model) {
    return model.product.get('name');
  },
  actions: {
    loading(transition) {
      let controller = this.controllerFor('catalogs.show');
      controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
          controller.set('currentlyLoading', false);
      });
    },
    error(error) {
      if (error) {
        return this.transitionTo('catalogs');
      }
    }
  }
});
