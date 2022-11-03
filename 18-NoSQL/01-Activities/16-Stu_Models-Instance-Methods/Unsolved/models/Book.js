const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: Number,
  totalStock: Number,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
  this.price = this.price / 2;
  console.log(`title of book: ${this.title} price: ${this.price}`);
};
// TODO: Create a model named `Book`
const Book = mongoose.model("book", bookSchema);

// TODO: Create a new instance of the model

const discountedBook = new Book({
  title: "Harry Potter",
  author: "JK Rowling",
  price: 20,
});

// TODO: Call the custom instance method on the instance

discountedBook.getDiscount();

module.exports = Book;
