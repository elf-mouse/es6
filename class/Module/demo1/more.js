import { Vehicle } from './Vehicle';

class Car extends Vehicle {
  move () {
    console.log(this.name + ' is spinning wheels...');
  }
}

export { Car };
