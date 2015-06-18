'use strict';

console.info('不存在变量提升');

function demo1() {
  console.log(foo); // ReferenceError
  let foo = 2;
}

function demo2() {
  if (1) {
    typeof x; // ReferenceError
    let x;
  }
}

function demo3() {
  var tmp = 123;

  if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
  }
}

//demo1();
//demo2();
//demo3();
