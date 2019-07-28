import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  buttonState: "default",
  notifyVisible: false,
  actions: {
    forgotPassword() {
      
      this.set('notifyVisible', false);
      this.set('errors', false);
      this.set("buttonState", "loading");

      this.get('ajax').raw('/password/email', {
        method: 'POST',
        data: {
           email: this.get('email')
        }
      })
      .then((/*{ response }*/) => {
        this.set('notifyVisible', true);
        this.set('notifyMessage', 'На ваш email отправлена ссылка для восстановления пароля');
        this.set('email', '');
        this.set("buttonState", "default");
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