console.info('for...of循环');

function demo1() {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
  }

  for (let v of foo()) {
    console.log(v);
  }
  // 1 2 3 4 5
}

function demo2() {
  function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }

  for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
  }
}

//demo1();
//demo2();
