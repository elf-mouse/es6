class Thing() {
  [Symbol.hasInstance](lho) {
    return lho === Array;
  }
}

var thing = new MyClass();
assert(thing instanceof Array);
