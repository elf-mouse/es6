'use strict';

console.info('String.fromCodePoint()');

// ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别辅助平面的字符（编号大于0xFFFF）
function es5() {
  console.log(String.fromCharCode(0x20BB7)); // "ஷ"
}
//上面代码中，最后返回码点U+0BB7对应的字符，而不是码点U+20BB7对应的字符。

//ES6提供了String.fromCodePoint方法，可以识别0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。
function es6() {
  console.log(String.fromCodePoint(0x20BB7)); // "𠮷"
}
// 注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。

es5();
es6();
