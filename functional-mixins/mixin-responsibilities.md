For example, sometimes a particular concept is associated with some well-known constants. When using a class, can be handy to namespace such values in the class itself:

```js
class Todo {
  constructor (name) {
    this.name = name || Todo.DEFAULT_NAME;
    this.done = false;
  }
  do () {
    this.done = true;
    return this;
  }
  undo () {
    this.done = false;
    return this;
  }
}

Todo.DEFAULT_NAME = 'Untitled';
// If we are sticklers for read-only constants, we could write:
// Object.defineProperty(Todo, 'DEFAULT_NAME', {value: 'Untitled'});
```

Again, we can solve this problem by building a functional mixin. Our FunctionalMixin factory function will accept an optional dictionary of read-only mixin properties:

```js
function FunctionalMixin (instanceBehaviour, mixinBehaviour = {}) {
  function mixin (target) {
    for (let property of Object.getOwnPropertyNames(instanceBehaviour))
      Object.defineProperty(target, property, { value: instanceBehaviour[property] })
    return target;
  }
  for (let property of Object.getOwnPropertyNames(mixinBehaviour))
    Object.defineProperty(mixin, property, {
      value: mixinBehaviour[property],
      enumerable: mixinBehaviour.propertyIsEnumerable(property)
    });
  return mixin;
}
```

And now we can write:

```js
const Coloured = FunctionalMixin({
  setColourRGB ({r, g, b}) {
    this.colourCode = {r, g, b};
    return this;
  },
  getColourRGB () {
    return this.colourCode;
  }
}, {
  RED:   { r: 255, g: 0,   b: 0   },
  GREEN: { r: 0,   g: 255, b: 0   },
  BLUE:  { r: 0,   g: 0,   b: 255 },
});

Coloured(Todo.prototype)

const urgent = new Todo("finish blog post");
urgent.setColourRGB(Coloured.RED);

urgent.getColourRGB()
  //=> {"r":255,"g":0,"b":0}
```
