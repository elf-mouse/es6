'use strict';

console.info('数组实例的includes()');
console.warn('Array.protypeto.includes方法返回一个布尔值，表示某个数组是否包含给定的值。该方法属于ES7。');

function demo1() {
  var a = [1, 2, 3].includes(2); // true
  var b = [1, 2, 3].includes(4); // false
  var c = [1, 2, NaN].includes(NaN); // true

  console.log(a, b, c);
}

// 该方法的第二个参数表示搜索的起始位置，默认为0。
function demo2() {
  var a = [1, 2, 3].includes(3, 3); // false
  var b = [1, 2, 3].includes(3, -1); // true

  console.log(a, b);
}

// 下面代码用来检查当前环境是否支持该方法，如果不支持，部署一个简易的替代版本。
function demo3() {
  const contains = (() =>
    Array.prototype.includes
      ? (arr, value) => arr.includes(value)
      : (arr, value) => arr.some(el => el === value)
  )();
  console.log(contains(["foo", "bar"], "baz")); // => false
}

//demo1(); // TODO: fail
//demo2(); // TODO: fail
//demo3();
