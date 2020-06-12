const db = require('../models');
const { Employee } = require('../models');

module.exports = {
    clockInOut : (req, res) => {
        let {id, ...body} = req.body;
        
        db.Employee.findById(id)
        .then( person => {
            if(!person.lastClockId){
                db.ClockIn.create({startTime: Date.now(), role: body})
                .then(({_id}) => {
                    person.update({
                        $set: {lastClockId: _id},
                        $push:{records: _id}
                    })
                    .then((response) => {
                        console.log(response)
                    })
                })
            } else {
                console.log("awsome!")
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

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