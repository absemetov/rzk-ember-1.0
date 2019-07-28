import Ember from 'ember';

const orderPaymentArray = [
  'Наложенный платеж',
  'Банковский перевод'
];

export function orderPayment(id/*, hash*/) {
  return orderPaymentArray.find((item, index) => {
      return ++index === parseInt(id, 10);
  });
}

export default Ember.Helper.helper(orderPayment);
