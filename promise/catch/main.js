/**
 * Promise.prototype.catch()
 */

function demo1() {
  getJSON("/posts.json").then(function(posts) {
    // ...
  }).catch(function(error) {
    // 处理前一个回调函数运行时发生的错误
    console.log('发生错误！', error);
  });
}

function demo2() {
  var promise = new Promise(function(resolve, reject) {
    throw new Error('test');
  });
  promise.catch(function(error) {
    console.log(error);
  });
  // Error: test
}

function demo3() {
  var promise = new Promise(function(resolve, reject) {
    resolve("ok");
    throw new Error('test');
  });
  promise
    .then(function(value) {
      console.log(value);
    })
    .catch(function(error) {
      console.log(error);
    });
  // ok
}

function demo4() {
  getJSON("/post/1.json").then(function(post) {
    return getJSON(post.commentURL);
  }).then(function(comments) {
    // some code
  }).catch(function(error) {
    // 处理前面三个Promise产生的错误
  });
}

function demo5() {
  var someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      // 下面一行会报错，因为x没有声明
      resolve(x + 2);
    });
  };

  someAsyncThing().then(function() {
    console.log('everything is great');
  });
}

function demo6() {
  var promise = new Promise(function(resolve, reject) {
    resolve("ok");
    setTimeout(function() {
      throw new Error('test');
    }, 0);
  });
  promise.then(function(value) {
    console.log(value);
  });
  // ok
  // Uncaught Error: test
}

// Node.js有一个unhandledRejection事件，专门监听未捕获的reject错误。
/*process.on('unhandledRejection', function(err, p) {
  console.error(err.stack)
});*/

function demo7() {
  var someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      // 下面一行会报错，因为x没有声明
      resolve(x + 2);
    });
  };

  someAsyncThing().then(function() {
    return someOtherAsyncThing();
  }).catch(function(error) {
    console.log('oh no', error);
  }).then(function() {
    console.log('carry on');
  });
  // oh no [ReferenceError: x is not defined]
  // carry on
}

function demo8() {
  var someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      // 下面一行会报错，因为x没有声明
      resolve(x + 2);
    });
  };

  someAsyncThing().then(function() {
    return someOtherAsyncThing();
  }).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错，因为y没有声明
    y + 2;
  }).then(function() {
    console.log('carry on');
  });
  // oh no [ReferenceError: x is not defined]
}

function demo9() {
  someAsyncThing().then(function() {
    return someOtherAsyncThing();
  }).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错，因为y没有声明
    y + 2;
  }).catch(function(error) {
    console.log('carry on', error);
  });
  // oh no [ReferenceError: x is not defined]
  // carry on [ReferenceError: y is not defined]
}
