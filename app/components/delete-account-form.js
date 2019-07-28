import Ember from 'ember';

export default Ember.Component.extend({
    buttonState: "default",
    notifyVisible: false,
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    loadingSlider: Ember.inject.service(),
    emailChanged: Ember.observer('user.emailDelete', function() {
        this.set('emailValidation', 'default');
        this.set('notifyVisible', false);
    }),
    actions: {
        delete(user) {

            this.set('notifyVisible', false);
            this.set('emailValidation', 'default');
            
            var email;

            if(this.get('auth')){
              email = this.get('currentUser.user.email');
            } else {
              email = this.get('user.email');
            }

            if( email === this.get('user.emailDelete') ) {
              
              this.set("buttonState", "loading");
              this.get('loadingSlider').startLoading();

              user.destroyRecord()
                .then((/*response*/) => {
                    this.set('notifyVisible', true);
                    this.set('notifyMessage', 'Пользователь удален.');
                    this.set("buttonState", "default");
                    this.get('loadingSlider').endLoading();
                    if(this.get('auth')){
                        this.get('session').invalidate();
                    } else {
                        this.get('redirectToUsers')();
                    }
                })
                .catch((adapterError) => {
                    this.set('notifyVisible', true);
                    this.set('notifyMessage', adapterError);
                    this.set("buttonState", "default");
                });

            } else {
                this.set('notifyVisible', true);
                this.set('notifyMessage', 'Email введен не верно.');
                this.set('emailValidation', 'error');
            }

        }
    }
});
