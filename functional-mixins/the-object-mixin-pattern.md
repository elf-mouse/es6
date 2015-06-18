Here’s a class of todo items:

```js
class Todo {
  constructor (name) {
    this.name = name || 'Untitled';
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
```

And a “mixin” that is responsible for colour-coding:

```js
const Coloured = {
  setColourRGB ({r, g, b}) {
    this.colourCode = {r, g, b};
    return this;
  },
  getColourRGB () {
    return this.colourCode;
  }
};
```

Mixing colour coding into our Todo prototype is straightforward:

```js
Object.assign(Todo.prototype, Coloured);

new Todo('test')
  .setColourRGB({r: 1, g: 2, b: 3})
  //=> {"name":"test","done":false,"colourCode":{"r":1,"g":2,"b":3}}
```

We can “upgrade” it to have a _private property_ if we wish:

```js
const colourCode = Symbol("colourCode");

const Coloured = {
  setColourRGB ({r, g, b}) {
    this[colourCode]= {r, g, b};
    return this;
  },
  getColourRGB () {
    return this[colourCode];
  }
};
```
