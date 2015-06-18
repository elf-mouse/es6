'use strict';

console.info('基本用法');

function demo1() {
  {
    let a = 10;
    var b = 1;
  }

  console.log(a); // ReferenceError: a is not defined.
  console.log(b); // 1
}

function demo2() {
  var arr = [1, 2, 3];

  for (let i = 0, len = arr.length; i < len; i++) {}

  console.log(i); // ReferenceError: i is not defined
}

function demo3() {
  var a = [];
  for (var i = 0; i < 10; i++) {
    a[i] = function() {
      console.log(i);
    };
  }
  a[6](); // 10
}

function demo4() {
  var b = [];
  for (let j = 0; j < 10; j++) {
    b[j] = function() {
      console.log(j);
    };
  }
  b[6](); // 6
}

//demo1();
//demo2();
//demo3();
//demo4();
