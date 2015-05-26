'use strict';

console.info('Number.isFinite(), Number.isNaN()');

// Number.isFinite()用来检查一个数值是否非无穷（infinity）

function demo1() {
  console.log(Number.isFinite(15)); // true
  console.log(Number.isFinite(0.8)); // true
  console.log(Number.isFinite(NaN)); // false
  console.log(Number.isFinite(Infinity)); // false
  console.log(Number.isFinite(-Infinity)); // false
  console.log(Number.isFinite("foo")); // false
  console.log(Number.isFinite("15")); // false
  console.log(Number.isFinite(true)); // false
}

// Number.isNaN()用来检查一个值是否为NaN

function demo2() {
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN(15)); // false
  console.log(Number.isNaN("15")); // false
  console.log(Number.isNaN(true)); // false
}

function demo3() {
  console.log(isFinite(25)); // true
  console.log(isFinite("25")); // true
  console.log(Number.isFinite(25)); // true
  console.log(Number.isFinite("25")); // false

  console.log(isNaN(NaN)); // true
  console.log(isNaN("NaN")); // true
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN("NaN")); // false
}

//demo1();
//demo2();
//demo3();
