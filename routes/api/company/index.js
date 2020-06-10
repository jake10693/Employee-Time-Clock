const express = require('express');
const router = express.Router();
const CompanyController = require('../../../controllers/company')

router.route("/all")
    // @route  GET api/company/all
    // @desc   GET all companies in db (minus passwords)
    // @access Public
    .get(CompanyController.getAllCompanies)

router.route("/")
    // @route  POST api/company
    // @desc   POST an Company
    // @access Public
    .post(CompanyController.addNewCompany)

router.delete("/:id")
    // @route  Delete api/company:id
    // @desc   Delete a company
    // @access Public
    .delete(CompanyController.deleteCompany)

router.route("/location")
    // @route  POST api/company/location
    // @desc   POST a new location
    // @access Public
    .post(CompanyController.addNewLocation)
    
module.exports = router;