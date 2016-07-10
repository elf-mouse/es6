class Callback {
  constructor(f) {

    // this.run = f
    this.run = callback => {
      try {
        f(callback)
      } catch (ex) {
        callback(ex, null)
      }
    }

    // this :: Callback x
    // (x -> y) -> Callback y
    this.map = g => new Callback(callback => {
      this.run((error, ...result) => {
        if (!!error) {
          callback(error, null)
        } else {
          callback(null, g(...result))
        }
      })
    })

    // this :: Callback x
    // (x -> Callback y) -> Callback y
    this.bind = g => new Callback(callback => {
      this.run((error, ...result) => {
        if (!!error) {
          callback(error, null)
        } else {
          g(...result).run(callback)
        }
      })
    })

    // this :: Callback x
    // x -> (y || Callback y) -> Callback y
    this.then = g => new Callback(callback => {
      this.run((error, ...result) => {
        if (!!error) {
          callback(error, null)
        } else {
          try {
            const y = g(...result)
            if (y instanceof Callback) {
              y.run(callback)
            } else {
              callback(null, y)
            }
          } catch (ex) {
            callback(ex, null)
          }
        }
      })
    })

    this.bindTo = g => this.bind(Callback.from(g))
  }
}

// x -> Callback x
Callback.pure = x => new Callback(cb => cb(null, x))

Callback.resolve = Callback.pure

// Callback.from casts f into a Callback instance, where
// f is a function that takes x and a callback function
Callback.from = f => (...x) => new Callback(cb => f(...x, cb))
