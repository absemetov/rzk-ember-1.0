import Ember from 'ember';

export default Ember.Route.extend({
    model: function({ token }) {
      return {
        token: token
      };
    },
    titleToken: 'Восстановить пароль',
    activate () {
      this._super();
      window.scrollTo(0,0);
    }
});
