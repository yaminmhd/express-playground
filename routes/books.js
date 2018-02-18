const express = require('express');
const router = express.Router();

/* GET books listing. */
router.get('/', function(req, res, next) {
  res.send('You requested a list of books....');
});

/* GET a specific book with ID */
router.get('/:bookId', function(req, res, next) {
  res.send(`You request information on book ${req.params.bookId}`);
});

module.exports = router;
