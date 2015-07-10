## Rookie mistake #4: using "deferred"

首先，大多数的promise库提供了一种方式从第三方库中导入promises。例如，Angular的$q模块允许你使用$q.when()来封装非$q的模块。因此Angular的用户可以以这种方式来封装PouchDB的promises：

```js
$q.when(db.put(doc)).then(/* ... */); // <-- this is all the code you need
```

另一个策略是使用[揭示构造函数](https://blog.domenic.me/the-revealing-constructor-pattern/)，这种策略对于封装非promise的API非常有用。例如，封装基于回调的API比如Node的fs.readFile()，你可以简单的这样做：

```js
new Promise(function (resolve, reject) {
  fs.readFile('myfile.txt', function (err, file) {
    if (err) {
      return reject(err);
    }
    resolve(file);
  });
}).then(/* ... */)
```

> For more about why this is an anti-pattern, check out [the Bluebird wiki page on promise anti-patterns](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern).
