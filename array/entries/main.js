'use strict';

console.info('数组实例的entries()，keys()和values()');

function demo1() {
  for (let index of['a', 'b'].keys()) {
    console.log(index);
  }
  // 0
  // 1
}

function demo2() {
  for (let elem of['a', 'b'].values()) {
    console.log(elem);
  }
  // 'a'
  // 'b'
}

function demo3() {
  for (let [index, elem] of['a', 'b'].entries()) {
    console.log(index, elem);
  }
  // 0 "a"
  // 1 "b"
}

//demo1();
//demo2();
//demo3();
