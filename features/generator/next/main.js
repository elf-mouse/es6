console.info('next方法的参数');

console.log('yield语句本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。');

function demo1() {
  function* f() {
    for (var i = 0; true; i++) {
      var reset = yield i;
      if (reset) {
        i = -1;
      }
    }
  }

  var g = f();

  var a = g.next(); // { value: 0, done: false }
  var b = g.next(); // { value: 1, done: false }
  var c = g.next(true); // { value: 0, done: false }

  console.log(a, b, c);
}

function demo2() {
  function* foo(x) {
    var y = 2 * (yield(x + 1));
    var z = yield(y / 3);
    return (x + y + z);
  }

  var a = foo(5);

  var x = a.next(); // Object{value:6, done:false}
  var y = a.next(); // Object{value:NaN, done:false}
  var z = a.next(); // Object{value:NaN, done:false}

  console.log(x, y, z);
}

function demo3() {
  function* foo(x) {
    var y = 2 * (yield(x + 1));
    var z = yield(y / 3);
    return (x + y + z);
  }

  var it = foo(5);

  var x = it.next();
    // { value:6, done:false }
  var y = it.next(12);
    // { value:8, done:false }
  var z = it.next(13);
    // { value:42, done:true }

  console.log(x, y, z);
}

//demo1();
//demo2();
//demo3();
