const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
  
    res.status(201).json({
      message: 'User created successfully.',
      user_id: newUser._id
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Login successful.',
     
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
