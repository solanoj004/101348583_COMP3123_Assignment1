const Employee = require('../models/Employee');

// GET Request to retrieve all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    // 200 Status - OK
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// POST request to create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    // 201 Status - CREATED
    res.status(201).json({
      message: 'Employee created successfully.',
      employee_id: newEmployee._id
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// GET request to retrieve employee info by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);
    if (!employee) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    // 200 Status - OK
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// PUT request to update employee info by ID
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    // 200 Status - OK
    res.status(200).json({ message: 'Employee details updated successfully.' });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// DELETE request to delete employee by ID using query parameters
exports.deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.query.eid);
    if (!deletedEmployee) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    // 200 Status - OK
    res.status(200).json({ message: 'Employee deleted successfully.' });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
