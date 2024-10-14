const mongoose = require('mongoose');

// User Schema defined according to Assignment document
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  }
  // Adds created/updated time
}, { timestamps: true }); 

// Create and export User model
module.exports = mongoose.model('User', userSchema);
