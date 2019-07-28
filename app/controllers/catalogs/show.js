import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['tag', 'brand', 'sort'],
  tag: '',
  brand: '',
  sort: 'default',
  collapsedCharacteristics: false,
  collapsedBrands: false,
  selectedGoods: null,
  breadcrumbs: null,
  openModel: false,
  currentlyLoading: true,
  title: Ember.computed.mapBy('model.panel.ancestors', 'name'),
  selectedTags: Ember.computed.mapBy('model.panel.tagsSelected', 'name'),
  selectedBrands: Ember.computed.mapBy('model.panel.brandsSelected', 'name'),
  activeSort: Ember.computed('sort', function() {
    
    var sort = this.get('sort');

    if (sort) {
      return sort;
    } else {
      return '';
    }
    
  }),
  activeTags: Ember.computed('tag', function() {
    
    var tag = this.get('tag');

    if (tag) {
      return tag;
    } else {
      return '';
    }
    
  }),
  activeBrands: Ember.computed('brand', function() {
    
    var tag = this.get('brand');

    if (tag) {
      return tag;
    } else {
      return '';
    }
    
  }),
  actions: {
    toggleCharacteristics() {
      this.toggleProperty('collapsedCharacteristics');
    },
    toggleBrands() {
      this.toggleProperty('collapsedBrands');
    },
    toggleSort(value) {
      this.set('sort', value);
    },
    selectTag(value, isSelected) {

      var newSelection = this.get('model.panel.tagsSelected');
      
      if(isSelected) {
        newSelection.removeObject(value);
      } else {
        newSelection.addObject(value);
      }
      
      var selectedT = newSelection.map(function(elem) {
        return elem.id;
      }).join();
      
      this.set('tag', selectedT);
      
      var previousTransition = this.get('previousTransition');
      
      if (previousTransition) {
        this.transitionToRoute('catalogs.show', previousTransition);
        this.set('previousTransition', null);
        //previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionToRoute('index');
      }

    },
    selectBrand(value, isSelected) {

      var newSelection = this.get('model.panel.brandsSelected');
      
      if(isSelected) {
        newSelection.removeObject(value);
      } else {
        newSelection.addObject(value);
      }
      
      var selectedT = newSelection.map(function(elem) {
        return elem.id;
      }).join();
      
      this.set('brand', selectedT);
      
      var previousTransition = this.get('previousTransition');
      
      if (previousTransition) {
        this.transitionToRoute('catalogs.show', previousTransition);
        this.set('previousTransition', null);
        //previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionToRoute('index');
      }

    }
  }
});
