const express = require('express');
const router = express.Router();
const ClockInController = require('../../../controllers/clockin')


router.route("/")
    // @route  GET api/clockin
    // @desc   GET all clockins
    // @access Public
    .get(ClockInController.getAllClockIns)
    // @route  POST api/clockin
    // @desc   POST a new clockin
    // @access Public
    //.post(ClockInController.clockInOut)

router.route("/id")
    // @route  DELETE api/clockin:id
    // @desc   DELETE a clockin record
    // @access Public
    .delete(ClockInController.deleteClockin)

router.route("/clockIn/:id")
    //.post(ClockInController.clockIn)

router.route("/clockOut")
    .post(ClockInController.clockOut)
    
module.exports = router;