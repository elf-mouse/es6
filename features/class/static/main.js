console.log('Class的静态方法');

class Foo {
  static classMethod() {
    return 'hello';
  }
}

function demo1() {
  Foo.classMethod(); // 'hello'

  var foo = new Foo();
  foo.classMethod(); // TypeError: undefined is not a function
}

function demo2() {
  class Bar extends Foo {

  }

  Bar.classMethod(); // 'hello'
}

function demo3() {
  class Bar extends Foo {
    static classMethod() {
      return super.classMethod() + ', too';
    }
  }

  Bar.classMethod();
}
