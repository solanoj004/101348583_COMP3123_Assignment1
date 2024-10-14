const express = require('express');
const router = express.Router();
const {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');

// GET /api/v1/emp/employees
// Retrieve all employee
router.get('/employees', getAllEmployees);

// POST /api/v1/emp/employees
// Create a new employee
router.post('/employees', createEmployee);

// GET /api/v1/emp/employees/:eid
// Retrieve a specific employee by ID
router.get('/employees/:eid', getEmployeeById);

// PUT /api/v1/emp/employees/:eid
// Update a specific employee by ID
router.put('/employees/:eid', updateEmployee);

// DELETE /api/v1/emp/employees?eid=xxx
// Delete a specific employee by ID (passed as a query parameter)
router.delete('/employees', deleteEmployee);

module.exports = router;
