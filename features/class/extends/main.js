'use strict';

console.info('Class的继承');

/**
 * 基本用法
 */

class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

class ColorPoint extends Point {

  // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
  constructor(x, y, color) {
    //this.color = color; // ReferenceError
    super(x, y); // 等同于parent.constructor(x, y)
    this.color = color; // 正确
  }

  toString() {
    return this.color + ' ' + super.toString(); // 等同于parent.toString()
  }

}

function demo1() {
  let cp = new ColorPoint(25, 8, 'green');

  console.log(cp instanceof ColorPoint); // true
  console.log(cp instanceof Point); // true
}

/**
 * 类的prototype属性和__proto__属性
 *
 * 在ES5中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
 * 1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
 * 2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
 */

function demo2() {
  class A {}

  class B extends A {}

  console.log(B.__proto__ === A); // true
  console.log(B.prototype.__proto__ === A.prototype); // true
}

// 第一条继承链，实质如下。
function demo2_1() {
  class A {}

  /*class B extends A {
    constructor() {
      return A.call(this);
    }
  }*/
  // 等同于
  class B extends A {
    constructor() {
      return B.__proto__.call(this);
    }
  }
}

// 第二条继承链，实质如下。
function demo2_2() {
  class A {}

  class B {}

  //B.prototype = new A();
  // 等同于
  B.prototype.__proto__ = A.prototype;
}

// 此外，还有三种特殊情况。
function demo2_3_0() {
  class A extends Object {}

  console.log(A.__proto__ === Object); // true
  console.log(A.prototype.__proto__ === Object.prototype); // true
}

// 第一种特殊情况，子类A继承Object。这种情况下，A其实就是构造函数Object的复制，A的实例就是Object的实例。
function demo2_3_1() {
  class A {}

  console.log(A.__proto__ === Function.prototype); // true
  console.log(A.prototype.__proto__ === Object.prototype); // true
}

// 第二种特殊情况，A作为一个基类（即不存在任何继承），就是一个普通函数，所以直接继承Funciton.prototype。但是，A调用后返回一个空对象（即Object实例），所以A.prototype.__proto__指向构造函数（Object）的prototype属性。
function demo2_3_2() {
  class A extends null {}

  console.log(A.__proto__ === Function.prototype); // true
  console.log(A.prototype.__proto__ === null); // true?
}

// 第三种特殊情况，与第二种情况非常像。A也是一个普通函数，所以直接继承Funciton.prototype。但是，A调用后返回的对象不继承任何方法，所以它的__proto__指向Function.prototype，即实质上执行了下面的代码。
function demo2_3_3() {
  class C extends null {
    constructor() {
      return Object.create(null);
    }
  }
}

/**
 * Object.getPrototypeOf()
 */

function demo3() {
  console.log(Object.getPrototypeOf(ColorPoint) === Point); // true
}

/**
 * 实例的__proto__属性
 */

function demo4() {
  var p1 = new Point(2, 3);
  var p2 = new ColorPoint(2, 3, 'red');

  console.log(p2.__proto__ === p1.__proto); // false
  console.log(p2.__proto__.__proto__ === p1.__proto__); // true

  p2.__proto__.__proto__.printName = function() {
    console.log('Ha');
  };

  p1.printName(); // "Ha"
}

/**
 * 构造函数的继承
 */

function demo5() {
  // TODO: fail
  /*class MyArray extends Array {
    constructor(...args) {
      super(...args);
    }
  }

  var arr = new MyArray();
  arr[1] = 12;

  console.log(arr);*/

  // 上面这个例子也说明，extends关键字不仅可以用来继承类，还可以用来继承构造函数。下面是一个自定义Error子类的例子。
  class MyError extends Error {}

  throw new MyError('Something happened!');
}

//demo1();

//demo2();
//demo2_1();
//demo2_2();
//demo2_3_0();
//demo2_3_1();
//demo2_3_2();
//demo2_3_3();

//demo3();
//demo4();
//demo5();
