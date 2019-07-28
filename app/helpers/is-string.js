import Ember from 'ember';

export function isString(params/*, hash*/) {
  return typeof params[0] === 'string';
}

export default Ember.Helper.helper(isString);
