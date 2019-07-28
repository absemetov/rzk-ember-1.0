import Ember from 'ember';

const statusOrder = [
  'Новый',
  'Проверка',
  'Клиент думает',
	'Ожидаем товар',
	'Ожидаем оплату',
	'Отгрузка',
	'Отправлен',
	'Доставлен',
	'Не забран',
	'Отменен'
];


export function orderStatus(id/*, hash*/) {
  return statusOrder.find((item, index) => {
      return ++index === parseInt(id, 10);
  });
}

export default Ember.Helper.helper(orderStatus);
