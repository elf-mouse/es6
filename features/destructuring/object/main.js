'use strict';

console.info('对象的解构赋值');

function demo1() {
  var { foo, bar } = { foo: "aaa", bar: "bbb" };
  console.log(foo); // "aaa"
  console.log(bar); // "bbb"
  var { baz } = { foo: "aaa", bar: "bbb" };
  console.log(baz); // undefined
}

function demo2() {
  var { foo: baz } = { foo: "aaa", bar: "bbb" };
  console.log(baz); // "aaa"

  let obj = { first: 'hello', last: 'world' };
  let { first: f, last: l } = obj;
  console.log(f); // 'hello'
  console.log(l); // 'world'
}

function demo3() {
  var obj = {
    p: [
      "Hello",
      { y: "World" }
    ]
  };

  var { p: [x, { y }] } = obj;
  console.log(x); // "Hello"
  console.log(y); // "World"
}

/*function demo4() {
  var { x = 3 } = {};
  console.log(x); // 3

  var {x, y = 5} = {x: 1};
  console.log(x, y) // 1, 5
}*/

/*function demo5() {
  function move({x=0, y=0} = {}) {
    return [x, y];
  }

  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, 0]
  move({}); // [0, 0]
  move(); // [0, 0]
}*/

/*function demo6() {
  function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
  }

  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, undefined]
  move({}); // [undefined, undefined]
  move(); // [0, 0]
}*/

function demo7() {
  // 错误的写法
  var x;
  //{x} = {x:1}; // SyntaxError: syntax error

  // 正确的写法
  ({x}) = {x:1};
  // 或者
  ({x} = {x:1});

  console.log(x);
}

function demo8() {
  let { log, sin, cos } = Math;
  console.log(log, sin, cos);
}

//demo1();
//demo2();
//demo3();

//demo4(); // TODO: fail
//demo5(); // TODO: fail
//demo6(); // TODO: fail

//demo7();
//demo8();
