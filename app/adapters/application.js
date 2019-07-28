import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';


export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    namespace: 'api',
    //host: 'https://rzk-laravel-absemetov.c9users.io',
    host: config.apiHost,
    authorizer: 'authorizer:application'
});
