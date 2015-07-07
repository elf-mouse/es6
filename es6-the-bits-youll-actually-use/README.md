## Destructuring

### ES6

```js
function initialize({controls = {}, models = {}, reducers = {}, actors = []}) {
    // ...
}
```

### ES5

```js
function initialize(options) {
    var controls = options.controls || {};
    var models = options.models || {};
    var reducers = options.reducers || {};
    var actors = options.actors || {};
}
```

## for .. of loops

Say you’ve got an Array of pairs as you’d get from the [Object.entries](https://esdiscuss.org/topic/object-entries-object-values) method proposed for ES7, and you want to loop through them. `for .. of` with destructuring makes this (almost) fun:

### ES6

```js
for (let [name, builder] of Object.entries(models)) {
    // do something
}
```

### ES5

```js
var entries = Object.entries(models);
for (var i = 0; i != entries.length; i++) {
    var entry = entries[i];
    var name = entry[0];
    var builder = entry[1];
}
```

## Map

### ES6

```js
this.propFns = this.propFns || new Map

for (const event of events) {
  const name = 'on' + capitalize(event)
  if (!this.propFns.has(name)) {
    this.propFns.set(name, [])
  }
  this.propFns.get(name).push(fn)
}

// later...

for (let [name, fns] of this.propFns || []) {
  // ...
}
```

### ES5

```js
this.propFns = this.propFns || {}

events.forEach(function(event) {
    const name = 'on' + capitalize(event)
    if (!this.propFns[name]) {
        this.propFns[name] = []
    }
    this.propFns[name].push(fn)
})

// later...

for (var name in this.propFns) {
    if (this.propFns.hasOwnProperty(name)) {
        var fns = this.propFns[name];
        // ..
    }
}
```

## let / const

### ES5

```js
// Find the index of the first ripple which has started but isn't yet ending
for (var i = 0; i != ripples.length; i++) {
    if (ripples[i].started && !ripples[i].ending) {
        break;
    }
}

// Do something unrelated which we probably added at a later date
for (var j = 0; j != arr.length; j++) {
    for (var i = 0; i != arr[j].length; i++) {
        // do something...
    }
}

// Oops.
var endingRipple = ripples[i];
```

### ES6

```js
const lyrics = 'badger';
lyrics = 'mushroom';
// ERROR!

const lyrics = ['badger', 'badger', 'badger', 'badger', 'badger', 'badger', 'badger', 'badger', 'badger', 'badger', 'badger', 'badger'];
lyrics.push('mushroom').
// OK
```

## Array methods

```js
const i = ripples.findIndex(function(r) { return r.started && !r.ending; });

const endingRipple = ripples.find(function(r) { return r.started && !r.ending; });
```

Other new array methods include:

* `Array.prototype.fill`
* `Array.prototype.copyWithin`

## Arrow Functions

```js
const endingRipple = ripples.find(r => r.started && !r.ending);
```

### ES6

```js
const targetFactory = ({options, children}) => {
  let zIndex = 1
  if (this.props.disabled) zIndex = 0
  else if (this.state.touched) zIndex = 2

  const inner = this.props.targetFactory(
    Object.assign(options, {className: this.c('container')}),
    React.createElement(Paper, {zDepth}, children)
  )

  return React.createElement(Target, {on: this.setTouched, off: this.unsetTouched}, inner)
}
```

## Template Strings

Honestly, I just use the interpolation. That’s pretty boring, so let’s throw ES7’s proposed [fetch](https://github.com/github/fetch) method into the example to spice it up a little:

```js
const promise = fetch('/api/v1/contacts', {
    method: 'post',
    headers: {
        'Authorization': `Token token=${identity.get('accessToken')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});
```

## Promise

## … (spread operator and rest parameters)

```js
c(...args) {
  return (
    classNames(...args)
      .split(/\s+/)
      .filter(name => name !== "")
      .map(name => `{namespace}-${this.constructor.name}-${name}`)
      .join(' ')
  );
}
```

## Classes

## import & export
