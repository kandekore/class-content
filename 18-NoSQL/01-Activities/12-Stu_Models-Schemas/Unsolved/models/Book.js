const mongoose = require("mongoose");

// TODO: Add a comment describing the functionality of the code below
//CREATING THE SCHEMA FOR THE ITEM
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
//ADDING THE SCHEMA TO MONGO
const Book = mongoose.model("Book", bookSchema);

const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
// TO ADD DATA TO DBASE BSED ON SCHEMA LAYOUT
Book.create(
  {
    title: "Diary of Anne Frank",
    author: "Anne Frank",
    publisher: "Scholastic",
    stockCount: 10,
    price: 10,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log("Created new document"))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
// JUST LESS FIELDS SAME SYNTAX
Book.create(
  { title: "Oh the Places You Will Go!", author: "Dr. Seuss" },
  (err) => (err ? handleError(err) : console.log("Created new document"))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
// JUST LESS FIELDS SAME SYNTAX

Book.create({ title: "Harold and the Purple Crayon" }, (err) =>
  err ? handleError(err) : console.log("Created new document")
);

module.exports = Book;
