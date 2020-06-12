const db = require('../models');

module.exports = {
    getAllEmployees: (req, res) => {
        Employee.find()
        .sort({date: -1 })
        .then(employees => res.json(employees))
    },
    getOneEmployee: (req, res) => {
         Employee.findOne({id})
         .then(employee => res.json(employee))
     
    },
    newEmployee: (req, res) => {
        let { locationId , ...payload } = req.body;

        db.Employee.create(payload)
        .then(({_id}) => {
           return db.Location.findOneAndUpdate(locationId, {$push:{employees: _id}},{new: true})
        })
        .then(() => {
            res.status(201).json({success: true})
        })
        .catch((err) => {
            res.status(422).json({success: false})
        })
    },
    getOneEmployee: (req, res) => {
        let id = req.params.id;

        db.Employee.findById(id)
        .then(person => {
            res.status(200).json(person)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}