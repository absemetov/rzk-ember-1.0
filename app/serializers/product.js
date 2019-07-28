import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize() {
    var json = this._super(...arguments);

    delete json.data.attributes.price;
    delete json.data.attributes.name;
    delete json.data.attributes.unit;
    delete json.data.attributes['image-url'];
    delete json.data.attributes['brand-name'];
    delete json.data.attributes.warehouse;
    delete json.data.attributes.instock;
    delete json.data.attributes.description;
    
    
    return json;
  }
});
