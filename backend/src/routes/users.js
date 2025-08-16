const express = require('express');
const { createUser, getUser } = require('../controllers/user-controller');

const router = express.Router();

router.post('/user', (req, res, next) => createUser(req, res, next));

router.get('/user', (req, res, next) => getUser(req, res, next));


module.exports = router;
