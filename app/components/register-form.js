import Ember from 'ember';

export default Ember.Component.extend({  
  session: Ember.inject.service(),
  changeFormData: Ember.observer('user.lastName', 'user.firstName', 'user.phoneNumber', 'user.email', 'user.password', function() {
    if(!this.get('user.lastName') && !this.get('user.firstName') && !this.get('user.phoneNumber') && !this.get('user.email') && !this.get('user.password')) {
      this.set('userHasEnteredData', false);
    } else {
      this.set('userHasEnteredData', true);  
    }
  }),
  lastnameValidation: Ember.computed('user.errors.lastName', function() {

    if(this.get('user.errors.lastName')) {
      return 'error';  
    } else {
      return 'default';
    }
    
  }),
  firstnameValidation: Ember.computed('user.errors.firstName', function() {

    if(this.get('user.errors.firstName')) {
      return 'error';  
    } else {
      return 'default';
    }
    
  }),
  telValidation: Ember.computed('user.errors.phoneNumber', function() {

    if(this.get('user.errors.phoneNumber')) {
      return 'error';  
    } else {
      return 'default';
    }
    
  }),
  emailValidation: Ember.computed('user.errors.email', function() {

    if(this.get('user.errors.email')) {
      return 'error';  
    } else {
      return 'default';
    }
    
  }),
  passwordValidation: Ember.computed('user.errors.password', function() {

    if(this.get('user.errors.password')) {
      return 'error';  
    } else {
      return 'default';
    }
    
  }),

  actions: {
    submit(){
      let user = this.get('user');
      this.attrs.triggerSave(user);
      this.set("buttonState", "loading");
    }
  }
});