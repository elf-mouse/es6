'use strict';

console.info('includes(), startsWith(), endsWith()');

/**
 * 传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
 *
 * includes()：返回布尔值，表示是否找到了参数字符串。
 * startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
 * endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
 */

function demo1() {
  var s = "Hello world!";

  console.log(s.startsWith("Hello")); // true
  console.log(s.endsWith("!")); // true
  console.log(s.includes("o")); // true
}

function demo2() {
  var s = "Hello world!";

  console.log(s.startsWith("world", 6)); // true
  console.log(s.endsWith("Hello", 5)); // true
  console.log(s.includes("Hello", 6)); // false
}

//demo1();
//demo2();
