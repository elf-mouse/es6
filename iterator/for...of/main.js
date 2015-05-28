console.info('for...of循环');

/**
 * 数组
 */

function demo1() {
  const arr = ['red', 'green', 'blue'];
  let iterator = arr[Symbol.iterator]();

  for (let v of arr) {
    console.log(v); // red green blue
  }

  for (let v of iterator) {
    console.log(v); // red green blue
  }
}

function demo2() {
  const arr = ['red', 'green', 'blue'];

  arr.forEach(function(element, index) {
    console.log(element); // red green blue
    console.log(index); // 0 1 2
  });
}

function demo3() {
  var arr = ["a", "b", "c", "d"];

  for (a in arr) {
    console.log(a); // 0 1 2 3
  }

  for (a of arr) {
    console.log(a); // a b c d
  }
}

/**
 * Set和Map结构
 */

function demo4() {
  var engines = Set(["Gecko", "Trident", "Webkit", "Webkit"]);
  for (var e of engines) {
    console.log(e);
  }
  // Gecko
  // Trident
  // Webkit

  var es6 = new Map();
  es6.set("edition", 6);
  es6.set("committee", "TC39");
  es6.set("standard", "ECMA-262");
  for (var [name, value] of es6) {
    console.log(name + ": " + value);
  }
  // edition: 6
  // committee: TC39
  // standard: ECMA-262
}

function demo5() {
  let map = new Map().set('a', 1).set('b', 2);
  for (let pair of map) {
    console.log(pair);
  }
  // ['a', 1]
  // ['b', 2]

  for (let [key, value] of map) {
    console.log(key + ' : ' + value);
  }
  // a : 1
  // b : 2
}

/**
 * 计算生成的数据结构
 */

function demo6() {
  let arr = ['a', 'b', 'c'];
  for (let pair of arr.entries()) {
    console.log(pair);
  }
  // [0, 'a']
  // [1, 'b']
  // [2, 'c']
}

/**
 * 类似数组的对象
 */

function demo7() {
  // 字符串
  let str = "hello";

  for (let s of str) {
    console.log(s); // h e l l o
  }

  // DOM NodeList对象
  let paras = document.querySelectorAll("p");

  for (let p of paras) {
    p.classList.add("test");
  }

  // arguments对象
  function printArgs() {
    for (let x of arguments) {
      console.log(x);
    }
  }
  printArgs('a', 'b');
  // 'a'
  // 'b'
}

function demo8() {
  for (let x of 'a\uD83D\uDC0A') {
    console.log(x);
  }
  // 'a'
  // '\uD83D\uDC0A'
}

function demo9() {
  let arrayLike = {
    length: 2,
    0: 'a',
    1: 'b'
  };

  // 报错
  /*for (let x of arrayLike) {
    console.log(x);
  }*/

  // 正确
  for (let x of Array.from(arrayLike)) {
    console.log(x);
  }
}

/**
 * 对象
 */

function demo10() {
  var es6 = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
  };

  for (e in es6) {
    console.log(e);
  }
  // edition
  // committee
  // standard

  /*for (e of es6) {
    console.log(e);
  }*/
  // TypeError: es6 is not iterable

  // 一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
  var someObject = es6;
  for (var key of Object.keys(someObject)) {
    console.log(key + ": " + someObject[key]);
  }
}

// 在对象上部署iterator接口的代码，参见本章前面部分。一个方便的方法是将数组的Symbol.iterator属性，直接赋值给其他对象的Symbol.iterator属性。比如，想要让for...of循环遍历jQuery对象，只要加上下面这一行就可以了。
function demo11() {
  jQuery.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
}

/**
 * 与其他遍历语法的比较
 */

function demo12() {
  var myArray = [2, 0, 1, 5];

  // 最原始的for循环
  for (var index = 0, len = myArray.length; index < len; index++) {
    console.log(myArray[index]);
  }

  myArray.forEach(function(value) {
    console.log(value);
    // 这种写法的问题在于，无法中途跳出forEach循环，break命令或return命令都不能奏效。
  });

  for (var index in myArray) {
    console.log(myArray[index]);
  }
  /**
   * for...in循环有几个缺点。
   * 1）数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
   * 2）for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
   * 3）某些情况下，for...in循环会以任意顺序遍历键名。
   */

  for (let value of myArray) {
    console.log(value);
  }
  /**
   * for...of循环相比上面几种做法，有一些显著的优点。
   * 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
   * 不同用于forEach方法，它可以与break、continue和return配合使用。
   * 提供了遍历所有数据结构的统一操作接口。
   */
}

//demo1();
//demo2();
//demo3();

//demo4();
//demo5();

//demo6();

//demo7();
//demo8();
//demo9();

//demo10();

//demo12();
