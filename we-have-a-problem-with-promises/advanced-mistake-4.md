## Advanced mistake #4: okay, what if I want the result of two promises?

通常，一个promise是依赖于另一个promise的，但是这里我们想要两个promise的输出。例如：

```js
getUserByName('nolan').then(function (user) {
  return getUserAccountById(user.id);
}).then(function (userAccount) {
  // dangit, I need the "user" object too!
});
```

如果想成为优秀的JavaScript开发者并避免世界末日的金字塔，我们可能在一个更高的的作用域中存储一个user对象变量：

```js
var user;
getUserByName('nolan').then(function (result) {
  user = result;
  return getUserAccountById(user.id);
}).then(function (userAccount) {
  // okay, I have both the "user" and the "userAccount"
});
```

这也能达到目的，但是我个人觉得这有点拼凑的感觉。我推荐的做法：放手你的偏见，并拥抱金字塔：

```js
getUserByName('nolan').then(function (user) {
  return getUserAccountById(user.id).then(function (userAccount) {
    // okay, I have both the "user" and the "userAccount"
  });
});
```

至少，临时先这么干。如果缩进成为一个问题，你可以做JavaScript开发者一直以来都在做的事情，提取函数为一个命名函数：

```js
function onGetUserAndUserAccount(user, userAccount) {
  return doSomething(user, userAccount);
}

function onGetUser(user) {
  return getUserAccountById(user.id).then(function (userAccount) {
    return onGetUserAndUserAccount(user, userAccount);
  });
}

getUserByName('nolan')
  .then(onGetUser)
  .then(function () {
  // at this point, doSomething() is done, and we are back to indentation 0
});
```

随着你的promise代码变得更加复杂，你可能发现你自己在抽取越来越多的函数为命名函数。我发现这样会形成非常美观的代码，看起来会像是这样：

```js
putYourRightFootIn()
  .then(putYourRightFootOut)
  .then(putYourRightFootIn)  
  .then(shakeItAllAbout);
```
