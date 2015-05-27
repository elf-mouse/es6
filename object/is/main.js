'use strict';

console.info('Object.is()');

var a = +0 === -0; //true
var b = NaN === NaN; // false

var c = Object.is(+0, -0); // false
var d = Object.is(NaN, NaN); // true

console.log(a, b);
console.log(c, d);
