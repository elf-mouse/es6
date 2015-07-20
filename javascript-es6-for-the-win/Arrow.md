* Arrow functions

```js
// Before:
something.on('start', function(bananas) {  
  return bananas > 10;
});

----------

// After:
something.on('start', bananas => bananas > 10); 
```
