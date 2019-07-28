import Ember from 'ember';

export function goodsCount(params/*, hash*/) {
  return Math.round(params[0] * 100) / 100;
}

export default Ember.Helper.helper(goodsCount);
