'use strict';

console.info('正则表达式的y修饰符');

// 除了u修饰符，ES6还为正则表达式添加了y修饰符，叫做“粘连”（sticky）修饰符。它的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始，不同之处在于，g修饰符只确保剩余位置中存在匹配，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。

function demo1() {
  var s = "aaa_aa_a";
  var r1 = /a+/g;
  var r2 = /a+/y;

  console.log(r1.exec(s)); // ["aaa"]
  console.log(r2.exec(s)); // ["aaa"]

  console.log(r1.exec(s)); // ["aa"]
  console.log(r2.exec(s)); // null
}

function demo2() {
  var s = "aaa_aa_a";
  var r = /a+_/y;

  console.log(r.exec(s)); // ["aaa_"]
  console.log(r.exec(s)); // ["aa_"]
}
// 上面代码每次匹配，都是从剩余字符串的头部开始。
// 进一步说，y修饰符号隐含了头部匹配的标志ˆ。

function demo3() {
  console.log(/b/y.exec("aba")); // null
}

// 与y修饰符相匹配，ES6的正则对象多了sticky属性，表示是否设置了y修饰符。
function demo4() {
  var r = /hello\d/y;
  console.log(r.sticky); // true
}

//demo1();
//demo2();
//demo3();
//demo4();
