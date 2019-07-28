import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      //catalogs: this.get('store').query('catalog', {root: true}),
      brands: this.get('store').findAll("brand")
    });
  },
  activate () {
    this._super();
    window.scrollTo(0,0);
  },
  titleToken: 'Бренды'
});
