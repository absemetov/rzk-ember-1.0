import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Забыли пароль',
  activate () {
    this._super();
    window.scrollTo(0,0);
  }
});
