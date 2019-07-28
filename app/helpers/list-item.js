import Ember from 'ember';

export function listItem(params/*, hash*/) {
  return ++params;
}

export default Ember.Helper.helper(listItem);