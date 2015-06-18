Here’s `Coloured` again, recast in functional form:

```js
const Coloured = (target) =>
  Object.assign(target, {
    setColourRGB ({r, g, b}) {
      this.colourCode = {r, g, b};
      return this;
    },
    getColourRGB () {
      return this.colourCode;
    }
  });

Coloured(Todo.prototype);
```

We can make ourselves a factory function that also names the pattern:

```js
const FunctionalMixin = (behaviour) =>
  target => Object.assign(target, behaviour);
```

This allows us to define functional mixins neatly:

```js
const Coloured = FunctionalMixin({
  setColourRGB ({r, g, b}) {
    this.colourCode = {r, g, b};
    return this;
  },
  getColourRGB () {
    return this.colourCode;
  }
});
```
