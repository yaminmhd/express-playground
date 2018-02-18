const express = require("express");
const app = express();

app.get("/users/:userId/books/:bookId", function(req, res) {
  res.send(req.params);
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
