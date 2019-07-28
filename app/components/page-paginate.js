import Ember from 'ember';

export default Ember.Component.extend({
    hasPages: Ember.computed('pagination', function() {
       if(this.get('pagination.last-page') === 1) {
           return false;
       }
       return true;
    }),
    onFirstPage: Ember.computed('pagination', function() {
       if(this.get('pagination.current-page') === 1) {
           return true;
       }
       return false;
    }),
    previousPageUrl: Ember.computed('pagination', function() {
       return this.get('pagination.current-page') - 1;
    }),
    nextPageUrl: Ember.computed('pagination', function() {
       return this.get('pagination.current-page') + 1;
    }),
    elements: Ember.computed('pagination', function() {
        
        var elements = [];
        
        let count_page = this.get('pagination.last-page');
        
        let current_page = this.get('pagination.current-page');
        
        let range = 7;
        
        let last_range = count_page - 5;
        
        let center_range_left = current_page - 4;
        
        let center_range_right = current_page + 3;
        
        var i = 1;
        
        while (i <= count_page) {
          
          if(count_page > 10) {
            
            elements.push(i);
            
            if(i === range && current_page < range) {
                elements.push('...');
                i = count_page - 2;
            }
            
            if(i === 2 && current_page >= range && current_page < last_range) {
                elements.push('...');
                i = center_range_left;
            }
            
            if(i === center_range_right && current_page >= range && current_page < last_range) {
                elements.push('...');
                i = count_page - 2;
            }
            
            if(i === 2 && current_page >= last_range) {
                elements.push('...');
                i = count_page - range;
            }
             
          } else {
            elements.push(i);
          }
          
          i++;
        }
        
        return elements;
        
    })
});
