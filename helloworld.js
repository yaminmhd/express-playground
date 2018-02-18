const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.post("/", function(req, res) {
  res.send("Got a POST request");
});

app.put("/", function(req, res) {
  res.send("Got a PUT request");
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
