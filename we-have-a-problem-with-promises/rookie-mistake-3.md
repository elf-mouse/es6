## Rookie mistake #3: forgetting to add `.catch()`

许多开发者会很自豪的认为他们的promises代码永远都不会出错，于是他们忘记在代码中添加.catch()方法。不幸的是，这会导致任何被抛出的错误都会被吞噬掉，甚至在你的控制台你也不会发现有错误输出。这在debug代码的时候真的会非常痛苦。

为了避免这种讨厌的场景，我已经习惯了在我的promise链中简单的添加如下代码：

```js
somePromise().then(function () {
  return anotherPromise();
}).then(function () {
  return yetAnotherPromise();
}).catch(console.log.bind(console)); // <-- this is badass
```
