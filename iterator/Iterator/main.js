console.info('Iterator（遍历器）');

// 模拟next方法返回值
function demo1() {
  function makeIterator(array) {
    var nextIndex = 0;
    return {
      next: function() {
        return nextIndex < array.length ? {
          value: array[nextIndex++],
          done: false
        } : {
          value: undefined,
          done: true
        };
      }
    };
  }

  var it = makeIterator(['a', 'b']);

  var a = it.next(); // { value: "a", done: false }
  var b = it.next(); // { value: "b", done: false }
  var c = it.next(); // { value: undefined, done: true }
  console.log(a, b, c);
}

function demo2() {
  function idMaker() {
    var index = 0;

    return {
      next: function() {
        return {
          value: index++,
          done: false
        };
      }
    };
  }

  var it = idMaker();

  var a = it.next().value; // '0'
  var b = it.next().value; // '1'
  var c = it.next().value; // '2'
  console.log(a, b, c);
}

// 如果使用TypeScript的写法，遍历器接口、遍历器和遍历器返回值的规格可以描述如下。

/*interface Iterable {
  [System.iterator]() : Iterator,
}

interface Iterator {
  next(value?: any) : IterationResult,
}

interface IterationResult {
  value: any,
  done: boolean,
}*/

/**
 * 默认的Iterator接口
 */

function demo3() {
  let arr = ['a', 'b', 'c'];
  let iter = arr[Symbol.iterator]();

  var a = iter.next(); // { value: 'a', done: false }
  var b = iter.next(); // { value: 'b', done: false }
  var c = iter.next(); // { value: 'c', done: false }
  var d = iter.next(); // { value: undefined, done: true }

  console.log(a, b, c, d);
}

function demo4() {
  function Obj(value) {
    this.value = value;
    this.next = null;
  }

  Obj.prototype[Symbol.iterator] = function() {

    var iterator = {
      next: next
    };

    var current = this;

    function next() {
      if (current) {
        var value = current.value;
        var done = current == null;
        current = current.next;
        return {
          done: done,
          value: value
        };
      } else {
        return {
          done: true
        };
      }
    }
    return iterator;
  };

  var one = new Obj(1);
  var two = new Obj(2);
  var three = new Obj(3);
  one.next = two;
  two.next = three;

  for (var i of one) {
    console.log(i);
  }
  // 1
  // 2
  // 3
}

function demo5() {
  let obj = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
      const self = this;
      let index = 0;
      return {
        next() {
          if (index < self.data.length) {
            return {
              value: self.data[index++],
              done: false
            };
          } else {
            return {
              value: undefined,
              done: true
            };
          }
        }
      };
    }
  };

  var o = obj[Symbol.iterator]();
  var a = o.next();
  var b = o.next();
  var c = o.next();
  console.log(a, b, c);
}

// 对于类似数组的对象（存在数值键名和length属性），部署Iterator接口，有一个简便方法，就是Symbol.iterator方法直接引用数值的Iterator接口。
// NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

function demo6() {
  var ITERABLE = ['hello', 'world'];
  var $iterator = ITERABLE[Symbol.iterator]();
  var $result = $iterator.next();
  while (!$result.done) {
    var x = $result.value;
    // ...
    $result = $iterator.next();
    console.log(x, $result);
  }
}

/**
 * 调用默认iterator接口的场合
 */

// 解构赋值
function demo7() {
  let set = new Set().add('a').add('b').add('c');

  let [x, y] = set;
  console.log(x, y); // x='a'; y='b'

  let [first, ...rest] = set;
  console.log(first, rest); // first='a'; rest=['b','c'];
}

// 扩展运算符
function demo8() {
  // 例一
  var str = 'hello';
  console.log([...str]); //  ['h','e','l','l','o']

  // 例二
  let arr = ['b', 'c'];
  console.log(['a', ...arr, 'd']); // ['a', 'b', 'c', 'd']

  // let arr = [...iterable];
}

// 其他场合
/**
 * 以下场合也会用到默认的iterator接口，可以查阅相关章节。
 * yield*
 * Array.from()
 * Map(), Set(), WeakMap(), WeakSet()
 * Promise.all(), Promise.race()
 */

/**
 * 原生具备iterator接口的数据结构
 */

function demo9() {
  var arr = [1, 5, 7];
  var arrEntries = arr.entries();

  console.log(arrEntries.toString()); // "[object Array Iterator]"

  console.log(arrEntries === arrEntries[Symbol.iterator]()); // true
}

function demo10() {
  var someString = "hi";
  console.log(typeof someString[Symbol.iterator]); // "function"

  var iterator = someString[Symbol.iterator]();

  var a = iterator.next(); // { value: "h", done: false }
  var b = iterator.next(); // { value: "i", done: false }
  var c = iterator.next(); // { value: undefined, done: true }
  console.log(a, b, c);
}

function demo11() {
  var str = new String("hi");

  console.log([...str]); // ["h", "i"]

  str[Symbol.iterator] = function() {
    return {
      next: function() {
        if (this._first) {
          this._first = false;
          return {
            value: "bye",
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      },
      _first: true
    };
  };

  console.log([...str]); // ["bye"]
  console.log(str); // "hi"
}

/**
 * Iterator接口与Generator函数
 */

function demo12() {
  var myIterable = {};

  myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
  };
  console.log([...myIterable]); // [1, 2, 3]

  // 或者采用下面的简洁写法

  let obj = {
    * [Symbol.iterator]() {
      yield 'hello';
      yield 'world';
    }
  };

  for (let x of obj) {
    console.log(x);
  }
  // hello
  // world
}

/**
 * return()，throw()
 */

// 遍历器除了具有next方法（必备），还可以具有return方法和throw方法（可选）。

// for...of循环如果提前退出（通常是因为出错，或者有break语句或continue语句），就会调用return方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署return方法。

// throw方法主要是配合Generator函数使用，一般的遍历器用不到这个方法。请参阅《Generator函数》的章节。

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
//demo11();

//demo12();
