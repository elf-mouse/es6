class Author extends User {
  constructor(name, age, books) {
    /* User keyword "super" to call
       the parent constructor. This
       will create this.name and this.age
       on the instance of this Author class */
    super(name, age);
    this.books = books;
  }
  greeting() {
    /* This method will automatically overwrite
       the parent classes implementation. However
       if we did not define it, the parent's
       implementation would be used */
    super.greeting();
    console.log("But I'm also an author");
  }
}
