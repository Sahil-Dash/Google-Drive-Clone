const express = require('express');

const User = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Working Fine...");
})

router.use('/api', User);

module.exports = router;
