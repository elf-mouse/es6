class MyMatcher {
  constructor(value) {
    this.value = value;
  }

  [Symbol.match](string) {
    let index = string.indexOf(this.value);
    if (index === -1) {
      return null;
    }
    return [this.value];
  }
}

let fooMatcher = 'foobar'.match(new MyMatcher('foo'));
let barMatcher = 'foobar'.match(new MyMatcher('bar'));
assert.deepEqual(fooMatcher, ['foo']);
assert.deepEqual(barMatcher, ['bar']);
