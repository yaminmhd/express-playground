const express = require("express");
const app = express();

app.param("userId", function(req, res, next, userId) {
    // do whatever you like with the userId, e.g. looking up the user profile in database
    const userName = "Tom";
    const user = {userId, userName}

    // and you can set new information in the request object
    req.user = user;

    // now let the next handler to process the request
    next();
});

app.get("/users/:userId/books/:bookId", function(req, res) {
  const user = req.user;
  res.send("Got the request for user " + user.userName);
});

const server = app.listen(3000, function() {
  console.log("Application started....");
});
