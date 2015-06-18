'use strict';

console.info('扩展运算符');

// 扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。该运算符主要用于函数调用。

function demo1() {
  function push(array, ...items) {
    array.push(...items);
  }

  function add(x, y) {
    return x + y;
  }

  var numbers = [4, 38];
  console.log(add(...numbers)); // 42
}

function demo2() {
  const date = new Date(...[2015, 1, 1]);
  console.log(date);
}

function demo3() {
  // ES5的写法
  function es5(x, y, z) {
    console.log(x, y, z);
  }
  var args = [0, 1, 2];
  es5.apply(null, args);

  // ES6的写法
  function es6(x, y, z) {
    console.log(x, y, z);
  }
  var args = [0, 1, 2];
  es6(...args);
}

function demo4() {
  function f(v, w, x, y, z) {
    console.log(v, w, x, y, z);
  }
  var args = [0, 1];
  f(-1, ...args, 2, ...[3]);
}

function demo5() {
  // ES5的写法
  var a = Math.max.apply(null, [14, 3, 77]);

  // ES6的写法
  var b = Math.max(...[14, 3, 77]);

  // 等同于
  var c = Math.max(14, 3, 77);

  console.log(a, b, c);
}

function demo6() {
  // ES5的写法
  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];
  Array.prototype.push.apply(arr1, arr2);

  // ES6的写法
  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];
  arr1.push(...arr2);
}

function demo7() {
  var a = [1];
  var b = [2, 3, 4];
  var c = [6, 7];
  var d = [0, ...a, ...b, 5, ...c];

  console.log(d); // [0, 1, 2, 3, 4, 5, 6, 7]
}

function demo8_1() {
  const [first, ...rest] = [1, 2, 3, 4, 5];
  console.log(first); // 1
  console.log(rest); // [2, 3, 4, 5]
}

function demo8_2() {
  const [first, ...rest] = [];
  console.log(first); // undefined
  console.log(rest); // []
}

function demo8_3() {
  const [first, ...rest] = ["foo"];
  console.log(first); // "foo"
  console.log(rest); // []
}

function demo8_4() {
  const [first, ...rest] = ["foo", "bar"];
  console.log(first); // "foo"
  console.log(rest); // ["bar"]
}

function demo8_5() {
  const [first, ...rest] = ["foo", "bar", "baz"];
  console.log(first); // "foo"
  console.log(rest); // ["bar","baz"]
}

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
function demo9() {
  //const [...butLast, last] = [1, 2, 3, 4, 5]; // 报错

  //const [first, ..., last] = [1, 2, 3, 4, 5]; // 报错
}

function demo10() {
  //console.log([...5]); // [0, 1, 2, 3, 4, 5]

  console.log([...
    "hello"
  ]); // [ "h", "e", "l", "l", "o" ]
}

function demo11() {
  var nodeList = document.querySelectorAll('div');
  var array = [...nodeList];
}

function demo12() {
  let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);

  let arr = [...map.keys()]; // [1, 2, 3]
  console.log(arr);
}

function demo13() {
  var go = function*() {
    yield 1;
    yield 2;
    yield 3;
  };

  console.log([...go()]); // [1, 2, 3]
}

//demo1();
//demo2();
//demo3();
//demo4();
//demo5();

//demo7();
//demo8_1();
//demo8_2();
//demo8_3();
//demo8_4();
//demo8_5();

//demo10();

//demo12();
//demo13();
