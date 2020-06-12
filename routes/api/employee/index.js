const express = require('express');
const router = express.Router();
const EmployeeController = require('../../../controllers/employee')

router.route("/")
    // @route  GET api/employee
    // @desc   GET all employees
    // @access Public
    .get(EmployeeController.getAllEmployees)
    // @route  POST api/employee
    // @desc   POST a new employee
    // @access Public
    .post(EmployeeController.newEmployee)

router.route("/:id")
    // @route  getOneEmployee api/employee:id
    // @desc   Find one employee
    // @access Public
    .get(EmployeeController.getOneEmployee)
    // @route  DELETE api/employee:id
    // @desc   DELETE an employee
    // @access Public
    .delete(EmployeeController.deleteEmployee)

module.exports = router;