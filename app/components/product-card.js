import Ember from 'ember';

export default Ember.Component.extend({
    //cart: Ember.inject.service(),
    //classNames: ['col-sm-6', 'd-flex', 'align-self-stretch', 'product-width'],
    classNames: ['card', 'text-center', 'product-width'],
    classNameBindings: ['compact:mt-3'],
    //classNameBindings: ['compact:d-flex', 'compact:align-self-stretch', 'compact:mt-3:mb-3', 'compact:col-md-4:col-md-6', 'compact:col-lg-3:col-lg-6', 'compact:col-xl-3:col-xl-6'],
    actions: {
        openModal(model) {
          //var item = this.get('cart.cartGoodsArray').findBy('id', model.id);
          this.set('openModel', true);
          this.set('modalData', model);
          if(model.get('qty')) {
            this.set('modalCount', model.get('qty'));
          } else {
            this.set('modalCount', '');
          }
          //Ember.$('.my-input').select();
        },
        magnific(first, gallery, title, last) {
            if (gallery.get('length') > 0) {
              var nietos = [];
              var obj = {};
              obj["src"] = first;
              nietos.push(obj);
              
              gallery.forEach(function(item) {
                if(first !== item.get('img800')) {
                  var obj = {};
                  obj["src"] = item.get('img800');
                  nietos.push(obj); 
                }
              });
              
              if(last) {
                var objlast = {};
                objlast["src"] = last;
                nietos.push(objlast);
              }
              
              return Ember.$.magnificPopup.open({
                //alignTop: true,
                items: nietos,
                type: 'image',
                image: {
                  titleSrc: function() {
                    return title;
                  }
                },
                gallery: {
                  // options for gallery
                  enabled: true
                }
              });
              
              
            } else {
              
              return Ember.$.magnificPopup.open({
                //alignTop: true,
                items: {
                  src: first
                },
                type: 'image',
                image: {
                  titleSrc: function() {
                    return title;
                  }
                }
              });
              
            }
        }
    }
});
