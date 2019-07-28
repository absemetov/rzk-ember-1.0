import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const { service } = Ember.inject;

export default Base.extend({

  session: service('session'),

  init: function () {
    //console.log('Intialize authorizer');
  },

  authorize(data, block) {
    const accessToken = data['token'];
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      block('Authorization', `Bearer ${accessToken}`);
      //console.log("authorizer called with token: " + accessToken);
    }
  }
});