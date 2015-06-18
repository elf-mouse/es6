'use strict';

console.info('Number.parseInt(), Number.parseFloat()');

// ES5的写法
function es5() {
  console.log(parseInt("12.34")); // 12
  console.log(parseFloat('123.45#')); // 123.45
}

// ES6的写法
function es6() {
  console.log(Number.parseInt("12.34")); // 12
  console.log(Number.parseFloat('123.45#')); // 123.45
}

es5();
es6();
