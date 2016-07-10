## Step 3: Promises+Generators — 0 level flat

```js
var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));
var url1='http://httpbin.org/', url2=url1, url3=url1, url4=url1;

function* foo() {
  // to get the response = yield a promise
  var res1 = yield request.getAsync(url1);
  var res2 = yield request.getAsync(url2);
  var res3 = yield request.getAsync(url3);
  var res4 = yield request.getAsync(url4);
  return "whew all done";
}
foo = Promise.coroutine(foo);

// use that function somewhere
foo().then(function(message) {
  console.log("success!", message);
}).catch(function(err) {
  console.log("error!", err);
});
```
