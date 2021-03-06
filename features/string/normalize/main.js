'use strict';

console.info('normalize()');

// 为了表示语调和重音符号，Unicode提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\u004F）和ˇ（\u030C）合成Ǒ（\u004F\u030C）。

// 这两种表示方法，在视觉和语义上都等价，但是JavaScript不能识别。
function es5() {
  console.log('\u01D1' === '\u004F\u030C'); //false

  console.log('\u01D1'.length); // 1
  console.log('\u004F\u030C'.length); // 2
}
// 上面代码表示，JavaScript将合成字符视为两个字符，导致两种表示方法不相等。

// ES6提供String.prototype.normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为Unicode正规化。
function es6() {
  console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize()); // true

  console.log('\u004F\u030C'.normalize('NFC').length); // 1
  console.log('\u004F\u030C'.normalize('NFD').length); // 2
  // 上面代码表示，NFC参数返回字符的合成形式，NFD参数返回字符的分解形式。
}

/**
 * normalize方法可以接受四个参数。
 *
 * NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
 * NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
 * NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。
 * NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。
 */

// 不过，normalize方法目前不能识别三个或三个以上字符的合成。这种情况下，还是只能使用正则表达式，通过Unicode编号区间判断。

es5();
es6();
