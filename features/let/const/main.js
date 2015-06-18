'use strict';

console.info('const命令');

function demo1() {
  const PI = 3.1415;
  console.log(PI); // 3.1415

  //PI = 3; // Uncaught TypeError: Assignment to constant variable.

  //const PI = 3.1; // Uncaught SyntaxError: Identifier 'PI' has already been declared
}

function demo2() {
  if (true) {
    console.log(MAX); // ReferenceError
    const MAX = 5;
  }

  // 常量MAX在此处不可得
}

function demo3() {
  var message = "Hello!";
  let age = 25;

  // 以下两行都会报错
  //const message = "Goodbye!";
  //const age = 30;
}

function demo4() {
  const foo = {};
  foo.prop = 123;

  console.log(foo.prop); // 123

  foo = {}; // 不起作用
}

function demo5() {
  const a = [];
  a.push("Hello"); // 可执行
  console.log(a);
  a.length = 0; // 可执行
  a = ["Dave"]; // 报错
}

function demo6() {
  const foo = Object.freeze({});
  foo.prop = 123; // 不起作用
}

//demo1();
//demo2();
//demo3();
//demo4();
//demo5();
//demo6();
