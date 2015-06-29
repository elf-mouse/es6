class Collection {
  get[Symbol.toStringTag]() {
    return 'Collection';
  }
}

var x = new Collection();
Object.prototype.toString.call(x) === '[object Collection]';
