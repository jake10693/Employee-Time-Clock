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

router.route("/:id")
    // @route findOne company api/company:id
    // @desc find a company
    // @access Public
    .get(CompanyController.getOneCompany)
    // @route  Delete api/company:id
    // @desc   Delete a company
    // @access Public
    .delete(CompanyController.deleteCompany)

module.exports = router;