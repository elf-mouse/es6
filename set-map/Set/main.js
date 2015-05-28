console.info('Set');

/**
 * 基本用法
 */

// ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

function demo1() {
  var s = new Set();

  [2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));

  for (i of s) {
    console.log(i);
  }
  // 2 3 4 5
}

function demo2() {
  var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);

  console.log(items.size); // 5
}

function demo3() {
  let set = new Set();

  set.add({});
  console.log(set.size); // 1

  set.add({});
  console.log(set.size); // 2
}

/**
 * 属性和方法
 *
 * Set结构有以下属性。
 * Set.prototype.constructor：构造函数，默认就是Set函数。
 * Set.prototype.size：返回Set的成员总数。
 *
 * Set数据结构有以下方法。
 * add(value)：添加某个值，返回Set结构本身。
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * clear()：清除所有成员，没有返回值。
 */

function demo4() {
  let s = new Set();

  s.add(1).add(2).add(2);
  // 注意2被加入了两次

  console.log(s.size); // 2

  var a = s.has(1); // true
  var b = s.has(2); // true
  var c = s.has(3); // false
  console.log(a, b, c);

  s.delete(2);
  console.log(s.has(2)); // false
}

function demo5() {
  var someName = 'width';

  // 对象的写法
  var properties = {
    "width": 1,
    "height": 1
  };

  if (properties[someName]) {
    // do something
    console.log('properties[someName]');
  }

  // Set的写法
  var properties = new Set();

  properties.add("width");
  properties.add("height");

  if (properties.has(someName)) {
    // do something
    console.log('properties.has(someName)');
  }
}

function demo6() {
  var items = new Set([1, 2, 3, 4, 5]);
  var array = Array.from(items);
  console.log(array);
}

function demo7() {
  function dedupe(array) {
    return Array.from(new Set(array));
  }
  console.log(dedupe([3, 5, 2, 2, 5, 5]));
}

/**
 * 遍历操作
 */

function demo8() {
  let set = new Set(['red', 'green', 'blue']);
  for (let item of set.values()) {
    console.log(item);
  }
  // red
  // green
  // blue
}

function demo9() {
  console.log(Set.prototype[Symbol.iterator] === Set.prototype.values); // true
}

function demo10() {
  let set = new Set(['red', 'green', 'blue']);

  for (let x of set) {
    console.log(x);
  }
  // red
  // green
  // blue
}

function demo11() {
  let set = new Set([1, 2, 3]);

  set.forEach((value, key) => value * 2); // 返回Set结构{2, 4, 6}
}

function demo12() {
  let set = new Set(['red', 'green', 'blue']);

  for (let item of set.keys()) {
    console.log(item);
  }
  // red
  // green
  // blue

  for (let [key, value] of set.entries()) {
    console.log(key, value);
  }
  // red, red
  // green, green
  // blue, blue
}

function demo13() {
  let set = new Set(['red', 'green', 'blue']);
  let arr = [...set];
  console.log(arr); // ['red', 'green', 'blue']
}

function demo14() {
  let arr = [3, 5, 2, 2, 5, 5];
  let unique = [...new Set(arr)];
  console.log(unique); // [3, 5, 2]
}

function demo15() {
  let set1 = new Set([1, 2, 3]);
  set1 = new Set([...set1].map(x => x * 2));
  console.log(set1); // 返回Set结构：{2, 4, 6}

  let set2 = new Set([1, 2, 3, 4, 5]);
  set2 = new Set([...set2].filter(x => (x % 2) == 0));
  console.log(set2); // 返回Set结构：{2, 4}
}

function demo16() {
  let a = new Set([1, 2, 3]);
  let b = new Set([4, 3, 2]);

  let union = new Set([...a, ...b]);
  console.log(union); // [1,2,3,4]

  let intersect = new Set([...a].filter(x => b.has(x)));
  console.log(intersect); // [2,3]
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
//demo11(); // TODO: fail
//demo12();
//demo13();
//demo14();
//demo15();
//demo16();
