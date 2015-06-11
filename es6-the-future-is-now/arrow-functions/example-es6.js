var x = {
  title: "Example in ES6",
  arrow_me: function() {
    var nums = [1, 2, 3, 4, 5];
    nums.forEach( num => {
      if (num % 2 === 0) {
        console.log(num);
      } else {
        // prints "Example in ES6"
        console.log(this.title);
      }
    }); // No binding necessary
  }
};

x.arrow_me();
