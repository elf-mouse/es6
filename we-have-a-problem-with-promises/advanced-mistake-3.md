## Advanced mistake #3: promises vs promise factories

```js
function executeSequentially(promises) {
  var result = Promise.resolve();
  promises.forEach(function (promise) {
    result = result.then(promise);
  });
  return result;
}
```

之所以会这样是因为其实你并不想操作一个promise的数组。每一个promise规范都指定，一旦一个promise被创建，它就开始执行。那么，其实你真正想要的是一个promise工厂数组：

```js
function executeSequentially(promiseFactories) {
  var result = Promise.resolve();
  promiseFactories.forEach(function (promiseFactory) {
    result = result.then(promiseFactory);
  });
  return result;
}
```

我知道你在想什么：“这个Java程序员到底是谁，为什么他在谈论工厂？“不过一个promise工厂是很简单的，它只是一个返回一个promise的函数：

```js
function myPromiseFactory() {
  return somethingThatCreatesAPromise();
}
```
