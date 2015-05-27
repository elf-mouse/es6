'use strict';

console.info('Symbol');

//在ES5中，对象的属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法，新方法的名字有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是ES6引入Symbol的原因。

//ES6引入了一种新的原始数据类型Symbol，表示独一无二的ID。它通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

function demo1() {
  let s = Symbol();

  console.log(typeof s); // "symbol"
}

function demo2() {
  var mySymbol = Symbol('Test');

  console.log(mySymbol.name); // Test
}

function demo3() {
  // 没有参数的情况
  var s1 = Symbol();
  var s2 = Symbol();

  console.log(s1 === s2); // false

  // 有参数的情况
  var s1 = Symbol("foo");
  var s2 = Symbol("foo");

  console.log(s1 === s2); // false
}

function demo4() {
  var sym = Symbol('My symbol');

  //console.log('' + sym); // TypeError: Cannot convert a Symbol value to a string

  console.log(String(sym)); // 'Symbol(My symbol)'

  console.log(sym.toString()); // 'Symbol(My symbol)'
}

// 作为属性名的Symbol

function demo5() {
  var mySymbol = Symbol();

  // 第一种写法
  var a = {};
  a[mySymbol] = 'Hello!';

  // 第二种写法
  var b = {
    [mySymbol]: 123
  };

  // 第三种写法
  var c = {};
  Object.defineProperty(c, mySymbol, {
    value: 'Hello!'
  });

  // 以上写法都得到同样结果
  console.log(a[mySymbol], b[mySymbol], c[mySymbol]); // "Hello!"
}

function demo6() {
  let s = Symbol();

  // ES5
  let obj1 = {
    [s]: function(arg) {
      console.log(arg);
    }
  };

  // ES6
  let obj2 = {
    [s](arg) {
      console.log(arg);
    }
  };

  obj1[s](123);
  obj2[s](123);
}

function demo7() {
  var a = {};
  var mySymbol = Symbol();

  a.mySymbol = 'Hello!';

  console.log(a[mySymbol]); // undefined
}

// 上面代码中，mySymbol属性的值为未定义，原因在于a.mySymbol这样的写法，并不是把一个Symbol值当作属性名，而是把mySymbol这个字符串当作属性名进行赋值，这是因为点结构中的属性名永远都是字符串。

// 需要注意的是，Symbol类型作为属性名时，该属性还是公开属性，不是私有属性。

// Symbol.for()，Symbol.keyFor()

function demo8() {
  console.log(Symbol.for("bar") === Symbol.for("bar")); // true

  console.log(Symbol("bar") === Symbol("bar")); // false
}

function demo9() {
  var s1 = Symbol.for("foo");
  console.log(Symbol.keyFor(s1)); // "foo"

  var s2 = Symbol("foo");
  console.log(Symbol.keyFor(s2)); // undefined
}

// 属性名的遍历

function demo10() {
  var obj = {};
  var a = Symbol('a');
  var b = Symbol.for('b');

  obj[a] = 'Hello';
  obj[b] = 'World';

  var objectSymbols = Object.getOwnPropertySymbols(obj);

  console.log(objectSymbols); // [Symbol(a), Symbol(b)]
}

function demo11() {
  var obj = {};

  var foo = Symbol("foo");

  Object.defineProperty(obj, foo, {
    value: "foobar",
  });

  for (var i in obj) {
    console.log(i); // 无输出
  }

  console.log(Object.getOwnPropertyNames(obj)); // []

  console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(foo)]
}

function demo12() {
  let obj = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
  };

  console.log(Reflect.ownKeys(obj)); // [Symbol(my_key), 'enum', 'nonEnum']
}

/**
 * 内置的Symbol值
 *
 * Symbol.hasInstance
 * 该值指向对象的内部方法@@hasInstance（两个@表示这是内部方法，外部无法直接调用，下同），该对象使用instanceof运算符时，会调用这个方法，判断该对象是否为某个构造函数的实例。
 *
 * Symbol.isConcatSpreadable
 * 该值指向对象的内部方法@@isConcatSpreadable，该对象使用Array.prototype.concat()时，会调用这个方法，返回一个布尔值，表示该对象是否可以扩展成数组。
 *
 * Symbol.isRegExp
 * 该值指向对象的内部方法@@isRegExp，该对象被用作正则表达式时，会调用这个方法，返回一个布尔值，表示该对象是否为一个正则对象。
 *
 * Symbol.iterator
 * 该值指向对象的内部方法@@iterator，该对象进行for...of循环时，会调用这个方法，返回该对象的默认遍历器，详细介绍参见《Iterator和for...of循环》一章。
 *
 * Symbol.toPrimitive
 * 该值指向对象的内部方法@@toPrimitive，该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
 *
 * Symbol.toStringTag
 * 该值指向对象的内部属性@@toStringTag，在该对象上调用Object.prototype.toString()时，会返回这个属性，它是一个字符串，表示该对象的字符串形式。
 *
 * Symbol.unscopables
 * 该值指向对象的内部属性@@unscopables，返回一个数组，成员为该对象使用with关键字时，会被with环境排除在的那些属性值。
 */

//demo1();
//demo2(); // undefined
//demo3();
//demo4();

//demo5();
//demo6();
//demo7();

//demo8();
//demo9();

//demo10();
//demo11();
//demo12(); // TODO: fail
