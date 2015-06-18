'use strict';

console.info('二进制和八进制表示法');

// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
function demo1() {
  var a = Math.trunc(4.1); // 4
  var b = Math.trunc(4.9); // 4
  var c = Math.trunc(-4.1); // -4
  var d = Math.trunc(-4.9); // -4
  console.log(a, b, c, d);
}

// Math.sign方法用来判断一个数到底是正数、负数、还是零。如果参数为正数，返回+1；参数为负数，返回-1；参数为0，返回0；参数为NaN，返回NaN。
function demo2() {
  var a = Math.sign(-5); // -1
  var b = Math.sign(5); // +1
  var c = Math.sign(0); // +0
  var d = Math.sign(-); // -0
  var e = Math.sign(NaN); // NaN
  console.log(a, b, c, d, e);
}

/**
 * 数学方法
 *
 * Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
 * Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
 * Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
 * Math.cbrt(x) 返回x的立方根
 * Math.clz32(x) 返回x的32位二进制整数表示形式的前导0的个数
 * Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
 * Math.expm1(x) 返回eˆx - 1
 * Math.fround(x) 返回x的单精度浮点数形式
 * Math.hypot(...values) 返回所有参数的平方和的平方根
 * Math.imul(x, y) 返回两个参数以32位整数形式相乘的结果
 * Math.log1p(x) 返回1 + x的自然对数
 * Math.log10(x) 返回以10为底的x的对数
 * Math.log2(x) 返回以2为底的x的对数
 * Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
 */

demo1();
demo2();
