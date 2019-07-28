import Ember from 'ember';

export default Ember.Controller.extend({
    ajax: Ember.inject.service(),
    session: Ember.inject.service(),
    buttonState: "default",
    notifyVisible: false,
    actions: {
        reset () {
            
            this.set("buttonState", "loading");
            this.set('errors', false);
            this.set('notifyVisible', false);

            this.get('ajax').raw('/password/reset', {
                method: 'POST',
                data: {
                    email: this.get('email'),
                    password: this.get('password'),
                    password_confirmation: this.get('password_confirmation'),
                    token: this.get('model.token'),
                }
            })
            .then((/*{ response }*/) => {
                this.set('notifyVisible', true);
                this.set('notifyMessage', 'Пароль изменен успешно.');
                
                if(!this.get('session.isAuthenticated')) {
                    
                    let credentials = {
                        'identification' : this.get('email'),
                        'password' : this.get('password')
                    };
                    
                    this.get('session').authenticate('authenticator:jwt',  credentials)
                    .catch((reason) => {
                      this.set('notifyVisible', true);
                      if(!reason) {
                        reason = 'api not work';
                      }
                      this.set('notifyMessage', reason.error || reason);
                    });
                } else {
                    this.set("buttonState", "default");
                    this.transitionToRoute('/');
                }
                
            })
            .catch(({ response, jqXHR }) => {
                this.set("buttonState", "default");

                if(jqXHR.status === 400) {
                  this.set('notifyVisible', true);
                  this.set('notifyMessage', response);
                } else {
                  this.set('errors', Ember.$.parseJSON(jqXHR.responseText));  
                }
                
            });
            
        }
    }
});
