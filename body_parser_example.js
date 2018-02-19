const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/users", function(req, res) {
  const userName = req.body.name;
  res.send(`${userName} is created.`);
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
