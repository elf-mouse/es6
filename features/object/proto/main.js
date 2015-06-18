'use strict';

console.info('proto属性，Object.setPrototypeOf()，Object.getPrototypeOf()');

function demo1() {
  var someOtherObj = {};

  // es5的写法
  var obj1 = Object.create(someOtherObj);
  obj1.method = function() {
    //...
  };

  // es6的写法
  var obj2 = {
    __proto__: someOtherObj,
    method: function() {
      //...
    }
  };

  console.log(obj1);
  console.log(obj2);
}

function demo2() {
  /**
   * 格式
   * Object.setPrototypeOf(object, prototype);
   */
  var o = Object.setPrototypeOf({}, null);

  // 该方法等同于下面的函数
  function _setPrototypeOf(obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }

  console.log(o);
}

function demo3() {
  var obj = {};

  var prototypes = Object.getPrototypeOf(obj);
  console.log(prototypes);
}

//demo1();
//demo2();
//demo3();
