const mongoose = require('mongoose');

// Employee Schema defined according to Assignment document
const employeeSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true 
  },
  last_name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  position: { 
    type: String, 
    required: true 
  },
  salary: { 
    type: Number, 
    required: true 
  },
  date_of_joining: { 
    type: Date, 
    required: true 
  },
  department: { 
    type: String, 
    required: true 
  }
// Adds created/updated time
}, { timestamps: true });

// Create and export Employee model
module.exports = mongoose.model('Employee', employeeSchema);
