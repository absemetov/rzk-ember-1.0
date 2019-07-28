import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['r'],
  r: null,
  session: Ember.inject.service('session'),
  buttonState: "default",
  notifyVisible: false,
  changeFormData: Ember.observer('identification', 'password', function() {
    if(!this.get('identification') && !this.get('password')){
      this.set('userHasEnteredData', false);
    } else {
      this.set('userHasEnteredData', true);  
    }
  }),
  actions: {
    authenticate() {
      this.set('notifyVisible', false);
      //this.set("buttonState", "loading");
      this.set('disabledButton', true);
      this.set('userHasEnteredData', false);
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
        .then((/*{ response }*/) => {
          if(this.get('r')) {
            this.transitionToRoute('cart.' + this.get('r'));  
          }
        }).catch((reason) => {
        //this.set("buttonState", "default");
        this.set('disabledButton', false);
        this.set('notifyVisible', true);
        if(!reason) {
          reason = 'api not work';
        }
        this.set('notifyMessage', reason.error || reason);
      });
    
    }
  }
});


