import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    orderBy: {
      refreshModel: true
    }
  },
  model(param) {
    return this.get('store').query('fire-product', {
        orderBy: param.orderBy,
        limitToLast: 100
    });
  },
  titleToken: 'ТОП-100 Товаров',
  activate () {
    this._super();
    window.scrollTo(0,0);
  }
});