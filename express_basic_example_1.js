const express = require("express");
const app = express();

/* GET books listing. */
app.get("/books", function(req, res) {
  res.send("You requested a list of books....");
});

/* GET a specific book with ID */
app.get("/books/:bookId", function(req, res) {
  res.send(`You request information on book ${req.params.bookId}`);
});

/* GET users listing. */
app.get("/users", function(req, res) {
  res.send("You requested a list of users....");
});

/* GET a specific user with ID */
app.get("/users/:userId", function(req, res) {
  res.send(`You request information on user ${req.params.userId}`);
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
