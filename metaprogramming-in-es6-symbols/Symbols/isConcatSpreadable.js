/*var x = [1, 2].concat([3, 4], [5, 6], 7, 8);
assert.deepEqual(x, [1, 2, 3, 4, 5, 6, 7, 8]);*/

class ArrayIsh extends Array {
  get[Symbol.isConcatSpreadable]() {
    return true;
  }
}

class Collection extends Array {
  get[Symbol.isConcatSpreadable]() {
    return false;
  }
}

arrayIshInstance = new ArrayIsh();
arrayIshInstance[0] = 3;
arrayIshInstance[1] = 4;
collectionInstance = new Collection();
collectionInstance[0] = 5;
collectionInstance[1] = 6;
spreadableTest = [1, 2].concat(x).concat(y);
assert.deepEqual(spreadableTest, [1, 2, 3, 4, <Collection>]);
