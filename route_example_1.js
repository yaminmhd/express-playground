const express = require("express");
const app = express();

app.get("/students", function(req, res) {
  res.send("Here is a list of students:....");
});

app.get("/books", function(req, res) {
  res.send("Here is a list of books:....");
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
