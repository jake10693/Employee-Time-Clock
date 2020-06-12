const db = require("../models");
// const { Employee } = require('../models');

module.exports = {
  getAllClockIns: (req, res) => {
    ClockIn.find()
      .sort({ date: -1 })
      .then((clockins) => res.json(clockins));
  },
  getOneClockin: (req, res) => {
    Clockin.findOne({ id }).then((Clockin) => res.json(Clockin));
  },
  newClockIn: (req, res) => {
    const newClockIn = new ClockIn(res.body.clockin);

    newClockIn.save().then((clockin) => res.json(clockin));
  },
  deleteClockin: (req, res) => {
    ClockIn.findById(req.params.id)
      .then((clockin) => clockin.remove())
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(404).json({ success: false }));
  },
};

/*            //Find employee by ID
new db.ClockIn({startDate: Date.now, role: body.role})
          Employee.findById(req.body.employee.id)
         .then(employee => {
             //Check if employee is clocked in
             if(!employee.isclocked) {
                // if not clocked in create new clock in
                 const newclockin = new ClockinModel({date: date.now, role: req.body.role.id })
                 // and save clock in and clocked in state to employee
                 employee.update($set { $push records[newclockin.id], isclocked: newclockin.id, })
             } else {
                 //if clocked in update clock in clocked out time
                 Clockin.findandupdate(id = isclocked, {clock = date.now})
                 //update employee state to null
                 employee.update(isclocked = null)
             }
         })   */
