const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "a first name is required!"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "a last name is required!"],
        trim: true
    },
    address: String,
    city: String,
    state: String,
    postalCode: String,
    phone: String,
    email: String,
    roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
    active: {
        type: Boolean,
        default: true
    },
    pin: {
        type: Number,
        default: 0000,
        required: [true, "a pin is required!"],
        trim: true
    },
    records: [{ type: Schema.Types.ObjectId, ref: "ClockIn" }],
    lastClockId: String
},{
    timestamps:true
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;