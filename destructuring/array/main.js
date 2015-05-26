'use strict';

console.info('数组的解构赋值');
console.log('只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值');

function demo1() {
  // ES5
  /*var a = 1;
  var b = 2;
  var c = 3;*/

  // ES6
  var [a, b, c] = [1, 2, 3];
  console.log(a, b, c);
}

function demo2() {
  let [foo, [[bar], baz]] = [1, [[2], 3]];
  console.log(foo); // 1
  console.log(bar); // 2
  console.log(baz); // 3

  let [,,third] = ["foo", "bar", "baz"];
  console.log(third); // "baz"

  let [x, , y] = [1, 2, 3];
  console.log(x); // 1
  console.log(y); // 3

  let [head, ...tail] = [1, 2, 3, 4];
  console.log(head); // 1
  console.log(tail); // [2, 3, 4]
}

// 如果解构不成功，变量的值就等于undefined
function demo3() {
  //var [foo] = []; // undefined
  //var [foo] = 1; // TypeError: 1[Symbol.iterator] is not a function
  //var [foo] = 'Hello'; // H
  //var [foo] = false; // TypeError: false[Symbol.iterator] is not a function
  //var [foo] = NaN; // TypeError: NaN[Symbol.iterator] is not a function
  var [bar, foo] = [1]; // undefined
  console.log(foo);
}

// 不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组
function demo4() {
  let [x, y] = [1, 2, 3];
  console.log(x); // 1
  console.log(y); // 2

  let [a, [b], d] = [1, [2, 3], 4];
  console.log(a); // 1
  console.log(b); // 2
  console.log(d); // 4
}

// 如果对undefined或null进行解构，会报错
function demo5() {
  //var [foo] = undefined; // TypeError: undefined has no properties
  var [foo] = null; // TypeError: null has no properties
}

// 解构赋值允许指定默认值
function demo6() {
  var [foo = true] = [];
  console.log(foo); // true

  //var [x, y='b'] = ['a'] // x='a', y='b'
  var [x, y='b'] = ['a', undefined] // x='a', y='b'
  console.log(x, y);
}

function demo7() {
  var [v1, v2, v3 ] = [1, 2, 3];
  let [v4, v5, v6 ] = [4, 5, 6];
  const [v7, v8, v9 ] = [7, 8, 9];
  console.info('var');
  console.log(v1, v2, v3);
  console.info('let');
  console.log(v4, v5, v6);
  console.info('const');
  console.log(v7, v8, v9);
}

function demo8() {
  var [a, b, c] = new Set(["a", "b", "c"]);
  console.log(a); // "a"
}

//demo1();
//demo2();
//demo3();
//demo4();
//demo5();
//demo6();
//demo7();
//demo8();
