Handling `this` properly is not the only way in which ordinary function decorators differ from method decorators. Some decorators are stateful, like `once`. Here’s a version that correctly sets `this`:

```js
const once = (fn) => {
  let hasRun = false;

  return function (...args) {
    if (hasRun) return;
    hasRun = true;
    return fn.apply(this, args);
  }
}
```

Imagining for a moment that we wish to only allow a person to have their name set once, we might write:

```js
const once = (fn) => {
  let hasRun = false;

  return function (...args) {
    if (hasRun) return;
    hasRun = true;
    return fn.apply(this, args);
  }
}

class Person {
  setName (first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  }
  fullName () {
    return this.firstName + " " + this.lastName;
  }
};

Object.defineProperty(Person.prototype, 'setName', { value: once(Person.prototype.setName) });

const logician = new Person()
                   .setName('Raymond', 'Smullyan')
                   .setName('Haskell', 'Curry');

logician.fullName()
  //=> Raymond Smullyan
```

As we expect, only the first call to `.setName` has any effect, and it works on a method. But there is a subtle bug that could easily evade naïve attempts to write unit tests:

```js
const logician = new Person()
                   .setName('Raymond', 'Smullyan');

const musician = new Person()
                   .setName('Miles', 'Davis');

logician.fullName()
  //=> Raymond Smullyan

musician.fullName()
  //=> Raymond Smullyan
```
