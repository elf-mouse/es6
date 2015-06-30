Consider, for example `Person`:

```js
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

const thinker = new Person()
                  .setName('Albert', 'Einstein');

thinker.fullName()
  //=> 'Albert Einstein'

thinker.setName('Marie', 'Curie');

thinker.fullName()
  //=> 'Marie Curie'
```

The `setName` method is a function. Let’s see what happens if we try to decorate it with `requireAll`:

```js
Object.defineProperty(Person.prototype, 'setName', { value: requireAll(Person.prototype.setName) });

const thinker = new Person()
                  .setName('Albert', 'Einstein');
  //=> Attempted to assign to readonly property.
```

If we want to use `requireAll` with methods, we have to write it in such a way that it preserves `this` when it invokes the underlying function:

```js
const requireAll = (fn) =>
  function (...args) {
    if (args.length < fn.length)
      throw new Error('missing required arguments');
    else
      return fn.apply(this, args);
  }

const thinker = new Person()
                  .setName('Prince');
  //=> missing required arguments
```
