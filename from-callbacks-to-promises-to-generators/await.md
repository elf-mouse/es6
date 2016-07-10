## Step 4: ES7 async/await

```js
var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));
var url1='http://httpbin.org/', url2=url1, url3=url1, url4=url1;

async function foo() {
  var res1 = await request.getAsync(url1);
  var res2 = await request.getAsync(url2);
  var res3 = await request.getAsync(url3);
  var res4 = await request.getAsync(url4);
  return "whew all done";
}

// use that function somewhere
foo().then(function(message) {
  console.log("success!", message);
}).catch(function(err) {
  console.log("error!", err);
});
```
