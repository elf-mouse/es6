* Modules

```js
// In a fruit.js file
export default function eat(fruit) {  
  return `You eat a ${fruit}.`;
}

// In a main.js file
import eat from 'fruit';  
eat('Banana');  
// The function will return 'You eat a Banana.'
```
