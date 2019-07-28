import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  //cart: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    searchGoods(query) {
      this.set('collapsed', true);
      window.scrollTo(0,0);
      if (query.length > 2) {
        this.transitionToRoute('search', { queryParams: { q: query }});
      }
    },
    toggleMenu() {
      this.toggleProperty('collapsed');
    },
    hideMenu() {
      this.set('collapsed', true);
    },
    msgs() {
      //alert(this.get('cart.cartToJson'));
      this.set('msgsOpen', true);
    },
    closeModal() {
      this.set('msgsOpen', false);
    }
  },
  init() {
    this._super(...arguments);
    let today = new Date();
    this.set('year', today.getFullYear());
    this.set('collapsed', true);
  }
});