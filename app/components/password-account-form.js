import Ember from 'ember';

export default Ember.Component.extend({
    ajax: Ember.inject.service(),
    successMessageVisible: false,
    buttonState: "default",
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),
    passwordChanged: Ember.observer('password', 'password_confirmation', function() {
        if(this.get('errors.password')) {
            this.set('errors.password', false);
            this.get('errors.messages').forEach((item) => {
              if(item.type === 'password') {
                  this.get('errors.messages').removeObject(item);
              }
            });
        }
    }),
    currentPasswordChanged: Ember.observer('password_current', function() {
        if(this.get('errors.current')) {
            this.set('errors.current', false);
            this.get('errors.messages').forEach((item) => {
              if(item.type === 'current') {
                  this.get('errors.messages').removeObject(item);
              }
            });
        }
    }),
    passwordValidation: Ember.computed('errors.password', function() {

        if(this.get('errors.password')) {
          return 'error';  
        } else {
          return 'default';
        }
        
    }),
    currentPasswordValidation: Ember.computed('errors.current', function() {
    
        if(this.get('errors.current')) {
          return 'error';  
        } else {
          return 'default';
        }
        
    }),
    actions: {
        save() {
            
            this.set("buttonState", "loading");
            
            this.set('errors', false);
            
            this.set('successMessageVisible', false);
            
            this.get('ajax').raw('/password/change', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.get('session.data.authenticated.token')}`
                },
                data: {
                    password: this.get('password'),
                    password_confirmation: this.get('password_confirmation'),
                    password_current: this.get('password_current'),
                }
            })
            .then(({ response }) => {
                this.set('password', '');
                this.set('password_confirmation', '');
                this.set('password_current', '');
                this.set("buttonState", "default");
                this.set('successMessageVisible', true);
                this.set("message", response);
            })
            .catch(({ response, jqXHR }) => {
                this.set("buttonState", "default");
                
                if(jqXHR.status===401) {
                    this.get('session').invalidate();
                }
                this.set('errors', Ember.$.parseJSON(jqXHR.responseText));
                
            });
            
        },
        resetPassword () {
            this.set('successMessageVisible', false);
            this.set("buttonResetState", "loading");

            this.get('ajax').raw('/password/email', {
                method: 'POST',
                data: {
                   email: this.get('currentUser.user.email')
                }
            })
              .then((/*{ response }*/) => {
                this.set('successMessageVisible', true);
                this.set("buttonResetState", "default");
                this.set("message", 'На ваш email отправлена ссылка для восстановления пароля');
              })
              .catch(({ response, jqXHR }) => {
                
                this.set("buttonResetState", "default");
                
                if(jqXHR.status===401) {
                    this.get('session').invalidate();
                }
                    
                this.set('successMessageVisible', true);
                this.set("message", jqXHR.responseText);
                
              });
              
              //return new Ember.RSVP.Promise();
            
        }
    }
});
