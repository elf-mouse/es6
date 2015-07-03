'use strict';

console.info('yield*语句');

function demo1() {
  let delegatedIterator = (function*() {
    yield 'Hello!';
    yield 'Bye!';
  }());

  let delegatingIterator = (function*() {
    yield 'Greetings!';
    yield * delegatedIterator;
    yield 'Ok, bye.';
  }());

  for (let value of delegatingIterator) {
    console.log(value);
  }
  // "Greetings!
  // "Hello!"
  // "Bye!"
  // "Ok, bye."
}

function demo2() {
  function* inner() {
    yield 'hello!'
  }

  function* outer1() {
    yield 'open'
    yield inner()
    yield 'close'
  }

  var gen = outer1()
  var a = gen.next() // -> 'open'
  var b = gen.next() // -> a generator
  var c = gen.next() // -> 'close'

  console.log(a, b, c);

  function* outer2() {
    yield 'open'
    yield * inner()
    yield 'close'
  }

  var gen = outer2()
  var a = gen.next() // -> 'open'
  var b = gen.next() // -> 'hello!'
  var c = gen.next() // -> 'close'

  console.log(a, b, c);
}

function demo3() {
  function* gen() {
    yield * ["a", "b", "c"];
  }

  console.log(gen().next()); // { value:"a", done:false }
}

function demo4() {
  function* foo() {
    yield 2;
    yield 3;
    return "foo";
  }

  function* bar() {
    yield 1;
    var v = yield * foo();
    console.log("v: " + v);
    yield 4;
  }

  var it = bar();

  it.next(); //
  it.next(); //
  it.next(); //
  it.next(); // "v: foo"
  it.next(); //
}

function demo5() {
  function* iterTree(tree) {
    if (Array.isArray(tree)) {
      for (let i = 0; i < tree.length; i++) {
        yield * iterTree(tree[i]);
      }
    } else {
      yield tree;
    }
  }

  const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

  for (let x of iterTree(tree)) {
    console.log(x);
  }
  // a
  // b
  // c
  // d
  // e
}

function demo6() {
  // 下面是二叉树的构造函数，
  // 三个参数分别是左树、当前节点和右树
  function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
  }

  // 下面是中序（inorder）遍历函数。
  // 由于返回的是一个遍历器，所以要用generator函数。
  // 函数体内采用递归算法，所以左树和右树要用yield*遍历
  function* inorder(t) {
    if (t) {
      yield* inorder(t.left);
      yield t.label;
      yield* inorder(t.right);
    }
  }

  // 下面生成二叉树
  function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
  }
  let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

  // 遍历二叉树
  var result = [];
  for (let node of inorder(tree)) {
    result.push(node);
  }

  console.log(result);
  // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
}

//demo1();
//demo2();
//demo3();
//demo4();
//demo5();
//demo6();
