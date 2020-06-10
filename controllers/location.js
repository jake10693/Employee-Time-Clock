const Location = require('../models/role');

module.exports = {
    getAllLocations: (req, res) => {
        Location.find()
        .sort({date: -1 })
        .then(locations => res.json(locations))
    },
    createNewLocation: (req, res) => {
        const newLocation = new Location(res.body.location);

        newLocation.save().then(location => res.json(location));
    },
    deleteLocation: (req, res) => {
        Location.findById(req.params.id)
        .then(location => location.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
    },
    addNewEmployee: (req, res) => {
        let {id, ...rest} = req.body;
        Location.findById(id)
        .then( employee => {
            employee.update({},{$push:{employees: rest}},{})
            res.send("cool, done!")
        })
        .catch( err => {
            res.send(err)
        })
    }
}