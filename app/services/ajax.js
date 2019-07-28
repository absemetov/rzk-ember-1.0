//import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';

export default AjaxService.extend({
  namespace: 'api',
  //host: 'https://rzk-laravel-absemetov.c9users.io',
  host: config.apiHost,
  //session: Ember.inject.service(),
  // headers: Ember.observer('session.data.authenticated.token', function() {
  //     let headers = {};
  //     this.get('session').authorize('authorizer:application', (headerName, headerValue) => {
  //       headers[headerName] = headerValue;
  //       console.log(headerValue);
  //       console.log(headerValue);
        
  //     });
      
      
      
  //     return headers;
  // }),
  isSuccess(status, headers, payload ) {
    let isSuccess = this._super(...arguments);
    if (isSuccess && payload.status) {
      // when status === 200 and payload has status property,
      // check that payload.status is also considered a success request
      return this._super(payload.status);
    }
    return isSuccess;
  },
});