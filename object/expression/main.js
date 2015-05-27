'use strict';

console.info('属性的简洁表示法');

function demo1() {
  function f1(x, y) {
    return {
      x, y
    };
  }

  // 等同于

  function f2(x, y) {
    return {
      x: x,
      y: y
    };
  }

  console.log(f1(1, 2));
  console.log(f2(3, 4));
}

function demo2() {
  var o1 = {
    method() {
      return "Hello!";
    }
  };

  // 等同于

  var o2 = {
    method: function() {
      return "Hello!";
    }
  };

  console.log(o1.method());
  console.log(o2.method());
}

function demo3() {
  var birth = '2015';

  var Person = {

    name: '张三',

    //等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() {
      console.log('我的名字是', this.name);
    }

  };

  console.log(Person);
}

function demo4() {
  function getPoint() {
    var x = 1;
    var y = 10;

    return {
      x, y
    };
  }

  var point = getPoint(); // {x:1, y:10}
  console.log(point);
}

//demo1();
//demo2();
//demo3();
//demo4();
