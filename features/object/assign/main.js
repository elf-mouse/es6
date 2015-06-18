'use strict';

console.info('Object.assign()');

function demo01() {
  var target = {
    a: 1
  };

  var source1 = {
    b: 2
  };
  var source2 = {
    c: 3
  };

  Object.assign(target, source1, source2);
  console.log(target); // {a:1, b:2, c:3}
}

function demo02() {
  var target = {
    a: 1,
    b: 1
  };

  var source1 = {
    b: 2,
    c: 2
  };
  var source2 = {
    c: 3
  };

  Object.assign(target, source1, source2);
  console.log(target); // {a:1, b:2, c:3}
}

// 为对象添加属性
/*function demo1() {
  class Point {
    constructor(x, y) {
      Object.assign(this, {
        x, y
      });
    }
  }
}*/

// 为对象添加方法
function demo2() {
  var SomeClass1 = {};
  SomeClass1.prototype = {};

  Object.assign(SomeClass1.prototype, {
    someMethod(arg1, arg2) {
        //···
      },
      anotherMethod() {
        //···
      }
  });

  // 等同于下面的写法
  var SomeClass2 = {};
  SomeClass2.prototype = {};

  SomeClass2.prototype.someMethod = function(arg1, arg2) {
    //···
  };
  SomeClass2.prototype.anotherMethod = function() {
    //···
  };

  console.log(SomeClass1);
  console.log(SomeClass2);
}

// 克隆对象
function demo3() {
  // 将原始对象拷贝到一个空对象，就得到了原始对象的克隆。
  function clone1(origin) {
    return Object.assign({}, origin);
  }

  // 克隆并保持继承链
  function clone2(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
  }

  // 原型
  function Foo() {
    this.value = 42;
  }
  Foo.prototype = {
    method: function() {}
  };

  function Bar() {}

  // 设置Bar的prototype属性为Foo的实例对象
  Bar.prototype = new Foo();
  Bar.prototype.foo = 'Hello World';

  // 修正Bar.prototype.constructor为Bar本身
  Bar.prototype.constructor = Bar;

  var test = new Bar(); // 创建Bar的一个新实例

  // 原型链
  /*test [Bar的实例]
      Bar.prototype [Foo的实例]
          { foo: 'Hello World' }
          Foo.prototype
              {method: ...};
              Object.prototype
                  {toString: ... // etc.};*/

  console.info(Foo);
  console.log(clone1(Foo));
  console.log(clone2(Foo));
  console.info(Bar);
  console.log(clone1(Bar));
  console.log(clone2(Bar));
  console.info(test);
  console.log(clone1(test));
  console.log(clone2(test));
}

// 合并多个对象
function demo4() {
  const merge1 =
    (target, ...sources) => Object.assign(target, ...sources);

  const merge2 =
    (...sources) => Object.assign({}, ...sources);
}

// 为属性指定默认值
/*function demo5() {
  const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
  };

  function processContent(options) {
    let options = Object.assign({}, DEFAULTS, options);
  }
}*/

//demo01();
//demo02();

//demo1(); // TODO: fail
//demo2();
//demo3();
//demo4();
//demo5(); // TODO: fail
