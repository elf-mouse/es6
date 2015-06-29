let myArray = [1, 2, 3];

// with `for of`
for (let value of myArray) {
  console.log(value);
}

// without `for of`
let _myArray = myArray[Symbol.iterator]();
while (let _iteration = _myArray.next()) {
  if (_iteration.done) {
    break;
  }
  let value = _iteration.value;
  console.log(value);
}

class Collection {
  *[Symbol.iterator]() {
    let i = 0;
    while (this[i] !== undefined) {
      yield this[i];
      ++i;
    }
  }
}

let myCollection = new Collection();
myCollection[0] = 1;
myCollection[1] = 2;
for (let value of myCollection) {
  console.log(value); // 1, then 2
}
