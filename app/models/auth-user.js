import DS from 'ember-data';

export default DS.Model.extend({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  address: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  admin: DS.attr('boolean')
});