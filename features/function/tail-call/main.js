'use strict';

console.info('尾调用优化');

/**
 * 什么是尾调用？
 * 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
 */

function demo1_1() {
  function f(x) {
    return g(x);
  }
}

function demo1_2() {
  // 情况一
  function f(x) {
    let y = g(x);
    return y;
  }

  // 情况二
  function f(x) {
    return g(x) + 1;
  }
}

function demo1_3() {
  function f(x) {
    if (x > 0) {
      return m(x)
    }
    return n(x);
  }
}

/**
 * 尾调用优化
 */

function demo2() {
  function f() {
    let m = 1;
    let n = 2;
    return g(m + n);
  }
  f();

  // 等同于
  function f() {
    return g(3);
  }
  f();

  // 等同于
  g(3);
}

/**
 * 尾递归
 */

function demo3_1() {
  function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  }

  factorial(5); // 120
}

function demo3_2() {
  function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
  }

  factorial(5, 1); // 120
}

/**
 * 递归函数的改写
 */

function demo4_1() {
  function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
  }

  function factorial(n) {
    return tailFactorial(n, 1);
  }

  factorial(5); // 120
}

function demo4_2() {
  function currying(fn, n) {
    return function(m) {
      return fn.call(this, m, n);
    };
  }

  function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
  }

  const factorial = currying(tailFactorial, 1);

  factorial(5); // 120
}

function demo4_3() {
  function factorial(n, total = 1) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
  }

  factorial(5); // 120
}
