In earlier versions of ECMAScript, instanceof is an operator that checks to see whether the prototype of an instance matches the prototype of a constructor function. It works just fine with “classes,” but it does not work “out of the box” with mixins:

```js
urgent instanceof Todo
  //=> true

urgent instanceof Coloured
  //=> false
```

We can test this quickly:

```js
Coloured[Symbol.instanceOf] = (instance) => true
urgent instanceof Coloured
  //=> true
{} instanceof Coloured
  //=> true
```

Of course, that is not semantically correct. But using this technique, we can write:

```js
function FunctionalMixin (instanceBehaviour, mixinBehaviour = {}) {
  const typeTag = Symbol("isA");

  function mixin (target) {
    for (let property of Object.getOwnPropertyNames(instanceBehaviour))
      Object.defineProperty(target, property, { value: instanceBehaviour[property] });
    target[typeTag] = true;
    return target;
  }
  for (let property of Object.getOwnPropertyNames(mixinBehaviour))
    Object.defineProperty(mixin, property, {
      value: mixinBehaviour[property],
      enumerable: mixinBehaviour.propertyIsEnumerable(property)
    });
    mixin[Symbol.instanceOf] = (instance) => !!instance[typeTag];
  return mixin;
}

urgent instanceof Coloured
  //=> true
{} instanceof Coloured
  //=> false
```
