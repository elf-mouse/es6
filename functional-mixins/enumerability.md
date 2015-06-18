```js
Coloured(Todo.prototype)

const urgent = new Todo("finish blog post");
urgent.setColourRGB({r: 256, g: 0, b: 0});

for (let property in urgent) console.log(property);
  // =>
    name
    done
    colourCode
    setColourRGB
    getColourRGB
```

One benefit of functional mixins is that we can solve this problem and transparently make mixins behave like class:

```js
const FunctionalMixin = (behaviour) =>
  function (target) {
    for (let property of Object.getOwnPropertyNames(behaviour))
      Object.defineProperty(target, property, { value: behaviour[property] })
    return target;
  }
```
