function reverse(a) {
    return function() { 
      var t = Array.from(arguments).reverse();
      return a.apply(null, t);
    }
}