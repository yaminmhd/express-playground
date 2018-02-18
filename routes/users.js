const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You requested a list of users....');
});

/* GET a specific user with ID */
router.get('/:userId', function(req, res, next) {
  res.send(`You request information on user ${req.params.userId}`);
});

module.exports = router;
