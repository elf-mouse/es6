'use strict';

console.info('Array.of()');

function es5() {
  var a = Array(); // []
  var b = Array(3); // [undefined, undefined, undefined]
  var c = Array(3, 11, 8); // [3, 11, 8]
  console.log(a, b, c);
}

function es6() {
  var a = Array.of(3, 11, 8); // [3, 11, 8]
  var b = Array.of(3); // [3]
  var c = Array.of(3).length; // 1
  console.log(a, b, c);
}

es5();
es6();
