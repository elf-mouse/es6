'use strict';

console.info('Proxy');

// Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

// Proxy可以理解成在目标对象之前，架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。proxy这个词的原意是代理，用在这里表示由它来“代理”某些操作。

// ES6原生提供Proxy构造函数，用来生成Proxy实例。
function demo1() {
  var proxy = new Proxy({}, {
    get: function(target, property) {
      return 35;
    }
  });

  var time = proxy.time; // 35
  var name = proxy.name; // 35
  var title = proxy.title; // 35
  console.log(time, name, title);
}

// 作为构造函数，Proxy接受两个参数。第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有Proxy的介入，操作原来要访问的就是这个对象；第二个参数是一个设置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。比如，上面代码中，设置对象有一个get方法，用来拦截对目标对象属性的访问请求。get方法的两个参数分别是目标对象和所要访问的属性。可以看到，由于拦截函数总是返回35，所以访问任何属性都得到35。

// 注意，要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。

// Proxy实例也可以作为其他对象的原型对象。
function demo2() {
  var proxy = new Proxy({}, {
    get: function(target, property) {
      return 35;
    }
  });

  let obj = Object.create(proxy);

  console.log(obj.time); // 35
}

// 上面代码中，proxy对象是obj对象的原型，obj对象本身并没有time属性，所有根据原型链，会在proxy对象上读取该属性，导致被拦截。

// 对于没有设置拦截的操作，则直接落在目标对象上，按照原先的方式产生结果。

/**
 * Proxy支持的拦截操作一览。
 *
 * defineProperty(target, propKey, propDesc)：返回一个布尔值，拦截Object.defineProperty(proxy, propKey, propDesc）
 * deleteProperty(target, propKey) ：返回一个布尔值，拦截delete proxy[propKey]
 * enumerate(target)：返回一个遍历器，拦截for (x in proxy)
 * get(target, propKey, receiver)：返回类型不限，拦截对象属性的读取
 * getOwnPropertyDescriptor(target, propKey) ：返回属性的描述对象，拦截Object.getOwnPropertyDescriptor(proxy, propKey)
 * getPrototypeOf(target) ：返回一个对象，拦截Object.getPrototypeOf(proxy)
 * has(target, propKey)：返回一个布尔值，拦截propKey in proxy
 * isExtensible(target)：返回一个布尔值，拦截Object.isExtensible(proxy)
 * ownKeys(target)：返回一个数组，拦截Object.getOwnPropertyPropertyNames(proxy)、Object.getOwnPropertyPropertySymbols(proxy)、Object.keys(proxy)
 * preventExtensions(target)：返回一个布尔值，拦截Object.preventExtensions(proxy)
 * set(target, propKey, value, receiver)：返回一个布尔值，拦截对象属性的设置
 * setPrototypeOf(target, proto)：返回一个布尔值，拦截Object.setPrototypeOf(proxy, proto)
 *
 * 如果目标对象是函数，那么还有两种额外操作可以拦截。
 *
 * apply方法：拦截Proxy实例作为函数调用的操作，比如proxy(···)、proxy.call(···)、proxy.apply(···)。
 * construct方法：拦截Proxy实例作为构造函数调用的操作，比如new proxy(···)。
 */

/**
 * get
 */

function demo3() {
  var person = {
    name: "张三"
  };

  var proxy = new Proxy(person, {
    get: function(target, property) {
      if (property in target) {
        return target[property];
      } else {
        throw new ReferenceError("Property \"" + property + "\" does not exist.");
      }
    }
  });

  console.log(proxy.name); // "张三"
  //console.log(proxy.age); // 抛出一个错误
}

function demo4() {
  var pipe = (function() {
    var pipe;
    return function(value) {
      pipe = [];
      return new Proxy({}, {
        get: function(pipeObject, fnName) {
          if (fnName == "get") {
            return pipe.reduce(function(val, fn) {
              return fn(val);
            }, value);
          }
          pipe.push(window[fnName]);
          return pipeObject;
        }
      });
    };
  }());

  var double = function(n) {
    return n * 2;
  };
  var pow = function(n) {
    return n * n;
  };
  var reverseInt = function(n) {
    return n.toString().split('').reverse().join('') | 0;
  };

  console.log(pipe(3).double.pow.reverseInt.get); // 63
}

/**
 * set
 */

function demo5() {
  let validator = {
    set: function(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }

      // 对于age以外的属性，直接保存
      obj[prop] = value;
    }
  };

  let person = new Proxy({}, validator);

  person.age = 100;

  console.log(person.age); // 100
  person.age = 'young'; // 报错
  person.age = 300; // 报错
}

/**
 * apply
 */

function demo6() {
  var target = function() {
    return 'I am the target';
  };
  var handler = {
    apply: function(receiver, ...args) {
      return 'I am the proxy';
    }
  };

  var p = new Proxy(target, handler);

  console.log(p() === 'I am the proxy'); // true
}

/**
 * ownKeys
 */

function demo7() {
  let target = {};

  let handler = {
    ownKeys(target) {
      return ['hello', 'world'];
    }
  };

  let proxy = new Proxy(target, handler);

  console.log(Object.keys(proxy)); // [ 'hello', 'world' ]
}

/**
 * Proxy.revocable()
 */

function demo8() {
  let target = {};
  let handler = {};

  let {
    proxy, revoke
  } = Proxy.revocable(target, handler);

  proxy.foo = 123;
  console.log(proxy.foo); // 123

  revoke();
  console.log(proxy.foo); // TypeError: Revoked
}

//demo1();
//demo2();

//demo3();
//demo4();

//demo5(); // TODO: fail

//demo6();

//demo7(); // TODO: fail

//demo8();
