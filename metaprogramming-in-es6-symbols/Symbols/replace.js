class MyReplacer {
  constructor(value) {
    this.value = value;
  }

  [Symbol.replace](string, replacer) {
    let index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    if (typeof replacer === 'function') {
      replacer = replacer.call(undefined, this.value, string);
    }
    return `${string.slice(0, index)}${replacer}${string.slice(index + this.value.length)}`;
  }
}

let fooReplaced = 'foobar'.replace(new MyReplacer('foo'), 'baz');
let barMatcher = 'foobar'.replace(new MyReplacer('bar'), function() {
  return 'baz'
});
assert.equal(fooReplaced, 'bazbar');
assert.equal(barReplaced, 'foobaz');
