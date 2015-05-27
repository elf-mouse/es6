'use strict';

console.info('Number.isInteger()和安全整数');

// Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

function demo1() {
  var a = Number.isInteger(25); // true
  var b = Number.isInteger(25.0); // true
  var c = Number.isInteger(25.1); // false
  var d = Number.isInteger("15"); // false
  var e = Number.isInteger(true); // false
  console.log(a, b, c, d, e);
}

function demo2() {
  var inside = Number.MAX_SAFE_INTEGER;
  var outside = inside + 1;

  console.log(Number.isInteger(inside)); // true
  console.log(Number.isSafeInteger(inside)); // true

  console.log(Number.isInteger(outside)); // true
  console.log(Number.isSafeInteger(outside)); // false
}

//demo1();
//demo2();
