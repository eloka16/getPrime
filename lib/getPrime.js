'use strict'

module.exports = {
  getPrime: function(num) {
    if(num < 2) {
      return undefined;
    } else if(typeof num == 'string') {
      return undefined; 
    } else if(num % 1 !== 0){
      return undefined;
    }else if (Array.isArray(num)){
      return undefined;
    } else {
      var list = [];
      for(var j = 2; j <= num; j++) {
        if(this.isPrime(j)) {
          list.push(j);
        }
      }
      return list;
    }
  },

  isPrime: function(n) {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++) {
      if (n % i === 0) {
          return false;
      }
    }
    return true;
  }
}
