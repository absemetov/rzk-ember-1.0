import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    tagline: DS.attr('string'),
    imageUrl: DS.attr('string'),
    description: DS.attr('string'),
    sortId: DS.attr('number'),
    catalogs: DS.hasMany('catalog')
});
