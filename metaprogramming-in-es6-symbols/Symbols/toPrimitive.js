class AnswerToLifeAndUniverseAndEverything {
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return 'Like, 42, man';
    } else if (hint === 'number') {
      return 42;
    } else {
      // when pushed, most classes (except Date)
      // default to returning a number primitive
      return 42;
    }
  }
}

var answer = AnswerToLifeAndUniverseAndEverything();

+answer === 42;
Number(answer) === 42;
'' + answer === 'Like, 42, man';
String(answer) === 'Like, 42, man';
