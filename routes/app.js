const express = require('express');
const router = express.Router();
const controller = require('../controllers/clockInController');

router.route("/api/clockin")
    .post(controller.insertRecord)

module.exports = router;