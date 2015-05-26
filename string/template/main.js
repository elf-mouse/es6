'use strict';

console.info('模板字符串');

function es5() {
  $("#result").append(
    "There are <b>" + basket.count + "</b> " +
    "items in your basket, " +
    "<em>" + basket.onSale +
    "</em> are on sale!"
  );
}

function es6() {
  $("#result").append(`
    There are <b>${basket.count}</b> items
     in your basket, <em>${basket.onSale}</em>
    are on sale!
  `);
}

// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

function demo1() {
// 普通字符串
var str1 = `In JavaScript '\n' is a line-feed.`;

console.info('str1');
console.log(str1);

// 多行字符串
var str2 = `In JavaScript this is
not legal.`;

console.info('str2');
console.log(str2);

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
var name = "Bob", time = "today";
var str3 = `Hello ${name}, how are you ${time}?`;

console.info('str3');
console.log(str3);
}

function demo2() {
  var greeting = `\`Yo\` World!`;
  console.log(greeting);
}

function demo3() {
  var x = 1;
  var y = 2;

  console.log(`${x} + ${y} = ${x+y}`); // "1 + 2 = 3"

  console.log(`${x} + ${y*2} = ${x+y*2}`); // "1 + 4 = 5"

  var obj = {x: 1, y: 2};
  console.log(`${obj.x + obj.y}`); // 3
}

function demo4() {
  function fn() {
    return "Hello World";
  }

  console.log(`foo ${fn()} bar`); // foo Hello World bar
}

function demo5() {
  var msg = `Hello, ${place}`; // throws error
}

function demo6(x, MAX) {
  if (x > MAX) {
    throw new Error(`Most ${MAX} allowed: ${x}!`);
    // 传统写法为'Most '+MAX+' allowed: '+x+'!'
  }
}

function demo7() {
  var a = 5;
  var b = 10;

  function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(v1);
    console.log(v2);

    return "OK";
  }

  tag`Hello ${ a + b } world ${ a * b}`;
  // "Hello "
  // " world "
  // 15
  // 50
  // "OK"
}

function demo8() {
  var total = 30;
  var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

  function passthru(literals) {
    var result = "";
    var i = 0;

    while (i < literals.length) {
      result += literals[i++];
      if (i < arguments.length) {
        result += arguments[i];
      }
    }

    return result;

  }

  console.log(msg); // "The total is 30 (31.5 with tax)"
}

function demo9() {
  tag`First line\nSecond line`

  function tag(strings) {
    console.log(strings.raw[0]); // "First line\\nSecond line"
  }
}

//demo1();
//demo2();
//demo3();
//demo4();

//demo6(2, 1);
//demo7();
//demo8();
//demo9();
