import Ember from 'ember';

const orderCarrierArray = [
  'Самовывоз',
  'Нова Пошта',
  'Интайм'
];

export function orderCarrier(id/*, hash*/) {
  return orderCarrierArray.find((item, index) => {
      return ++index === parseInt(id, 10);
  });
}

export default Ember.Helper.helper(orderCarrier);
