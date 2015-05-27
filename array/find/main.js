'use strict';

console.info('数组实例的find()和findIndex()');

function demo1() {
  var result = [1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
  }); // 10

  console.log(result);
}

function demo2() {
  var result = [1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
  }); // 2

  console.log(result);
}

// 这两个方法都可以发现NaN，弥补了IndexOf()的不足。
function demo3() {
  console.log([NaN].indexOf(NaN)); // -1

  console.log([NaN].findIndex(y => Object.is(NaN, y))); // 0
}

//demo1();
//demo2();
//demo3();
