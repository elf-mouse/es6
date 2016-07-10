const operation = Callback.pure(5)
  .bind(x => new Callback(cb => {
    console.log(`binding ${x} to x + 1`)
    setTimeout(() => cb(null, x + 1), 100)
  }))

operation.run((error, result) => console.log(error || result))
