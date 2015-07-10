## Advanced mistake #5: promises fall through

下面的代码会打印出什么？

```js
Promise.resolve('foo').then(Promise.resolve('bar')).then(function (result) {
  console.log(result);
});
```

如果你认为打印出bar，那你就大错特错了。它实际上会打印出foo。

原因是当你给then()传递一个非函数（比如一个promise）值的时候，它实际上会解释为then(null)，这会导致之前的promise的结果丢失。你可以自己测试：

```js
Promise.resolve('foo').then(null).then(function (result) {
  console.log(result);
});
```

你想加多少的then(null)都可以，它始终会打印出foo。

这其实是一个循环，回到了上面我提到的promises vs promises工厂的问题上。简言之，你可以直接给then()方法传递一个promise，但是它并不会像你想的那样工作。then()默认接收一个函数，其实你更多的是想这样做：

```js
Promise.resolve('foo').then(function () {
  return Promise.resolve('bar');
}).then(function (result) {
  console.log(result);
});
```

这次会如我们预期的那样返回bar。

所以要提醒你自己：永远给then()传递一个函数参数。
