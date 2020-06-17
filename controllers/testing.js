clockInOut: (req, res) => {
    console.log(req.body.employee)
    
    Find employee by ID
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
     })
} 



addNewLocation: (req, res) => {
    let {id, ...rest} = req.body;

    Company.findById(id)
    .then( location => {
        location.update({},{$push:{Locations:rest}},{})
        res.send("cool, location added!")
    })
    .catch( err => {
        res.send(err)
    })
}








.then(success =>{
    res.status(201).json({success: true})
})