function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greeting = function() {
  console.log("Hi, my name is", this.name);
};

var myUser = new User('Tom', 29);
myUser.greeting();
