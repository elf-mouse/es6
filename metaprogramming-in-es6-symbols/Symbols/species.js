// ES5
Array.prototype.map = function(callback) {
  var returnValue = new Array(this.length);
  this.forEach(function(item, index, array) {
    returnValue[index] = callback(item, index, array);
  });
  return returnValue;
};

// ES6
Array.prototype.map = function(callback) {
  var Species = this.constructor[Symbol.species];
  var returnValue = new Species(this.length);
  this.forEach(function(item, index, array) {
    returnValue[index] = callback(item, index, array);
  });
  return returnValue;
};

class Foo extends Array {
  static get[Symbol.species]() {
    return this;
  }
}

class Bar extends Array {
  static get[Symbol.species]() {
    return Array;
  }
}

assert(new Foo().map(function() {}) instanceof Foo);
assert(new Bar().map(function() {}) instanceof Bar);
assert(new Bar().map(function() {}) instanceof Array);

class TimeoutPromise extends Promise {
  static get[Symbol.species]() {
    return Promise;
  }
}
