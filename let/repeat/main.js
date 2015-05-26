'use strict';

console.info('不允许重复声明');

// 报错
{
  let a = 10;
  var a = 1;
}

// 报错
{
  let a = 10;
  let a = 1;
}

function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
