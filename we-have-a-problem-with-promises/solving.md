## Solving the puzzle

### Puzzle #1

```js
doSomething().then(function () {
  return doSomethingElse();
}).then(finalHandler);
```

Answer:

```
doSomething
|-----------------|
                  doSomethingElse(undefined)
                  |------------------|
                                     finalHandler(resultOfDoSomethingElse)
                                     |------------------|
```

### Puzzle #2

```js
doSomething().then(function () {
  doSomethingElse();
}).then(finalHandler);
```

Answer:

```
doSomething
|-----------------|
                  doSomethingElse(undefined)
                  |------------------|
                  finalHandler(undefined)
                  |------------------|
```

### Puzzle #3

```js
doSomething().then(doSomethingElse())
  .then(finalHandler);
```

Answer:

```
doSomething
|-----------------|
doSomethingElse(undefined)
|---------------------------------|
                  finalHandler(resultOfDoSomething)
                  |------------------|
```

### Puzzle #4

```js
doSomething().then(doSomethingElse)
  .then(finalHandler);
```

Answer:

```
doSomething
|-----------------|
                  doSomethingElse(resultOfDoSomething)
                  |------------------|
                                     finalHandler(resultOfDoSomethingElse)
                                     |------------------|
```

说明：对于这些例子，我假定doSomething()和doSomethingElse()都返回promises，并且这些promises代表在JavaScript事件轮训（内嵌数据库，网络，setTimeout）之外的处理的一些东西,这就是为什么在某些时候是以并发的形式展现。

promises更多的使用说明，请参考我的[promise主要用法背忘单](https://gist.github.com/nolanlawson/6ce81186421d2fa109a4)。

```js
// Promise.all is good for executing many promises at once
Promise.all([
  promise1,
  promise2
]);
 
// Promise.resolve is good for wrapping synchronous code
Promise.resolve().then(function () {
  if (somethingIsNotRight()) {
    throw new Error("I will be rejected asynchronously!");
  } else {
    return "This string will be resolved asynchronously!";
  }
});
 
// execute some promises one after the other.
// this takes an array of promise factories, i.e.
// an array of functions that RETURN a promise
// (not an array of promises themselves; those would execute immediately)
function sequentialize(promiseFactories) {
  var chain = Promise.resolve();
  promiseFactories.forEach(function (promiseFactory) {
    chain = chain.then(promiseFactory);
  });
  return chain;
}
 
// Promise.race is good for setting a timeout:
Promise.race([
  new Promise(function (resolve, reject) {
    setTimeout(reject, 10000); 
// timeout after 10 secs
  }),
  doSomethingThatMayTakeAwhile()
]);
 
// Promise finally util similar to Q.finally
// e.g. promise.then(...).catch().then(...).finally(...)
function finally (promise, cb) {
  return promise.then(function (res) {
    var promise2 = cb();
    if (typeof promise2.then === 'function') {
      return promise2.then(function () {
        return res;
      });
    }
    return res;
  }, function (reason) {
    var promise2 = cb();
    if (typeof promise2.then === 'function') {
      return promise2.then(function () {
        throw reason;
      });
    }
    throw reason;
  });
};
```
