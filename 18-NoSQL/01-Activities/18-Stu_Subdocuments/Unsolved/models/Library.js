const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});
const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },

  books: [bookSchema],
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`

const Library = mongoose.model("Library", librarySchema);

// TODO: Create a new instance of the model including the subdocuments

const book = [
  { title: "Test", price: 10 },
  { title: "Test2", price: 15 },
];
Library.create({ name: "Birmingham", books: book }, (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

module.exports = Library;
