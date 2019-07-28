import DS from 'ember-data';

export default DS.Model.extend({
    ancestors: DS.hasMany('catalog'),
    childrens: DS.hasMany('catalog'),
    tags: DS.hasMany('catalog'),
    brands: DS.hasMany('catalog'),
    tagsSelected: DS.hasMany('catalog'),
    brandsSelected: DS.hasMany('catalog')
});
