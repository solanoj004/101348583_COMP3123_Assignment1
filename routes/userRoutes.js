const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/userController');

// POST /api/v1/user/signup
// Creating a new user
router.post('/signup', signup);

// POST /api/v1/user/login
// Authenticate and log in a user
router.post('/login', login);

module.exports = router;
