import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fire-goods-list', 'Integration | Component | fire goods list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fire-goods-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fire-goods-list}}
      template block text
    {{/fire-goods-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
