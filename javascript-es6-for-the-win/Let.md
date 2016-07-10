* Let scoping (replacing var in many cases)

```js
let x = 10;
{
  let x = 20;
  // Inside the block x can be redefined
}
// Outside of the scoped block x = 10
```
