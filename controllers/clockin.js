const db = require('../models');

module.exports = {
    clockInOut : (req, res) => {
        let {id, ...body} = req.body;
        
        db.Employee.findById(id)
        .then( person => {
            if(!person.lastClockId){
                db.ClockIn.create({startTime: Date.now(), role: body})
                .then(({_id}) => {
                    person.updateOne({
                        $set: {lastClockId: _id},
                        $push:{records: _id}
                    })
                    .then(() => {
                        res.status(201).json({success: true, message: "Sucessfully Clocked In"})
                    })
                    .catch(() => {
                        res.status(400).json({success: false, message: "There was an issue handling your clock in request!"})
                    })
                })
            } else {
                db.ClockIn.findById(person.lastClockId)
                .then( clock => {
                    return clock.updateOne({$set:{endTime: Date.now()}})
                })
                .then(() => {
                    return person.updateOne({$set:{lastClockId: null}})
                })
                .then(() => {
                    res.status(201).json({success: true, message: "Sucessfully Clocked Out"})
                })
                .catch( err => {
                    res.status(400).json({success: false, message: "There was an issue handling your clock out request!"})
                })
            }
        })
        .catch( err => {
            res.status(400).json({success: false, message: "Server Error: Unable to locate user"})
        })
    }
}