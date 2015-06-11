var x = {
  title: "Example with ES5",
  arrow_me: function() {
    var nums = [1, 2, 3, 4, 5];
    nums.forEach(function(num) {
      if (num % 2 === 0) {
        console.log(num);
      } else {
        // prints "Example with ES5"
        console.log(this.title);
      }
    }.bind(this)); // We gotta bind
  }
};

x.arrow_me();
