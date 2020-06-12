const express = require('express');
const router = express.Router();
const LocationController = require('../../../controllers/location')

router.route("/")
    // @route  POST api/location
    // @desc   POST a Location
    // @access Public
    .post(LocationController.createNewLocation)

router.route("/:id")
    // @route  getOneLocation api/location:id
    // @desc   GET one location
    // @access Public
    .get(LocationController.getOneLocation)
    // @route  Delete api/locations:id
    // @desc   Delete a Location
    // @access Public
    .get(LocationController.getOneLocation)

module.exports = router;


// createNewLocation: (req, res) => {
//     let { id , ...payload } = req.body;
//     db.Location.create(payload)
//     .then(({_id}) => {
//        return db.Company.findByIdAndUpdate(id, {$set:{new: _id}},{returnNewDocument: true})
//     })
//     .then(()=>{
//         res.status(201).json({success: true})
//     })
//     .catch((err)=>{
//         res.status(422).json({success: false})
//     })
// }

//Find employee by ID
        // Employee.findById(req.body.employee.id)
        // .then(employee => {
        //     //Check if employee is clocked in
        //     if(!employee.isclocked) {
        //         // if not clocked in create new clock in
        //         const newclockin = new ClockinModel({date: date.now, role: req.body.role.id })
        //         // and save clock in and clocked in state to employee
        //         employee.update($set { $push records[newclockin.id], isclocked: newclockin.id, })
        //     } else {
        //         //if clocked in update clock in clocked out time
        //         Clockin.findandupdate(id = isclocked, {clock = date.now})
        //         //update employee state to null
        //         employee.update(isclocked = null)
        //     }
        // }) 