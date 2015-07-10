## Advanced mistake #2: `catch()` isn't exactly like `then(null, ...)`

上面说过`catch()`只是一个语法糖。下面两个代码片段是等价的：

```js
somePromise().catch(function (err) {
  // handle error
});

somePromise().then(null, function (err) {
  // handle error
});
```

然而，这并不意味着下面两个片段也是等价的：

```js
somePromise().then(function () {
  return someOtherPromise();
}).catch(function (err) {
  // handle error
});

somePromise().then(function () {
  return someOtherPromise();
}, function (err) {
  // handle error
});
```

如果你疑惑为什么它们不是等价的，思考第一个函数抛出一个错误会发生什么：

```js
somePromise().then(function () {
  throw new Error('oh noes');
}).catch(function (err) {
  // I caught your error! :)
});

somePromise().then(function () {
  throw new Error('oh noes');
}, function (err) {
  // I didn't catch your error! :(
});
```

这会证明，当你使用then(resolveHandler,rejectHandler)格式，如果resolveHandler自己抛出一个错误rejectHandler并不能捕获。

基于这个原因，我已经形成了自己的一个习惯，永远不要对then()使用第二个参数，并总是优先使用catch()。一个例外是当我写异步的Mocha测试的时候，我可能写一个测试来保证错误被抛出：

```js
it('should throw an error', function () {
  return doSomethingThatThrows().then(function () {
    throw new Error('I expected an error!');
  }, function (err) {
    should.exist(err);
  });
});
```
