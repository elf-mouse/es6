## Rookie mistake #2: WTF, how do I use `forEach()` with promises?

这是大多数人开始理解Promises要突破的地方。尽管他们能熟悉forEach()循环（或者for循环，或者while循环），他们并不知道如何对Promises使用这些循环。此时，他们写的代码会像是这样：

```js
// I want to remove() all docs
db.allDocs({include_docs: true}).then(function (result) {
  result.rows.forEach(function (row) {
    db.remove(row.doc);  
  });
}).then(function () {
  // I naively believe all docs have been removed() now!
});
```

这所有的症结其实在于forEach()/for/while并不是你要寻找的构想。你需要的是Promise.all():

```js
db.allDocs({include_docs: true}).then(function (result) {
  return Promise.all(result.rows.map(function (row) {
    return db.remove(row.doc);
  }));
}).then(function (arrayOfResults) {
  // All docs have really been removed() now!
});
```
