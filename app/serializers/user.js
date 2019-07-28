import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  // attrs: {
  //   //orders: { embedded: 'always' },
  //   order: { embedded: 'always' }
  // }
});