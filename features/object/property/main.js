'use strict';

console.info('属性名表达式');

function demo1() {
  var obj = {};

  // 方法一
  obj.foo = true;

  // 方法二
  obj['a' + 'bc'] = 123;

  console.log(obj);
  // ES5
  //var obj = {
  //  foo: true,
  //  abc: 123
  //};
}

function demo2() {
  let propKey = 'foo';

  let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
  };

  console.log(obj);
}

function demo3() {
  var lastWord = "last word";

  var a = {
    "first word": "hello",
    [lastWord]: "world"
  };

  var x = a["first word"]; // "hello"
  var y = a[lastWord]; // "world"
  var z = a["last word"]; // "world"
  console.log(x, y, z);
}

function demo4() {
  let obj = {
    ['h'+'ello']() {
      return 'hi';
    }
  };

  console.log(obj.hello()); // hi
}

demo1();
demo2();
demo3();
demo4();
