import Ember from 'ember';

export function formatCurrency([value]) {
   let n = Math.round(value * 100) / 100,
   c = 2, 
   d = ".", 
   t = " ", 
   s = n < 0 ? "-" : "";
   
   if((n ^ 0) === n) {
      c = 0;
   }
    
   let i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c), 10));
   
   var j = (j = i.length) > 3 ? j % 3 : 0;
   
   var uah = s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  
   return `${uah}`;
}

export default Ember.Helper.helper(formatCurrency);

