'use strict';

console.info('codePointAt()');

// JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。
function demo1() {
  var s = "𠮷";

  console.log(s.length); // 2
  console.log(s.charAt(0)); // ''
  console.log(s.charAt(1)); // ''
  console.log(s.charCodeAt(0)); // 55362
  console.log(s.charCodeAt(1)); // 57271
}

// ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
function demo2() {
  var s = "𠮷a";

  console.log(s.codePointAt(0)); // 134071
  console.log(s.codePointAt(1)); // 57271

  console.log(s.charCodeAt(2)); // 97
}

// codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法
function demo3() {
  function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
  }

  console.log(is32Bit("𠮷")); // true
  console.log(is32Bit("a")); // false
}

//demo1();
//demo2();
//demo3();
