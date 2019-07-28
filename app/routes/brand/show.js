import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.get('store').findRecord("brand", param.brand_id);
  },
  activate () {
    this._super();
    window.scrollTo(0,0);
  },
  titleToken: function(model) {
    return model.get('name');
  }
});
