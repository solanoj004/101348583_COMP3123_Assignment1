const { body, query, param } = require('express-validator');

// Validation rules for Users
exports.userValidationRules = {
  signup: [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Must be a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  login: [
    body('email').isEmail().withMessage('Must be a valid email address'),
    body('password').exists().withMessage('Password is required')
  ]
};

// Validation rules for Employees
exports.employeeValidationRules = {
  createEmployee: [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Must be a valid email address'),
    body('position').notEmpty().withMessage('Position is required'),
    body('salary').isNumeric().withMessage('Salary must be a number'),
    body('date_of_joining').isISO8601().toDate().withMessage('Invalid date format'),
    body('department').notEmpty().withMessage('Department is required')
  ],
  getEmployeeById: [
    param('eid').isMongoId().withMessage('Invalid employee ID')
  ],
  updateEmployee: [
    param('eid').isMongoId().withMessage('Invalid employee ID'),
    body('first_name').optional().notEmpty().withMessage('First name cannot be empty'),
    body('last_name').optional().notEmpty().withMessage('Last name cannot be empty'),
    body('email').optional().isEmail().withMessage('Must be a valid email address'),
    body('position').optional().notEmpty().withMessage('Position cannot be empty'),
    body('salary').optional().isNumeric().withMessage('Salary must be a number'),
    body('date_of_joining').optional().isISO8601().toDate().withMessage('Invalid date format'),
    body('department').optional().notEmpty().withMessage('Department cannot be empty')
  ],
  deleteEmployee: [
    query('eid').isMongoId().withMessage('Invalid employee ID')
  ]
};
