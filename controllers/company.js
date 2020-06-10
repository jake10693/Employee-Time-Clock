const db = require('../models');

module.exports = {
     getAllCompanies: (req, res) =>{
        Company.find({})
        .sort({date: -1 })
        .select("-password")
        .then(companies => res.json(companies))
        .catch(err => console.log(err))
    },
    addNewCompany: (req, res) =>{
        const newCompany = new Company(res.body.company);

        newCompany.save().then(company => res.json(company));
    },
    deleteCompany: (req, res) =>{
        Company.findById(req.params.id)
        .then(company => company.remove())
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}));
    },
    addNewLocation: (req, res) => {
        
        let {id, ...payload} = req.body;
        
        db.Location.create(payload)
            .then( record => {
                let refId = record._id
                db.Company.findOneAndUpdate( {_id: id} , { $push: { locations: refId } })
                console.log("record", record)
                console.log("ref-ID", refId)
                console.log("company ID", id)
            })
            .then( result => {
                console.log("result", result)
                //res.status(201).json({success: true, result})
            })
            .catch( err => {
                res.status(422).json({success: false, err})
            })
    }
}