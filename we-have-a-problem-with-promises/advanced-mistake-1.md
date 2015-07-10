## Advanced mistake #1: not knowing about `Promise.resolve()`

```js
new Promise(function (resolve, reject) {
  resolve(someSynchronousValue);
}).then(/* ... */);
```

你可以使用Promise.resolve()来更简洁的表达：

```js
Promise.resolve(someSynchronousValue).then(/* ... */);
```

而且这在捕捉任意的同步错误上会难以置信的有用。它是如此有用，以致于我习惯于几乎将我所有的基于promise返回的API方法以下面这样开始：

```js
function somePromiseAPI() {
  return Promise.resolve().then(function () {
    doSomethingThatMayThrow();
    return 'foo';
  }).then(/* ... */);
}
```

记住：对于被彻底吞噬的错误以致于不能debug的任意代码，做同步的错误抛出都是一个很好的选择。但是你把每个地方都封装为Promise.resolve()，你要确保后面你都会执行caotch()。

类似的，有一个Promise.reject()方法可以返回一个立即被拒绝的promise：

```js
Promise.reject(new Error('some awful error'));
```
