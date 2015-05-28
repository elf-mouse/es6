console.info('Map');

/**
 * 基本用法
 */

// JavaScript的对象，本质上是键值对的集合，但是只能用字符串当作键。这给它的使用带来了很大的限制。

/*var data = {};
var element = document.getElementById("myDiv");

data[element] = metadata;*/

// ES6提供了map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应。

function demo1() {
  var m = new Map();
  var o = {
    p: "Hello World"
  };

  m.set(o, "content");
  console.log(m.get(o)); // "content"

  var a = m.has(o); // true
  var b = m.delete(o); // true
  var c = m.has(o); // false
  console.log(a, b, c);
}

function demo2() {
  var map = new Map([
    ["name", "张三"],
    ["title", "Author"]
  ]);

  var a = map.size; // 2
  var b = map.has("name"); // true
  var c = map.get("name"); // "张三"
  var d = map.has("title"); // true
  var e = map.get("title"); // "Author"
  console.log(a, b, c, d, e);
}

function demo3() {
  var map = new Map();

  map.set(['a'], 555);
  console.log(map.get(['a'])); // undefined
}

function demo4() {
  var map = new Map();

  var k1 = ['a'];
  var k2 = ['a'];

  map.set(k1, 111);
  map.set(k2, 222);

  console.log(map.get(k1)); // 111
  console.log(map.get(k2)); // 222
}

function demo5() {
  let map = new Map();

  map.set(NaN, 123);
  console.log(map.get(NaN)); // 123

  map.set(-0, 123);
  console.log(map.get(+0)); // 123
}

function demo6() {
  console.log(new Map().get('asfddfsasadf')); // undefined
}

/**
 * 属性和方法
 *
 * Map数据结构有以下属性和方法。
 * size：返回成员总数。
 * set(key, value)：设置key所对应的键值，然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键。
 * get(key)：读取key对应的键值，如果找不到key，返回undefined。
 * has(key)：返回一个布尔值，表示某个键是否在Map数据结构中。
 * delete(key)：删除某个键，返回true。如果删除失败，返回false。
 * clear()：清除所有成员，没有返回值。
 */

function demo7() {
  let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
}

function demo8() {
  var m = new Map();

  m.set("edition", 6); // 键是字符串
  m.set(262, "standard"); // 键是数值
  m.set(undefined, "nah"); // 键是undefined

  var hello = function() {
    console.log("hello");
  };
  m.set(hello, "Hello ES6!"); // 键是函数

  var a = m.has("edition"); // true
  var b = m.has("years"); // false
  var c = m.has(262); // true
  var d = m.has(undefined); // true
  var e = m.has(hello); // true
  console.log(a, b, c, d, e);

  m.delete(undefined);
  console.log(m.has(undefined)); // false

  console.log(m.get(hello)); // Hello ES6!
  console.log(m.get("edition")); // 6
}

function demo9() {
  let map = new Map();
  map.set('foo', true);
  map.set('bar', false);

  console.log(map.size); // 2
  map.clear();
  console.log(map.size); // 0
}

/**
 * 遍历
 *
 * Map原生提供三个遍历器。
 * keys()：返回键名的遍历器。
 * values()：返回键值的遍历器。
 * entries()：返回所有成员的遍历器。
 */

function demo10() {
  let map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
  ]);

  for (let key of map.keys()) {
    console.log(key);
  }
  // "F"
  // "T"

  for (let value of map.values()) {
    console.log(value);
  }
  // "no"
  // "yes"

  for (let item of map.entries()) {
    console.log(item[0], item[1]);
  }
  // "F" "no"
  // "T" "yes"

  // 或者
  for (let [key, value] of map.entries()) {
    console.log(key, value);
  }

  // 等同于使用map.entries()
  for (let [key, value] of map) {
    console.log(key, value);
  }
}

function demo11() {
  var map = new Map();
  console.log(map[Symbol.iterator] === map.entries); // true
}

function demo12() {
  let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);

  var a = [...map.keys()]; // [1, 2, 3]

  var b = [...map.values()]; // ['one', 'two', 'three']

  var c = [...map.entries()]; // [[1,'one'], [2, 'two'], [3, 'three']]

  var d = [...map]; // [[1,'one'], [2, 'two'], [3, 'three']]

  console.log(a, b, c, d);
}

function demo13() {
  let map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

  let map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
  );
  console.log(map1); // 产生Map结构 {1 => 'a', 2 => 'b'}

  let map2 = new Map(
    [...map0].map(([k, v]) => [k * 2, '_' + v])
  );
  console.log(map2); // 产生Map结构 {2 => '_a', 4 => '_b', 6 => '_c'}
}

function demo14() {
  let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

  map.forEach(function(value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
  });
}

function demo15() {
  let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

  var reporter = {
    report: function(key, value) {
      console.log("Key: %s, Value: %s", key, value);
    }
  };

  map.forEach(function(value, key, map) {
    this.report(key, value);
  }, reporter);
}

//demo1();
//demo2();
//demo3();
//demo4();
//demo5();
//demo6();

//demo8();
//demo9();
//demo10();
//demo11();
//demo12();
//demo13();
//demo14();
//demo15();
