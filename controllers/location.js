const db = require('../models');

module.exports = {
    getAllLocations: (req, res) => {
        Location.find()
        .sort({date: -1 })
        .then(locations => res.json(locations))
    },
    getOneLocation: (req, res) => {
        Location.findOne({id})
        .then(location => res.json(location))
    },
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
}