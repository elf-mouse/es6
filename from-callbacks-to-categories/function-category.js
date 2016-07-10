class Func {
  constructor(f) {
    // this.run = f
    this.run = x => f(x)

    // this :: Cat (x ↣ y)
    // Cat (y ↣ z) -> Cat (x ↣ z)
    this.pipe = g => new Func(x => g.run(this.run(x)))

    // utility function that pipes Func to a normal function
    // this :: Cat (x ↣ y)
    // (y -> z) -> Cat (x ↣ z)
    this.pipeTo = g => new Func(x => g(this.run(x)))
  }
}

// Cat (x ↣ x)
Func.id = new Func(x => x)
