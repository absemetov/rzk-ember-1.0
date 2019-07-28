import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    catalogs: DS.hasMany('catalog'),
    breadcrumbs: DS.hasMany('catalog'),
    tags: DS.hasMany('catalog'),
    brands: DS.hasMany('catalog'),
    tagsSelected: DS.hasMany('catalog')
});
