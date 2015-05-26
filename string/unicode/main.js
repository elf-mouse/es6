'use strict';

console.info('字符的Unicode表示法');

//JavaScript允许采用“\uxxxx”形式表示一个字符，其中“xxxx”表示字符的码点。
console.log("\u0061"); // "a"
// 但是，这种表示法只限于\u0000——\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表达。

function es5() {
  console.log("\uD842\uDFB7"); // "𠮷"

  console.log("\u20BB7"); // " 7"
}

// ES6对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
function es6() {
  console.log("\u{20BB7}"); // "𠮷"

  console.log("\u{41}\u{42}\u{43}"); // "ABC"
}

es5();
es6();
