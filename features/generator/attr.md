## 作为对象属性的Generator函数

```js
let obj = {
  * myGeneratorMethod() {
    ···
  }
};
```

它的完整形式如下，与上面的写法是等价的。

```js
let obj = {
  myGeneratorMethod: function* () {
    // ···
  }
};
```
