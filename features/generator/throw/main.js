console.info('throw方法');

function demo1() {
  var g = function*() {
    while (true) {
      try {
        yield;
      } catch (e) {
        if (e != 'a') throw e;
        console.log('内部捕获', e);
      }
    }
  };

  var i = g();
  i.next();

  try {
    i.throw('a');
    i.throw('b');
  } catch (e) {
    console.log('外部捕获', e);
  }
  // 内部捕获 a
  // 外部捕获 b
}

function demo2() {
  var g = function*() {
    while (true) {
      try {
        yield;
      } catch (e) {
        if (e != 'a') throw e;
        console.log('内部捕获', e);
      }
    }
  };

  var i = g();
  i.next();

  try {
    throw new Error('a');
    throw new Error('b');
  } catch (e) {
    console.log('外部捕获', e);
  }
  // 外部捕获 [Error: a]
}

function demo3() {
  var g = function*() {
    while (true) {
      yield;
      console.log('内部捕获', e);
    }
  };

  var i = g();
  i.next();

  try {
    i.throw('a');
    i.throw('b');
  } catch (e) {
    console.log('外部捕获', e);
  }
  // 外部捕获 a
}

function demo4() {
  var gen = function* gen() {
    yield console.log('hello');
    yield console.log('world');
  }

  var g = gen();
  g.next();

  try {
    g.throw();
  } catch (e) {
    g.next();
  }
  // hello
}

function demo5() {
  var gen = function* gen() {
    yield console.log('hello');
    yield console.log('world');
  }

  var g = gen();
  g.next();

  try {
    throw new Error();
  } catch (e) {
    g.next();
  }
  // hello
  // world
}

function demo6() {
  foo('a', function(a) {
    if (a.error) {
      throw new Error(a.error);
    }

    foo('b', function(b) {
      if (b.error) {
        throw new Error(b.error);
      }

      foo('c', function(c) {
        if (c.error) {
          throw new Error(c.error);
        }

        console.log(a, b, c);
      });
    });
  });
}

function demo7() {
  function* g() {
    try {
      var a = yield foo('a');
      var b = yield foo('b');
      var c = yield foo('c');
    } catch (e) {
      console.log(e);
    }

    console.log(a, b, c);
  }
}

function demo8() {
  function* foo() {
    var x = yield 3;
    var y = x.toUpperCase();
    yield y;
  }

  var it = foo();

  it.next(); // { value:3, done:false }

  try {
    it.next(42);
  } catch (err) {
    console.log(err);
  }
}

function demo9() {
  function* g() {
    yield 1;
    console.log('throwing an exception');
    throw new Error('generator broke!');
    yield 2;
    yield 3;
  }

  function log(generator) {
    var v;
    console.log('starting generator');
    try {
      v = generator.next();
      console.log('第一次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    try {
      v = generator.next();
      console.log('第二次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    try {
      v = generator.next();
      console.log('第三次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    console.log('caller done');
  }

  log(g());
  // starting generator
  // 第一次运行next方法 { value: 1, done: false }
  // throwing an exception
  // 捕捉错误 { value: 1, done: false }
  // 第三次运行next方法 { value: undefined, done: true }
  // caller done
}

//demo1();
//demo2();
//demo3();
//demo4();
//demo5();

//demo6();
//demo7();
//demo8();

//demo9();
