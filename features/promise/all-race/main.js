/**
 * Promise.all()，Promise.race()
 */

var p = Promise.all([p1, p2, p3]);


// 生成一个Promise对象的数组
var promises = [2, 3, 5, 7, 11, 13].map(function(id) {
  return getJSON("/post/" + id + ".json");
});

Promise.all(promises).then(function(posts) {
  // ...
}).catch(function(reason) {
  // ...
});


var p = Promise.race([p1, p2, p3]);
