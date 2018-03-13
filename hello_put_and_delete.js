const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const books = [
  { id: "1", name: "harry potter" },
  { id: "2", name: "a song of ice and fire" },
  { id: "3", name: "lord of the rings" }
];

app.get("/books", function(req, res) {
  res.send(books);
});

app.put("/books/:id", function(req, res) {
  // 1. get book to be updated
  console.log(req.params.id);
  let booksWithMatchingId = books.filter(book => book.id === req.params.id);
  let bookToBeUpdated = booksWithMatchingId[0];

  // 2. update book
  bookToBeUpdated["name"] = req.body.name;

  // 3. send response with updated book
  res.status(200);
  res.send(bookToBeUpdated);
});

app.delete("/books/:id", function(req, res) {
  // 1. filter out the book which match the id
  let remainingBooks = books.filter(book => book.id !== req.params.id);

  // 2. send response with remaining books
  res.status(200);
  res.send(remainingBooks);
});

const server = app.listen(PORT, function() {
  console.log(`You're listening to the smooth sounds of port ${PORT}...`);
});
