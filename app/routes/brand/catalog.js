import Ember from 'ember';
import RSVP from 'rsvp';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model(param) {
    return RSVP.hash({
      brand: this.get('store').findRecord('brand', param.brand_id),
      //products: this.get('store').query("product", {path: param.path, tag: param.tag}),
      products: this.infinityModel("product", {
        perPage: 16,
        startingPage: 1,
        path: param.path,
        tag: param.tag,
        modelPath: 'controller.model.products'
      }),
      breadcrumbs: this.get('store').query("catalog", {path: param.path}),
      tags: this.get('store').query("catalog", {tags: param.path})
    });
  },
  activate () {
    this._super();
    window.scrollTo(0,0);
  },
  queryParams: {
    tag: {
      refreshModel: true
    }
  },
  titleToken: function(model) {
    var catalogs = this.controllerFor('brand.catalog');
    if(model.tags.filterBy('id', catalogs.get('tag')).get('lastObject.name')) {
      return [model.tags.filterBy('id', catalogs.get('tag')).get('lastObject.name'), model.breadcrumbs.get('lastObject.name'), model.brand.get('name')];
    } else {
      return [model.breadcrumbs.get('lastObject.name'), model.brand.get('name')];
    }
  }
});
