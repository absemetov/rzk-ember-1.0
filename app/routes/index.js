import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      catalogs: this.get('store').query('catalog', {root: true}),
      sales: this.get('store').query('sale', {main_page: true})
    });
  },
  // setupController(controller, model) {
  //   // Call _super for default behavior
  //   this._super(controller, model);
  //   // Implement your custom setup after
  //   var catalogsShow = this.controllerFor('catalogs.show');
    
  //   if(catalogsShow) {
  //     catalogsShow.set("tag", '');
  //     catalogsShow.set("brand", '');
  //     catalogsShow.set("sort", 'default');
  //     catalogsShow.set("model", null);
  //   }
  //   //collapse menu
  //   //var application = this.controllerFor('application');
  //   //application.set('collapsed', true);
  // },
  activate () {
    this._super();
    window.scrollTo(0,0);
  }
  // beforeModel() {
  //   this.transitionTo('catalogs');
  // }
});



