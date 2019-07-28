import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fire-top100-list', 'Integration | Component | fire top100 list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fire-top100-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fire-top100-list}}
      template block text
    {{/fire-top100-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
