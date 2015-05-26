'use strict';

console.info('块级作用域');

function demo1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

// IIFE写法
/*(function() {
  var tmp = ...;
  ...
}());*/

// 块级作用域写法
/*{
  let tmp = ...;
  ...
}*/

function demo2() {
  function f() {
    console.log('I am outside!'); // ES6
  }

  (function() {
    if (false) {
      // 重复声明一次函数f
      function f() {
        console.log('I am inside!'); // ES5
      }
    }

    f();
  }());
}

//demo1();
//demo2();
