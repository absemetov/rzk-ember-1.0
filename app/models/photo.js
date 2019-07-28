import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  img: DS.attr('string'),
  img64: Ember.computed('img', function() {
      return `https://s3.eu-central-1.amazonaws.com/rzk.com.ua/64.${this.get('img')}`;
  }),
  img800: Ember.computed('img', function() {
    return `https://s3.eu-central-1.amazonaws.com/rzk.com.ua/800.${this.get('img')}`;
  })
});
