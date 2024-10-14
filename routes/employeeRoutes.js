const express = require('express');
const router = express.Router();
const { employeeValidationRules } = require('../validators/validationRules');
const validate = require('../middleware/validate');
const {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');

// GET /api/v1/emp/employees
// Retrieve all employees
router.get('/employees', getAllEmployees);

// POST /api/v1/emp/employees
// Create a new employee
router.post('/employees', employeeValidationRules.createEmployee, validate, createEmployee);

// GET /api/v1/emp/employees/:eid
// Retrieve employee by ID
router.get('/employees/:eid', employeeValidationRules.getEmployeeById, validate, getEmployeeById);

// PUT /api/v1/emp/employees/:eid
// Update employee info by ID
router.put('/employees/:eid', employeeValidationRules.updateEmployee, validate, updateEmployee);

// DELETE /api/v1/emp/employees?eid=xxx
// Delete employee by ID using query parameter
router.delete('/employees', employeeValidationRules.deleteEmployee, validate, deleteEmployee);

module.exports = router;
