import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['btn-group'],
    didInsertElement() {
            Ember.$("#search-input").val(this.get('myParam'));
            var visible = Boolean(Ember.$("#search-input").val());
              
            if(visible) {
              Ember.$('#searchclear').show();
            } else {
              Ember.$('#searchclear').hide();
            }
            //algolia search
            Ember.$("#searchclear").on('click', () => {
                 search.autocomplete.setVal('');
                 Ember.$("#search-input").focus();
                 Ember.$('#searchclear').hide();
            });
            
            // Ember.$("#searchclear").on('focusout', () => {
            //   alert('test');
            //     Ember.$("#search-input").val('');
            //     Ember.$("#search-input").focus();
            //     Ember.$('#searchclear').hide();
            // });
            
            Ember.$("#search-input").on('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.get('onSubmit')(Ember.$('#search-input').val());
                }
            });
            
            Ember.$("#search-input").bind('keyup mouseup', function() {
              var $this = Ember.$(this);
              var visible = Boolean($this.val());
              
              if(visible) {
                Ember.$('#searchclear').show();
              } else {
                Ember.$('#searchclear').hide();
              }
              
            });
            
            var client = algoliasearch('apikey', 'apikey');
            var index = client.initIndex('products');
            var search = autocomplete('#search-input', { hint: false }, [
                {
                  source: function(q, cb) {
            
                    if (q.charAt(0) !== '.') {
                        index.search(q, { hitsPerPage: 5 }, function(error, content) {
                          if (error) {
                            cb([]);
                            return;
                          }
                          cb(content.hits, content);
                        });
                    }
                    
                  },
                  displayKey: 'name',
                  templates: {
                    suggestion: function(suggestion) {
                      //var sug;
                      
                      if(suggestion._highlightResult.brand) {
                        return suggestion._highlightResult.code.value + ' ' + suggestion._highlightResult.brand.value + ' ' + suggestion._highlightResult.name.value;
                      } else {
                        return suggestion._highlightResult.code.value + ' ' + suggestion._highlightResult.name.value;
                      }
        
                      // if(suggestion._highlightResult.price) {
                      //   return sug + ' <b>' + suggestion._highlightResult.price.value + '</b> руб.';
                      // } else {
                      //   return sug;
                      // }
                      
                    }
                  }
                }
            ]).on('autocomplete:selected', () => {
                this.get('onSubmit')(Ember.$('#search-input').val());
            });
    }
});
