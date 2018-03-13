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
  res.status(200);
  res.send(books);
});

app.get("/books/:id", function(req, res) {
  const bookId = req.params.id;
  const requestedBook = books.filter(book => book.id === bookId);
  res.status(200);
  res.send(requestedBook);
});

app.post("/books", function(req, res) {
  console.log(req.body);
  const bookName = req.body.name;
  books.push({ id: books.length + 1, name: bookName });

  res.status(200);
  res.send(books);
});

const server = app.listen(PORT, function() {
  console.log(`You're listening to the smooth sounds of port ${PORT}...`);
});
