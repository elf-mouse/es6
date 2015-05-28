console.info('函数参数的默认值');

function es5() {
  function log(x, y) {
    y = y || 'World';
    console.log(x, y);
  }

  log('Hello'); // Hello World
  log('Hello', 'China'); // Hello China
  log('Hello', ''); // Hello World

  // 上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。

  // 为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。这有两种写法。

  // 写法一
  if (typeof y === 'undefined') {
    y = 'Hello';
  }

  // 写法二
  if (arguments.length === 1) {
    y = 'World';
  }
}

function es6() {
  function log(x, y = 'World') {
    console.log(x, y);
  }

  log('Hello'); // Hello World
  log('Hello', 'China'); // Hello China
  log('Hello', ''); // Hello
}

function demo1() {
  function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  var p = new Point();
  console.log(p); // p = { x:0, y:0 }
}

function demo2() {
  // 为对象属性设置默认值
  // 传入函数fetch的第二个参数是一个对象，调用的时候可以为它的三个属性设置默认值。
  /*fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(method);
  }*/

  // 双重默认值
  // 调用函数fetch时，如果不含第二个参数，则默认值为一个空对象；如果包含第二个参数，则它的method属性默认值为GET。
  /*fetch(url, { method = 'GET' } = {}) {
    console.log(method);
  }*/
}

// 定义了默认值的参数，必须是函数的尾部参数，其后不能再有其他无默认值的参数。这是因为有了默认值以后，该参数可以省略，只有位于尾部，才可能判断出到底省略了哪些参数。
function demo3() {
  // 以下两种写法都是错的

  function f(x=5, y) {
  }

  function f(x, y=5, z) {
  }
}

// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
function demo4() {
  function foo(x=5, y=6){
    console.log(x,y);
  }

  foo(undefined, null); // 5 null
}

// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
function demo5() {
  var a = (function(a){}).length; // 1
  var b = (function(a=5){}).length; // 0
  var c = (function(a, b, c=5){}).length; // 2

  console.log(a, b, c);
}

function demo6() {
  function throwIfMissing() {
    throw new Error('Missing parameter');
  }

  function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
  }

  foo(); // Error: Missing parameter
}

function demo7() {
  var x = 1;

  function foo(x, y = x) {
    console.log(y);
  }

  foo(2); // 2
}

function demo8() {
  /*function foo(x = 5) {
    let x = 1; // error
    const x = 2; // error
  }*/
}

function demo9() {
  function foo({x, y = 5}) {
    console.log(x, y);
  }

  foo({}); // undefined, 5
  foo({x: 1}); // 1, 5
  foo({x: 1, y: 2}); // 1, 2
}

//es5();
//es6();

//demo1();

//demo4();
//demo5();
//demo6();
//demo7();
//demo8();
//demo9(); // TODO: fail
