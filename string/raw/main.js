'use strict';

console.info('String.raw()');

console.log(String.raw`Hi\n${2+3}!`); // "Hi\\n5!"

console.log(String.raw`Hi\u000A!`); // 'Hi\\u000A!'

console.log(String.raw({ raw: 'test' }, 0, 1, 2)); // 't0e1s2t'
// 等同于
console.log(String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2));
