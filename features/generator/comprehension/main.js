console.info('Generator函数推导');

// ES7在数组推导的基础上，提出了Generator函数推导（Generator comprehension）。

function demo1() {
  let generator = function*() {
    for (let i = 0; i < 6; i++) {
      yield i;
    }
  }

  let squared = (
    for (n of generator()) n * n);
  // 等同于
  // let squared = Array.from(generator()).map(n => n * n);

  console.log(...squared);
  // 0 1 4 9 16 25
}

// “推导”这种语法结构，在ES6只能用于数组，ES7将其推广到了Generator函数。

function demo2() {
  let bigArray = new Array(100000);
  for (let i = 0; i < 100000; i++) {
    bigArray[i] = i;
  }

  let first = bigArray.map(n => n * n)[0];
  console.log(first);
}

function demo3() {
  let bigGenerator = function*() {
    for (let i = 0; i < 100000; i++) {
      yield i;
    }
  }

  let squared = (
    for (n of bigGenerator()) n * n);

  console.log(squared.next());
}

//demo1();
demo2();
demo3();
