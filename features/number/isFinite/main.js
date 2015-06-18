'use strict';

console.info('Number.isFinite(), Number.isNaN()');

// Number.isFinite()用来检查一个数值是否非无穷（infinity）

function demo1() {
  var a = Number.isFinite(15); // true
  var b = Number.isFinite(0.8); // true
  var c = Number.isFinite(NaN); // false
  var d = Number.isFinite(Infinity); // false
  var e = Number.isFinite(-Infinity); // false
  var f = Number.isFinite("foo"); // false
  var g = Number.isFinite("15"); // false
  var h = Number.isFinite(true); // false
  console.log(a, b, c, d, e, f, g, h);
}

// Number.isNaN()用来检查一个值是否为NaN

function demo2() {
  var a = Number.isNaN(NaN); // true
  var b = Number.isNaN(15); // false
  var c = Number.isNaN("15"); // false
  var d = Number.isNaN(true); // false
  console.log(a, b, c, d);
}

function demo3() {
  var a = isFinite(25); // true
  var b = isFinite("25"); // true
  var c = Number.isFinite(25); // true
  var d = Number.isFinite("25"); // false
  console.log(a, b, c, d);

  var e = isNaN(NaN); // true
  var f = isNaN("NaN"); // true
  var g = Number.isNaN(NaN); // true
  var h = Number.isNaN("NaN"); // false
  console.log(e, f, g, h);
}

//demo1();
//demo2();
//demo3();
