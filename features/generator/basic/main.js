console.info('简介');

function demo1() {
  function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }

  var hw = helloWorldGenerator();

  var a = hw.next();
  // { value: 'hello', done: false }

  var b = hw.next();
  // { value: 'world', done: false }

  var c = hw.next();
  // { value: 'ending', done: true }

  var d = hw.next();
  // { value: undefined, done: true }

  console.log(a, b, c, d);
}

function demo2() {
  function* gen() {
    // some code
  }

  var g = gen();

  console.log(g[Symbol.iterator]() === g);
  // true
}

function demo3() {
  function* f() {
    console.log('执行了！')
  }

  var generator = f();

  setTimeout(function() {
    generator.next()
  }, 2000);
}

// yield语句不能用在普通函数中，否则会报错。
function demo4() {
  /*(function() {
    yield 1;
  })();*/
  // SyntaxError: Unexpected number
}

// 语法错误，因为forEach方法的参数是一个普通函数，但是在里面使用了yield语句。
function demo5() {
  var arr = [1, [[2, 3], 4], [5, 6]];

  var flat = function*(a) {
    a.forEach(function(item) {
      if (typeof item !== 'number') {
        //yield* flat(item);
      } else {
        //yield item;
      }
    });
  };

  for (var f of flat(arr)) {
    console.log(f);
  }
}

function demo6() {
  var arr = [1, [[2, 3], 4], [5, 6]];

  var flat = function* (a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
      var item = a[i];
      if (typeof item !== 'number') {
        yield* flat(item);
      } else {
        yield item;
      }
    }
  };

  for (var f of flat(arr)) {
    console.log(f);
  }
  // 1, 2, 3, 4, 5, 6
}

//demo1();
//demo2();
//demo3();

//demo6();
