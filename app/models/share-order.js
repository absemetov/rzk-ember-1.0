import DS from 'ember-data';

export default DS.Model.extend({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  address: DS.attr('string'),
  comment: DS.attr('string', {defaultValue: ''}),
  statusId: DS.attr('number'),
  total: DS.attr('number'),
  carrierId: DS.attr('number'),
  carrierNumber: DS.attr('number'),
  cargoNumber: DS.attr('string'),
  paymentId: DS.attr('number'),
  email: DS.attr('string'),
  createdAt: DS.attr('number'),
  lineItems: DS.hasMany('product')
});
