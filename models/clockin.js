const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClockInSchema = new Schema({
    startTime: {
        type: String,
        required: [true, "a start time is required!"],
        trim: true
    },
    endTime: {
        type: String,
        trim: true
    },
    role: {
        type: Object
    },
    locationData: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false
        }
    }
},{
    timestamps: true
});

const ClockIn = mongoose.model("ClockIn", ClockInSchema);

module.exports = ClockIn;