To handle methods, we have introduced “accidental complexity” to handle `this` and to handle state. Worse, our implementation of `once` for methods won’t work properly with ordinary functions in “strict” mode:

```js
"use strict"

const hello = once(() => 'hello!');

hello()
  //=> undefined is not an object!
```

Correcting our decorator to deal with `undefined` is straightforward:

```js
const once = (fn) => {
  let invocations = new WeakSet(),
      undefinedContext = Symbol('undefined-context');

  return function (...args) {
    const context = this === undefined
                    ? undefinedContext
                    : this;
    if (invocations.has(context)) return;
    invocations.add(context);
    return fn.apply(this, args);
  }
}
```
