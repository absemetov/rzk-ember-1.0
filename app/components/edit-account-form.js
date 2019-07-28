import Ember from 'ember';

export default Ember.Component.extend({
    successMessageVisible: false,
    currentUser: Ember.inject.service(),
    loadingSlider: Ember.inject.service(),
    updateCurrentUser: true,
    lastNameValidation: Ember.computed('user.errors.lastName', function() {

      if(this.get('user.errors.lastName')) {
        return 'error';  
      } else {
        return 'default';
      }
    
    }),
    firstNameValidation: Ember.computed('user.errors.firstName', function() {
    
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
    emailUser: Ember.computed.oneWay('user.email'),
    actions: {
      save(user) {
        this.set('successMessageVisible', false);
        this.set("buttonState", "loading");
        this.get('loadingSlider').startLoading();
        
        user.set("email", this.get('emailUser'));

        user.save()
            .then((/*response*/) => {
                this.set("buttonState", "default");
                this.set('successMessageVisible', true);
                this.set('successMessage', 'Данные сохранены.');
                
                if(this.get('auth')){
                  this.get('currentUser').load();  
                } else {
                  this.get('redirectToUsers')();
                }
            })
            .catch((/*adapterError*/) => {
                this.set("buttonState", "default");
                // if(user.changedAttributes().email){
                //   this.set("user.email", user.changedAttributes().email[0]);
                //   alert('Данный email занят или имеет не правильный формат.');
                // }
            });
            
        // user.save().finally(() => {
        //   this.get('loadingSlider').endLoading();
        //   this.set("buttonState", "default");
        //   if(this.get('auth')){
        //     this.get('currentUser').load();  
        //   } else {
        //     this.get('redirectToUsers')();
        //   }
        //   this.set('successMessageVisible', true);
        // });
      }
    }
});
