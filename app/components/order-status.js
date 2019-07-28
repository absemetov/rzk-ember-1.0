import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    classNames: ['badge'],
    classNameBindings: ['classStatus'],
    classStatus: Ember.computed('statusId', function() {
        
        switch (this.get('statusId')) {
          case 1:
            return 'badge-primary';
          case 2:
            return 'badge-success';
          case 3:
            return 'badge-default';
          case 4:
            return 'badge-info';
          case 5:
            return 'badge-warning';
          case 6:
            return 'badge-danger';
          case 7:
            return 'badge-success';
          case 8:
            return 'badge-info';
          case 9:
            return 'badge-danger';
          case 10:
            return 'badge-danger';
        }

    }),
    status: Ember.computed('statusId', function() {
        
        switch (this.get('statusId')) {
          case 1:
            return 'Новый';
          case 2:
            return 'Проверка';
          case 3:
            return 'Клиент думает';
          case 4:
            return 'badge-info';
          case 5:
            return 'Ожидаем оплату';
          case 6:
            return 'Отгрузка';
          case 7:
            return 'Отправлен';
          case 8:
            return 'Доставлен';
          case 9:
            return 'Не забран';
          case 10:
            return 'Отменен';
        }

    })
});
