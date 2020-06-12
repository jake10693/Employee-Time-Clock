const express = require('express');
const router = express.Router();
const RoleController = require('../../../controllers/role')

router.route("/")
    // @route  GET api/roles
    // @desc   Get all roles
    // @access Public
    .get(RoleController.getAllRoles)

router.route("/")
    // @route  Get one role api/roles:id
    // @desc   GET one role
    // @access Public
    .get(RoleController.getOneRole)
    // @route  POST api/roles/:id
    // @desc   POST new role to employee
    // @access Public
    .post(RoleController.createNewRole)

module.exports = router;