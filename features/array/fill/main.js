'use strict';

console.info('数组实例的fill()');

function demo1() {
  console.log(['a', 'b', 'c'].fill(7)); // [7, 7, 7]

  console.log(new Array(3).fill(7)); // [7, 7, 7]
}

// fill()还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
function demo2() {
  console.log(['a', 'b', 'c'].fill(7, 1, 2)); // ['a', 7, 'c']
}

//demo1();
//demo2();
