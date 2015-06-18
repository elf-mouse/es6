'use strict';

console.info('Array.from()');

function demo1() {
  let ps = document.querySelectorAll('p');

  Array.from(ps).forEach(function(p) {
    console.log(p);
  });
}

function demo2() {
  function foo() {
    var args = Array.from(arguments);
    console.log(args);
  }

  foo("a", "b", "c");
}

function demo3() {
  var arr = Array.from({
    0: "a",
    1: "b",
    2: "c",
    length: 3
  });
  console.log(arr); // [ "a", "b" , "c" ]
}

// 对于还没有部署该方法的浏览器，可以用Array.prototyp.slice方法替代。
function demo4() {
  const toArray = (() =>
    Array.from ? Array.from : obj => [].slice.call(obj)
  )();
}

function demo5() {
  var arrayLike = [1, 0, 2, 4];

  var a = Array.from(arrayLike, x => x * x);
  // 等同于
  var b = Array.from(arrayLike).map(x => x * x);

  console.log(a, b);
}

function demo6() {
  function countSymbols(string) {
    return Array.from(string).length;
  }
  console.log(countSymbols('Hello World!'));
}

//demo1();
//demo2();
//demo3();

//demo5();
//demo6();
