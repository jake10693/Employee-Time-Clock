const express = require('express');
const router = express.Router();
const LocationController = require('../../../controllers/location')

router.route("/")
    // @route  POST api/location
    // @desc   POST a Location
    // @access Public
    .post(LocationController.createNewLocation)

router.route("/:id")
    // @route  GET api/location/:id
    // @desc   attach locationId to req.body to return location data
    // @access Public
    .get(LocationController.getOneLocation)

router.route("/employees/:id")
    // @route  GET api/location/employees/:id
    // @desc   add location id to params to get list of employees
    // @access Public
    .get(LocationController.getLocationEmployees)

router.route("/company/:id")
    // @route  GET api/location/company/:id
    // @desc   add company id to params to get list of locations
    // @access Public
    .get(LocationController.getAllLocation)

module.exports = router;