const db = require('../models');

module.exports = {
    createNewLocation: (req, res) => {
        let { companyId , ...payload } = req.body;

        db.Location.create(payload)
        .then(({_id}) => {
           return db.Company.findOneAndUpdate(companyId, {$push:{location: _id}},{new: true})
        })
        .then(()=>{
            res.status(201).json({success: true})
        })
        .catch((err)=>{
            res.status(422).json({success: false})
        })
    },
    getOneLocation: (req, res) => {
        let id = req.params.id;

        db.Location.findById(id)
        .then(location => {
            res.status(200).json(location)
        })
        .catch(err => {
            res.status(400).json({success: false})
        })
    },
    getLocationEmployees: (req, res) => {
        let id = req.params.id;

        db.Location.findById(id)
        .populate("employees")
        .then(location => {
            res.status(200).json(location.employees)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    },
    getAllLocation: (req, res) => {
        let companyId = req.params.id;

        db.Company.findById(companyId)
        .populate("location")
        .then(location => {
            res.json(location.location)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}