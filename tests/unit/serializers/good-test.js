import { moduleForModel, test } from 'ember-qunit';

moduleForModel('good', 'Unit | Serializer | good', {
  // Specify the other units that are required for this test.
  needs: ['serializer:good']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
