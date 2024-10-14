const User = require('../models/User');
const bcrypt = require('bcryptjs');

// User signup
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ status: false, message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creates a new user if use doesn't exist
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    // 201 Status - Success
    res.status(201).json({
      message: 'User created successfully.',
      user_id: newUser._id
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ status: false, message: error.message });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ status: false, message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ status: false, message: 'Invalid email or password' });
    }

    // Send success response
    res.status(200).json({
      message: 'Login successful.',

    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ status: false, message: error.message });
  }
};
