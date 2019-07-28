import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['r'],
  r: null,
  session: Ember.inject.service(),
  buttonState: "default",
  notifyVisible: false,
  actions: {
    save(user){
      this.set("buttonState", "loading");
      this.set('notifyVisible', false);
      
      let newUser = user;
      
      newUser.save()
        .then(()=>{
        
        this.set('userHasEnteredData', false);
        
        var credentials = {
          'identification' : newUser.get('email'),
          'password' : newUser.get('password')
        };
        
        this.get('session').authenticate('authenticator:jwt',  credentials)
          .then((/*{ response }*/) => {
            if(this.get('r')) {
              this.transitionToRoute('cart.' + this.get('r'));  
            }
          })
          .catch((reason) => {
            this.set('notifyVisible', true);
            this.set('notifyMessage', reason.error || reason);
          });

        }).catch((adapterError) => {
          
          if(user.get('errors.messages') !== '') {
            this.set('notifyVisible', false);
          } else {
            this.set('notifyVisible', true);
          }
          
          this.set('notifyMessage', adapterError);
          this.set("buttonState", "default");
        });

    }
  } 
});