const express = require('express');
const router = express.Router();
const EmployeeController = require('../../../controllers/employee')

router.route("/")
    // @route  POST api/employee/new
    // @desc   POST locationId & employee data
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
    .get(EmployeeController.getOneEmployee)



module.exports = router;