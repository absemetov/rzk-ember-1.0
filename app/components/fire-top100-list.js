import Ember from 'ember';

export default Ember.Component.extend({
    cart: Ember.inject.service(),
    //classNames: ['col-sm-6', 'col-md-4', 'col-md-4', 'col-lg-3', 'col-xl-3', 'd-flex', 'align-self-stretch', 'mt-3', 'product-width']
    classNames: ['card', 'text-center', 'mt-3', 'product-width']
});
