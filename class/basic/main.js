'use strict';

console.info('Class基本语法');

function demo1() {
  // ES5
  /*function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
  }*/

  // ES6
  class Point {

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }

  }

  console.log(Point.prototype.constructor === Point); // true

  console.log(Point.prototype.toString);
  // function toString() {
  //   return '(' + this.x + ', ' + this.y + ')';
  // }
}

// constructor方法
function demo2() {
  class Foo {
    constructor() {
      return Object.create(null);
    }
  }

  console.log(new Foo() instanceof Foo); // false
}

// 实例对象
function demo3() {
  //定义类
  class Point {

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }

  }

  var point = new Point(2, 3);

  console.log(point.toString()); // (2, 3)

  var a = point.hasOwnProperty('x'); // true
  var b = point.hasOwnProperty('y'); // true
  var c = point.hasOwnProperty('toString'); // false
  var d = point.__proto__.hasOwnProperty('toString'); // true
  console.log(a, b, c, d);

  var p1 = new Point(2, 3);
  var p2 = new Point(3, 2);

  console.log(p1.__proto__ === p2.__proto__); // true

  p1.__proto__.printName = function() {
    return 'Oops';
  };

  console.log(p1.printName()); // "Oops"
  console.log(p2.printName()); // "Oops"

  var p3 = new Point(4, 2);
  console.log(p3.printName()); // "Oops"
}

// name属性
function demo4() {
  class Point {}

  console.log(Point.name); // "Point"
}

// Class表达式
function demo5() {
  const MyClass = class Me {
    getClassName() {
      return Me.name;
    }
  };

  let inst = new MyClass();
  console.log(inst.getClassName()); // Me
  console.log(Me.name); // ReferenceError: Me is not defined

  // 如果Class内部没用到的话，可以省略Me，也就是可以写成下面的形式。
  // const MyClass = class { /* ... */ };
}

// 不存在变量提升
function demo6() {
  new Foo(); // ReferenceError

  class Foo {}
  // 上面代码中，Foo类使用在前，定义在后，这样会报错，因为ES6不会把变量声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。
  /*{
    let Foo = class {};
    class Bar extends Foo {
    }
  }*/
}

console.warn('!严格模式');
console.log('类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。考虑到未来所有的代码，其实都是运行在模块之中，所以ES6实际上把整个语言升级到了严格模式。');

//demo1();
//demo2();
//demo3();
//demo4();
//demo5();
//demo6();
