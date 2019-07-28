import Ember from 'ember';

export default Ember.Controller.extend({
  //cart: Ember.inject.service(),
  shoppingCart: Ember.inject.service(),
  ajax: Ember.inject.service(),
  actions: {
    copy() {
      window.getSelection().removeAllRanges();
	    var emailLink = document.querySelector('.share_link');  
	    var range = document.createRange();  
	    range.selectNode(emailLink);  
	    window.getSelection().addRange(range);  
	      
	    try {  
	      // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
	      var successful = document.execCommand('copy');  
	      var msg = successful ? 'Ссылка скопирована успешно.' : 'Не удалось скопировать, попробуйте в ручную.';
	      Ember.$('#share_resalt').html(msg); 
	    } catch(err) {  
	      Ember.$('#share_resalt').html('Копирование не поддерживается.'); 
	    }  
	      
	    // Снятие выделения - ВНИМАНИЕ: вы должны использовать
	    // removeRange(range) когда это возможно
	    window.getSelection().removeAllRanges();
	    //window.getSelection().removeRange(range);
    },
    closeModal() {
      this.set('shareCart', false);
    },
    selectModal() {
      this.set('loading', true);
    },
    clear() {
      this.set('model', '');
      this.get('shoppingCart').clear();
      window.scrollTo(0,0);
    },
    share() {
      //alert(this.get('cart.cartToJson'));
      this.set('shareCart', true);
      var formData = {
          share: true,
          //firebase_cart_id: this.get('cart.fireId.content.firstObject.firebase_cart_id'),
          cart_json: this.get('shoppingCart.info.jsonIdQty'),
          total: this.get('shoppingCart.info.total')
      };
      this.get('ajax').request('/fire/product', {
          method: 'POST',
          data: formData,
      }).then( response => {
        
        if (response.firebase_cart_id) {
          //this.get('cart.fireStorage').clear();
          
          //var parsed = JSON.parse(response.fire_session_storage);
          
          // parsed.forEach((item) => {
          //   this.get('cart.fireStorage').addObject({
          //     'id': item.id,
          //     'firebase_product_id': item.firebase_product_id
          //   });
          // });
          
          //Create new cart id
          
          this.set('firebase_cart_id', response.firebase_cart_id);
          
          this.set('loading', false);
        }
      });
    }
  }
});