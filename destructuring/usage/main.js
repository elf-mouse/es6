'use strict';

console.info('用途');

// 交换变量的值
function demo1() {
  var [x, y] = [1, 2];
  console.log('before:', x, y);
  [x, y] = [y, x];
  console.log('after: ', x, y);
}

// 从函数返回多个值
function demo2() {
  // 返回一个数组
  function arrayExample() {
    return [1, 2, 3];
  }
  var [a, b, c] = arrayExample();
  console.log(a, b, c);

  // 返回一个对象
  function objectExample() {
    return {
      foo: 1,
      bar: 2
    };
  }
  var { foo, bar } = objectExample();
  console.log(foo, bar);
}

// 函数参数的定义
function demo3() {
  // 参数是一组有次序的值
  function f1([x, y, z]) {
    console.log(x, y, z);
  }
  f1([1, 2, 3])

  // 参数是一组无次序的值
  function f2({x, y, z}) {
    console.log(x, y, z);
  }
  f2({x:1, y:2, z:3})
}

// 提取JSON数据
function demo4() {
  var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  };

  let { id, status, data: number } = jsonData;

  console.log(id, status, number); // 42, OK, [867, 5309]
}

// 函数参数的默认值
function demo5() {
  /*jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
    // ... more config
  }) {
    // ... do stuff
  };*/
}
// 指定参数的默认值，就避免了在函数体内部再写`var foo = config.foo || 'default foo';`这样的语句

// 遍历Map结构
function demo6() {
  var map = new Map();
  map.set('first', 'hello');
  map.set('second', 'world');

  for (let [key, value] of map) {
    console.log(key + " is " + value);
  }
  // first is hello
  // second is world

  // 获取键名
  for (let [key] of map) {
    // ...
  }

  // 获取键值
  for (let [,value] of map) {
    // ...
  }
}

// 输入模块的指定方法
function demo7() {
  const { SourceMapConsumer, SourceNode } = require("source-map");
}

//demo1();
//demo2();
//demo3();
//demo4();

//demo6();
//demo7();
