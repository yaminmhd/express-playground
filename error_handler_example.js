const express = require("express");
const app = express();

app.get("/", function(req, res, next) {
  // assume some error happens
  const err = new Error("Unexpected network error");
  next(err);
});

app.get("/", function(req, res, next) {
  console.log("You should not see this line in the console.");
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send({ error: "unknown error" });
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
