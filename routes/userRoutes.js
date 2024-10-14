const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/userController');
const { userValidationRules } = require('../validators/validationRules');
const validate = require('../middleware/validate');

// POST /api/v1/user/signup
// Create a new user account
router.post('/signup', userValidationRules.signup, validate, signup);

// POST /api/v1/user/login
// Logs user in
router.post('/login', userValidationRules.login, validate, login);

module.exports = router;
