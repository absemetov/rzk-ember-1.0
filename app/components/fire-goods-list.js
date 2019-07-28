import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tbody',
    sortedReviews: Ember.computed.sort('goods', 'sortDefinition'),
    sortDefinition: ['timestamp'],
    cart: Ember.inject.service(),
});
