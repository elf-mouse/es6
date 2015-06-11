class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("Hi, my name is", this.name);
  }
}
