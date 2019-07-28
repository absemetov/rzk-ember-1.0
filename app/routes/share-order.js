import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //return this.get('store').queryRecord('order', params);
    return this.get('store').queryRecord('order', params);
  },
  activate() {
    this._super();
    window.scrollTo(0,0);
  },
  actions: {
    error(error) {
      if (error) {
        alert(error);
        return this.transitionTo('catalogs');
      }
    }
  },
  titleToken (model) {
    return 'Заказ #' + model.get('id') + ' (' + model.get('lastName') + ' ' + model.get('firstName') + ')';
  }
});
