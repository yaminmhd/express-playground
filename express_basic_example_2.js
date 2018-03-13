const express = require("express");
const app = express();

function requestHandler1(req, res, next) {
  res.write("Here is a list of students:\n");
  next();
}

function requestHandler2(req, res, next) {
    res.write("Gordon\n");
    res.write("David\n");
    res.end();
}

app.get("/students", requestHandler1, requestHandler2);

const server = app.listen(3000, function() {
  console.log("Application started....");
});
