'use strict';

console.info('rest参数');

// ES6引入rest参数（...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

function demo1() {
  function add(...values) {
    let sum = 0;

    for (var val of values) {
      sum += val;
    }

    return sum;
  }

  console.log(add(2, 5, 3)); // 10
}

function demo2() {
  // arguments变量的写法
  const sortNumbers1 = () =>
    Array.prototype.slice.call(arguments).sort();

  // rest参数的写法
  const sortNumbers2 = (...numbers) => numbers.sort();
}

function demo3() {
  function push(array, ...items) {
    items.forEach(function(item) {
      array.push(item);
      console.log(item);
    });
  }

  var a = [];
  push(a, 1, 2, 3);
}

// 注意，rest参数之后不能再有其他参数，否则会报错。
function demo4() {
  // 报错
  /*function f(a, ...b, c) {
    // ...
  }*/
}

function demo5() {
  var a = (function(a) {}).length;  // 1
  var b = (function(...a) {}).length;  // 0
  var c = (function(a, ...b) {}).length;  // 1

  console.log(a, b, c);
}

//demo1();

//demo3();

//demo5();
