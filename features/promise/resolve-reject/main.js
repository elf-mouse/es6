/**
 * Promise.resolve()，Promise.reject()
 */

var jsPromise = Promise.resolve($.ajax('/whatever.json'));


var p = Promise.resolve('Hello');

p.then(function(s) {
  console.log(s);
});
// Hello


var p = Promise.resolve();

p.then(function() {
  // ...
});


var p = Promise.reject('出错了');

p.then(null, function(s) {
  console.log(s);
});
// 出错了
