## Step 2: Promises — 1 level deep

Promise libraries take the typical callback function:
`function(err, response) { }`
And split those arguments into separate then/catch chainable callbacks:
`.then(function(response) { }).catch(function(err) { })`

```js
var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));
var url1='http://httpbin.org/', url2=url1, url3=url1, url4=url1;

function foo() {
  return request.getAsync(url1)
  .then(function(res1) {
    return request.postAsync(url2);
  }).then(function(res2) {
    return request.putAsync(url3);
  }).then(function(res3) {
     return request.delAsync(url4);
  }).then(function(res4) {
     return "whew all done";
  });
}

// use that function somewhere
foo().then(function(message) {
  console.log("success!", message);
}).catch(function(err) {
  console.log("error!", err);
});
```
