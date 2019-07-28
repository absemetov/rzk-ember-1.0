import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('fire-cart', {
      orderBy: 'timestamp',
      limitToLast: 10
    });
  },
  titleToken: 'Продажи в реальном времени',
  activate () {
    this._super();
    window.scrollTo(0,0);
  }
});
