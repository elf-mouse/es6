const operation = new Func(x => x + 1)
  .pipe(new Func(Math.sqrt))
  .pipe(new Func(x => x * 6))
  .pipeTo(x => x - 1)

const result = operation.run(48) // = 41
