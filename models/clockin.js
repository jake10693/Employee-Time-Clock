const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClockInSchema = new Schema({
    startTime: {
        type: String
    },
    endTime: {
        type: String
    }
});

const ClockIn = mongoose.model("ClockIn", ClockInSchema);

module.exports = ClockIn;