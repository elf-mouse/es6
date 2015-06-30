For example, `compose` is a higher-order function that takes two functions as arguments, and returns a function that represents the composition of the arguments:

```js
const compose = (a, b) => (c) => a(b(c));
```

For example, this very simple `maybe` function is a function decorator. It takes a function as an argument, and returns a version of that function that returns `undefined` or `null` (without any side-effects) if any of its arguments are `undefined` or `null`:

```js
const maybe = (fn) =>
  (...args) => {
    for (let arg of args) {
      if (arg == null) return arg;
    }
    return fn(...args);
  }

[1, null, 3, 4, null, 6, 7].map(maybe(x => x * x))
  //=> [1,null,9,16,null,36,49]
```

A similar decorator, `requireAll`, raises an exception if a function is invoked without at least as many arguments as declared parameters:

```js
const requireAll = (fn) =>
  function (...args) {
    if (args.length < fn.length)
      throw new Error('missing required arguments');
    else
      return fn(...args);
  }
```
