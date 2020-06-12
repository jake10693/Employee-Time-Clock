const express = require('express');
const router = express.Router();
const ClockInController = require('../../../controllers/clockin')


router.route("/")
    // @route  GET api/clockin
    // @desc   GET all clockins
    // @access Public
    .get(ClockInController.getAllClockIns)
    // @route  POST api/clockin
    // @desc   POST a new clockin
    // @access Public
    .post(ClockInController.newClockIn)

router.route("/id")
    // @route  DELETE api/clockin:id
    // @desc   DELETE a clockin record
    // @access Public
    .delete(ClockInController.deleteClockin)

    createNewClockIn: (req, res) => {
        let { companyId , ...payload } = req.body;
        db.ClockIn.create(payload)
        .then(({_id}) => {
           return db.Company.findOneAndUpdate(companyId, {$push:{clockin: _id}},{new: true})
        })
        .then((success)=>{
            res.status(201).json({success: true})
        })
        .catch((err)=>{
            res.status(422).json({success: false})
        })
    }

module.exports = router;

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