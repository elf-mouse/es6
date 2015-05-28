console.info('WeakSet');

// WeakSet的成员只能是对象，而不能是其他类型的值。其次，WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。

function demo1() {
  var ws = new WeakSet();
  ws.add(1);
  // TypeError: Invalid value used in weak set
}

function demo2() {
  var a = [
    [1, 2],
    [3, 4]
  ];

  var ws = new WeakSet(a);
}

/**
 * WeakSet结构有以下三个方法。
 *
 * WeakSet.prototype.add(value)：向WeakSet实例添加一个新成员。
 * WeakSet.prototype.delete(value)：清除WeakSet实例的指定成员。
 * WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在WeakSet实例之中。
 */

function demo3() {
  var ws = new WeakSet();
  var obj = {};
  var foo = {};

  ws.add(window);
  ws.add(obj);

  console.log(ws.has(window)); // true
  console.log(ws.has(foo)); // false

  ws.delete(window);
  console.log(ws.has(window)); // false

  ws.clear();
}

function demo4() {
  var ws = new WeakSet();

  console.log(ws.size); // undefined

  /*ws.forEach(function(item) {
    console.log('WeakSet has ' + item);
  });*/
  // TypeError: undefined is not a function

  console.log(ws.forEach); // undefined
}

//demo1();
//demo2();
//demo3();
//demo4();
