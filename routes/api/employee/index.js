const express = require('express');
const router = express.Router();
const EmployeeController = require('../../../controllers/employee')

router.route("/")
    // @route  POST api/employee/new
    // @desc   POST locationId & employee data
    // @access Public
    .post(EmployeeController.newEmployee)
    
router.route("/:id")
    // @route  GET api/employee/:id
    // @desc   GET profile for single employee
    // @access Public
    .get(EmployeeController.getOneEmployee)

router.route("/pop/:id")
    // @route  GET api/employee/pop/:id
    // @desc   GET profile & clock in/out records
    // @access Public
    .get(EmployeeController.getPopulatedEmployee)

module.exports = router;