class MySearch {
  constructor(value) {
    this.value = value;
  }

  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

let fooSearch = 'foobar'.search(new MySearch('foo'));
var barSearch = 'foobar'.search(new MySearch('bar'));
var bazSearch = 'foobar'.search(new MySearch('baz'));
assert.equal(fooSearch, 0);
assert.equal(barSearch, 3);
assert.equal(bazSearch, -1);
