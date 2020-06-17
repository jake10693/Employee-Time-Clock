const express = require('express');
const router = express.Router();
const ClockInController = require('../../../controllers/clockin')


router.route("/")
    // @route  POST api/clockin
    // @desc   POST employee id & role to record clock in/out
    // @access Public
    .post(ClockInController.clockInOut)


router.route("/clockIn/:id")
    //.post(ClockInController.clockIn)


    
module.exports = router;