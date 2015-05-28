/**
 * async函数
 */

// async函数与Promise、Generator函数一样，是用来取代回调函数、解决异步操作的一种方法。它本质上是Generator函数的语法糖。async函数并不属于ES6，而是被列入了ES7，但是traceur、Babel.js、regenerator等转码器已经支持这个功能，转码后立刻就能使用。

function demo1() {
  var fs = require('fs');

  var readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
      fs.readFile(fileName, function(error, data) {
        if (error) reject(error);
        resolve(data);
      });
    });
  };

  var gen = function*() {
    var f1 = yield readFile('/etc/fstab');
    var f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
  };
}

// 上面代码中，readFile函数是fs.readFile的Promise版本。

// 写成async函数，就是下面这样。

function demo2() {
  var asyncReadFile = async function() {
    var f1 = await readFile('/etc/fstab');
    var f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
  };
}

/**
 * 实现
 */

function demo3() {
  async function fn(args){
    // ...
  }

  // 等同于

  function fn(args){
    return spawn(function*() {
      // ...
    });
  }
}

function demo4() {
  function spawn(genF) {
    return new Promise(function(resolve, reject) {
      var gen = genF();
      function step(nextF) {
        try {
          var next = nextF();
        } catch(e) {
          return reject(e);
        }
        if(next.done) {
          return resolve(next.value);
        }
        Promise.resolve(next.value).then(function(v) {
          step(function() { return gen.next(v); });
        }, function(e) {
          step(function() { return gen.throw(e); });
        });
      }
      step(function() { return gen.next(undefined); });
    });
  }
}

/**
 * 用法
 */

function demo5() {
  async function getStockPriceByName(name) {
    var symbol = await getStockSymbol(name);
    var stockPrice = await getStockPrice(symbol);
    return stockPrice;
  }

  getStockPriceByName('goog').then(function (result){
    console.log(result);
  });
}

function demo6() {
  function getStockPriceByName(name) {
    return spawn(function*(name) {
      var symbol = yield getStockSymbol(name);
      var stockPrice = yield getStockPrice(symbol);
      return stockPrice;
    });
  }
}

function demo7() {
  function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }

  asyncPrint('hello world', 50);
}

/**
 * 注意点
 */

function demo8() {
  async function myFunction() {
    try {
      await somethingThatReturnsAPromise();
    } catch (err) {
      console.log(err);
    }
  }

  // 另一种写法

  async function myFunction() {
    await somethingThatReturnsAPromise().catch(function (err){
      console.log(err);
    };
  }
}

function demo9() {
  async function dbFuc(db) {
    let docs = [{}, {}, {}];

    // 报错
    docs.forEach(function (doc) {
      await db.post(doc);
    });
  }
}

function demo10() {
  async function dbFuc(db) {
    let docs = [{}, {}, {}];

    // 可能得到错误结果
    docs.forEach(async function (doc) {
      await db.post(doc);
    });
  }
}

function demo11() {
  async function dbFuc(db) {
    let docs = [{}, {}, {}];

    for (let doc of docs) {
      await db.post(doc);
    }
  }
}

function demo12() {
  async function dbFuc(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map((doc) => db.post(doc));

    let results = await Promise.all(promises);
    console.log(results);
  }

  // 或者使用下面的写法

  async function dbFuc(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map((doc) => db.post(doc));

    let results = [];
    for (let promise of promises) {
      results.push(await promise);
    }
    console.log(results);
  }
}

/**
 * 与Promise、Generator的比较
 */

function demo13() {
  function chainAnimationsPromise(elem, animations) {
    // 变量ret用来保存上一个动画的返回值
    var ret = null;

    // 新建一个空的Promise
    var p = Promise.resolve();

    // 使用then方法，添加所有动画
    for(var anim in animations) {
      p = p.then(function(val) {
        ret = val;
        return anim(elem);
      })
    }

    // 返回一个部署了错误捕捉机制的Promise
    return p.catch(function(e) {
      /* 忽略错误，继续执行 */
    }).then(function() {
      return ret;
    });
  }
}

function demo14() {
  function chainAnimationsGenerator(elem, animations) {
    return spawn(function*() {
      var ret = null;
      try {
        for(var anim of animations) {
          ret = yield anim(elem);
        }
      } catch(e) {
        /* 忽略错误，继续执行 */
      }
        return ret;
    });
  }
}

function demo15() {
  async function chainAnimationsAsync(elem, animations) {
    var ret = null;
    try {
      for(var anim of animations) {
        ret = await anim(elem);
      }
    } catch(e) {
      /* 忽略错误，继续执行 */
    }
    return ret;
  }
}
