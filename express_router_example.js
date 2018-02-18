const express = require("express");
const app = express();
const bookRouter = require("./routes/books");
const userRouter = require("./routes/users");

app.use("/books", bookRouter);
app.use("/users", userRouter);

const server = app.listen(3000, function() {
  console.log("Application started....");
});
