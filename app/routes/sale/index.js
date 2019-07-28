import Ember from 'ember';
import RSVP from 'rsvp';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model() {
    return RSVP.hash({
      //catalogs: this.get('store').query('catalog', {root: true}),
      sales: this.infinityModel("sale", {
        perPage: 20,
        startingPage: 1,
        modelPath: 'controller.model.sales'
      })
    });
  },
  activate () {
    this._super();
    window.scrollTo(0,0);
  },
  titleToken: 'Акции, Распродажи, Новинки'
});
