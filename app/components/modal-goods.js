import Ember from 'ember';

export default Ember.Component.extend({
  //cart: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  total: Ember.computed('modalCount', function() {
     return this.get('modalCount') * this.get('modalData.price');
  }),
  didInsertElement: function () {
		//var self = this;
		this.$('input').keydown(function (event) {
			if (event.which === 9) {
				// [TAB]
				event.preventDefault();
				Ember.$('#form_submit').click();
				//self.send('buyItem');
			}
		});
	},
  actions: {
    closeModal() {
      this.set('openModel', false);
    },
    add() {
      Ember.$('#form_submit').click();
    },
    remove() {
      this.set('modalCount', 0);
      this.send('buyItem');
      //Ember.$('#form_submit').click();
    },
    selectModal() {
      Ember.$('.my-input').val(this.get('modalCount'));
      Ember.$('.my-input').select();
    },
    buyItem() {
      //this.get('cart').add(this.get('modalData'), this.get('modalCount'));
      //this.get('shoppingCart').add(this.get('modalData'), this.get('modalCount'));
      this.get('shoppingCart').add({
        id: this.get('modalData.id'),
        qty: parseInt(this.get('modalCount'), 10),
        total: this.get('total')
      });
      this.get('shoppingCart').fire(this.get('shoppingCart.info.jsonIdQty'));
      this.set('openModel', false);
    }
 }
});
