// ES5
/*var keys = [];
with(Array.prototype) {
  keys.push('foo');
}*/

Object.keys(Array.prototype[Symbol.unscopables]); // -> ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'keys']

// Without unscopables:
class MyClass {
  foo() {
    return 1;
  }
}
var foo = function() {
  return 2;
};
with(MyClass.prototype) {
  foo(); // 1!!
}

// Using unscopables:
class MyClass {
  foo() {
    return 1;
  }
  get[Symbol.unscopables]() {
    return {
      foo: true
    };
  }
}
var foo = function() {
  return 2;
};
with(MyClass.prototype) {
  foo(); // 2!!
}
