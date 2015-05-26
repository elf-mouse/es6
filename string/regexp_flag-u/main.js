'use strict';

console.info('正则表达式的u修饰符');

// ES6对正则表达式添加了u修饰符，用来正确处理大于\uFFFF的Unicode字符。

// 点字符
function demo1() {
  var s = "𠮷";

  console.log(/^.$/.test(s)); // false
  console.log(/^.$/u.test(s)); // true
}

// Unicode字符表示法
function demo2() {
  console.log(/\u{61}/.test('a')); // false
  console.log(/\u{61}/u.test('a')); // true
  console.log(/\u{20BB7}/u.test('𠮷')); // true
}

// 量词
function demo3() {
  console.log(/a{2}/.test('aa')); // true
  console.log(/a{2}/u.test('aa')); // true
  console.log(/𠮷{2}/.test('𠮷𠮷')); // false
  console.log(/𠮷{2}/u.test('𠮷𠮷')); // true
}

// 预定义模式
function demo4() {
  console.log(/^\S$/.test('𠮷')); // false
  console.log(/^\S$/u.test('𠮷'));

  function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
  }

  var s = "𠮷𠮷";

  console.log(s.length); // 4
  console.log(codePointLength(s)); // 2
}

// i修饰符
function demo5() {
  console.log(/[a-z]/i.test('\u212A')); // false
  console.log(/[a-z]/iu.test('\u212A')); // true
}

// TODO: fail for all
//demo1();
//demo2();
//demo3();
//demo4();
//demo5();
