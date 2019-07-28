import Ember from 'ember';
//import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(param) {
    return this.get('store').findRecord('sale', param.sale_id, { include: 'products' });
    // return RSVP.hash({
    //   //catalogs: this.get('store').query('catalog', {root: true}),
    //   sale: this.get('store').find('sale', param.sale_id)
    // });
  },
  activate() {
    this._super();
    window.scrollTo(0,0);
  },
  titleToken: function(model) {
    return model.get('name');
  }
});
