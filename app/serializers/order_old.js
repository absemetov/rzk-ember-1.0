// import DS from 'ember-data';
// import extractMetaResponseMixin from 'ember-json-serializer-meta';

// export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, extractMetaResponseMixin, {
//   attrs: {
//     lineItems: { embedded: 'always' }
//   }
// });
import JSONAPISerializer from 'ember-data/serializers/json-api';
import SaveRelationshipsMixin from 'ember-data-save-relationships';

export default JSONAPISerializer.extend(SaveRelationshipsMixin, {

  attrs: {
    lineItems: { serialize: true }
  }

});