'use strict';

console.info('箭头函数');

function demo1() {
  var f = v => v;
  // 上面的箭头函数等同于：
  var f = function(v) {
    return v;
  };
}

// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
function demo2() {
  var f = () => 5;
  // 等同于
  var f = function() {
    return 5;
  };

  var sum = (num1, num2) => num1 + num2;
  // 等同于
  var sum = function(num1, num2) {
    return num1 + num2;
  };
}

// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
function demo3() {
  var sum = (num1, num2) => {
    return num1 + num2;
  };

  console.log(sum(1, 2));
}

// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
function demo4() {
  var getTempItem = id => ({
    id: id,
    name: "Temp"
  });

  console.log(getTempItem(123));
}

function demo5() {
  const isEven = n => n % 2 == 0;
  const square = n => n * n;

  console.log(isEven(2));
  console.log(square(3));
}

function demo6() {
  // 正常函数写法
  /*var result = [1, 2, 3].map(function(x) {
    return x * x;
  });*/

  // 箭头函数写法
  var result = [1, 2, 3].map(x => x * x);

  console.log(result);
}

function demo7() {
  var values = [2, 0, 1, 5];

  // 正常函数写法
  /*var result = values.sort(function(a, b) {
    return a - b;
  });*/

  // 箭头函数写法
  var result = values.sort((a, b) => a - b);

  console.log(result);
}

function demo8() {
  const numbers = (...nums) => nums;

  console.log(numbers(1, 2, 3, 4, 5)); // [1,2,3,4,5]

  const headAndTail = (head, ...tail) => [head, tail];

  console.log(headAndTail(1, 2, 3, 4, 5)); // [1,[2,3,4,5]]
}

/**
 * 箭头函数有几个使用注意点。
 *
 * 函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象。
 * 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
 * 不可以使用arguments对象，该对象在函数体内不存在。
 */

function demo9() {
  var handler = {

    id: "123456",

    init: function() {
      document.addEventListener("click",
        event => this.doSomething(event.type), false);
    },

    doSomething: function(type) {
      console.log("Handling " + type + " for " + this.id);
    }
  };
}

function demo10() {
  const pipeline = (...funcs) =>
    val => funcs.reduce((a, b) => b(a), val);

  const plus1 = a => a + 1;
  const mult2 = a => a * 2;

  const addThenMult = pipeline(plus1, mult2);
  console.log(addThenMult(5)); // 12
  // 上面的代码等同于下面的写法。
  console.log(mult2(plus1(5))); // 12
}

//demo3();
//demo4();
//demo5();
//demo6();
//demo7();
//demo8();

//demo10();
