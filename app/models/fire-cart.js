import DS from 'ember-data';

export default DS.Model.extend({
    timestamp: DS.attr('number'),
	ordered: DS.attr('boolean', {defaultValue: false}),
	shared: DS.attr('boolean', {defaultValue: false}),
	total: DS.attr('number'),
    items: DS.hasMany('fireCartItem', {async: false, inverse: null}), // embedded
});