const express = require('express');
const router = express.Router();
const LocationController = require('../../../controllers/location')

router.route("/")
    // @route  POST api/location
    // @desc   POST a Location
    // @access Public
    .post(LocationController.createNewLocation)

router.route("/:id")
    // @route  POST api/location
    // @desc   Post locationId on body to return location data
    // @access Public
    .get(LocationController.getOneLocation)

module.exports = router;