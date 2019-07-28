import Ember from 'ember';
import config from '../config/environment';


export default Ember.Component.extend({
    shopCurrency: config.shopCurrency,
    classNames: ['col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-3', 'd-flex', 'align-self-stretch', 'mt-3', 'goods-width'],
    actions: {
        openModal(model) {
          //var item = this.get('cart.cartGoodsArray').findBy('id', model.id);
          this.set('openModel', true);
          this.set('modalData', model);
          this.set('modalCount', model.get('qty'));
          //Ember.$('.my-input').select();
        }
    }
});
