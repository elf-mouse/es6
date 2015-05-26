'use strict';

console.info('全局对象的属性');

var a = 1;
// 如果在node环境，可以写成global.a
// 或者采用通用方法，写成this.a
console.log(window.a); // 1

let b = 1;
console.log(window.b); // undefined
