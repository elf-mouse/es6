class MySplitter {
  constructor(value) {
    this.value = value;
  }

  [Symbol.split](string) {
    let index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    return [string.substr(0, index), string.substr(index + this.value.length)];
  }
}

let fooMatcher = 'foobar'.split(new MyMatcher('foo'));
let barMatcher = 'foobar'.split(new MyMatcher('bar'));
assert.deepEqual(fooMatcher, ['', 'bar']);
assert.deepEqual(barMatcher, ['foo', '']);
