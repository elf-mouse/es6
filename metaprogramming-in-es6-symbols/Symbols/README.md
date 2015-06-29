### Metaprogramming

```
class BoringClass
end
class CoolClass
  def ==(other_object)
   other_object.is_a? CoolClass
  end
end
BoringClass.new == BoringClass.new #=> false
CoolClass.new == CoolClass.new #=> true!
```

### Symbols - Reflection within Implementation

```
Symbol(); // symbol
console.log(Symbol()); // prints "Symbol()" to the console
assert(typeof Symbol() === 'symbol')
new Symbol(); // TypeError: Symbol is not a constructor
```

##### Symbols have debuggability built in

```
console.log(Symbol('foo')); // prints "Symbol(foo)" to the console.
assert(Symbol('foo').toString() === 'Symbol(foo)');
```

##### Symbols can be used as Object keys

```
var myObj = {};
var fooSym = Symbol('foo');
var otherSym = Symbol('bar');
myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';
assert(myObj.foo === 'bar');
assert(myObj[fooSym] === 'baz');
assert(myObj[otherSym] === 'bing');
```

```
var fooSym = Symbol('foo');
var myObj = {};
myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
Object.keys(myObj); // -> [ 'foo' ]
Object.getOwnPropertyNames(myObj); // -> [ 'foo' ]
Object.getOwnPropertySymbols(myObj); // -> [ Symbol(foo) ]
assert(Object.getOwnPropertySymbols(myObj)[0] === fooSym); 
```

##### Symbols are completely unique...

```
assert.notEqual(Symbol(), Symbol());
assert.notEqual(Symbol('foo'), Symbol('foo'));
assert.notEqual(Symbol('foo'), Symbol('bar'));

var foo1 = Symbol('foo');
var foo2 = Symbol('foo');
var object = {
  [foo1]: 1,
  [foo2]: 2
};
assert(object[foo1] === 1);
assert(object[foo2] === 2);
```

##### ...except when they're not.

```
assert.notEqual(Symbol('foo'), Symbol('foo'));
assert.equal(Symbol.for('foo'), Symbol.for('foo'));

// Not unique:
var myObj = {};
var fooSym = Symbol.for('foo');
var otherSym = Symbol.for('foo');
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';
assert(fooSym === otherSym);
assert(myObj[fooSym] === 'bing');
assert(myObj[otherSym] === 'bing');

// Cross-Realm
iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);
assert.notEqual(iframe.contentWindow.Symbol, Symbol);
assert(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')); // true!
```

```
var localFooSymbol = Symbol('foo');
var globalFooSymbol = Symbol.for('foo');

assert(Symbol.keyFor(localFooSymbol) === undefined);
assert(Symbol.keyFor(globalFooSymbol) === 'foo');
assert(Symbol.for(Symbol.keyFor(globalFooSymbol)) === Symbol.for('foo'));
```

##### What Symbols are, what Symbols aren't.

* __Symbols will never conflict with Object string keys.__ This makes them great for extending objects you've been given (e.g. as a function param) without affecting the Object in a noticeable way.
* __Symbols cannot be read using existing reflection tools.__ You need the new `Object.getOwnPopertySymbols()` to access an Object's symbols, this makes Symbols great for storing bits of information you don't want people getting at through normal operation. Using `Object.getOwnPropertySymbols()` is a pretty special use-case.
* __Symbols are not private.__ The other edge to that sword - all of the Symbols of an object can be gotten by using `Object.getOwnSymbols()` - not very useful for a truly private value. Don't try to store information you want to be really private in an Object using a symbol - it can be gotten!
* __Enumerable Symbols can be copied to other objects using new methods like Object.assign.__ If you try calling `Object.assign(newObject, objectWithSymbols)` all of the (enumerable) Symbols in the second param (`objectWithSymbols`) will be copied to the first (`newObject`). If you don't want this to happen, make them non-enumerable with `Object.defineProperty`.
* __Symbols are not coercible into primitives.__ If you try to coerce a Symbol to a primitive (`+Symbol()`, `''+Symbol()`, `Symbol() + 'foo'`) it will throw an Error. This prevents you accidentally stringifying them when setting them as property names.
* __Symbols are not always unique.__ As mentioned above, `Symbol.for()` returns you a non-unique Symbol. Don't always assume the Symbol you have is unique, unless you made it yourself.
* __Symbols are nothing like Ruby Symbols.__ They share some similarities - such as having a central Symbol registry, but that's about it. They should not be used the same as Ruby symbols.
