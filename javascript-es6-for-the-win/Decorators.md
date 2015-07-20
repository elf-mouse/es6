* Decorators (ES7 - draft)

```js
// Based on Yehuda Katz proposal (EmberJS Core team member)
@memoize
function calculate(x, y, z) { ... }

// Example of a computed property
class Person extends Model {  
  @readonly
  name() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```
