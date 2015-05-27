'use strict';

console.info('数组推导');
console.warn('数组推导需要注意的地方是，新数组会立即在内存中生成。这时，如果原数组是一个很大的数组，将会非常耗费内存。');

function demo1() {
  var a1 = [1, 2, 3, 4];
  var a2 = [for (i of a1) i * 2];

  console.log(a2); // [2, 4, 6, 8]
}

function demo2() {
  var years = [ 1954, 1974, 1990, 2006, 2010, 2014 ];

  var a = [for (year of years) if (year > 2000) year]; // [ 2006, 2010, 2014 ]

  var b = [for (year of years) if (year > 2000) if(year < 2010) year]; // [ 2006]

  var c = [for (year of years) if (year > 2000 && year < 2010) year]; // [ 2006]

  console.log(a, b, c);
}

function demo3() {
  var a = [for (i of [1, 2, 3]) i * i];
  // 等价于
  var b = [1, 2, 3].map(function (i) { return i * i });

  var c = [for (i of [1,4,2,3,-8]) if (i < 3) i];
  // 等价于
  var d = [1,4,2,3,-8].filter(function(i) { return i < 3 });

  console.log(a, b);
  console.log(c, d);
}

function demo4() {
  var a1 = ["x1", "y1"];
  var a2 = ["x2", "y2"];
  var a3 = ["x3", "y3"];

  [for (s of a1) for (w of a2) for (r of a3) console.log(s + w + r)];
  // x1x2x3
  // x1x2y3
  // x1y2x3
  // x1y2y3
  // y1x2x3
  // y1x2y3
  // y1y2x3
  // y1y2y3
}

function demo5() {
  var a = [for (c of 'abcde') if (/[aeiou]/.test(c)) c].join(''); // 'ae'

  var b = [for (c of 'abcde') c+'0'].join(''); // 'a0b0c0d0e0'

  console.log(a, b);
}

//demo1();
//demo2();
//demo3();
//demo4();
//demo5();
