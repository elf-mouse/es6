* Computed property names

```js
var namespace = 'MYOB';
var something = {
  [namespace + '']: 'dynamic naming'
};
// something['MYOBid'] or something.MYOBid return 'dynamic naming'
```
