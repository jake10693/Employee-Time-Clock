const express = require('express');
const router = express.Router();
const ClockInController = require('../../../controllers/clockin')


router.route("/")
    // @route  POST api/clockin
    // @desc   POST clockin data
    // @access Public
    .post(ClockInController.clockInOut)


module.exports = router;