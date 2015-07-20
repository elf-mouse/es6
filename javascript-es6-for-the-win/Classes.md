* Classes

```js
// Before:
function Fruit(size, age, colour) {  
  this.size = size;
  this.age = age;
  this.colour = colour;
}

Fruit.type = function() {  
  return 'This is a fruit.';
}

function Banana(size, age, colour) {  
  Fruit.call(this, size, age, colour);
  this.peel = true;
}

// Still requires a recent browser for the following line
Banana.prototype = Object.create(Fruit.prototype);

Banana.prototype.open = function open() {  
  this.peel = false;
}

----------

// After:
class Fruit {  
  contructor(size, age, colour) {
    this.size = size;
    this.age = age;
    this.colour = colour;
  }

  // Class methods - static methods
  static type() {
    return 'This is a fruit.';
  }
}

class Banana extends Fruit {  
  contructor(size, age, colour) {
    super(size, age, colour);
    this.peel = true;
  }

  open() {
    this.peel = false;
  }
}
```
