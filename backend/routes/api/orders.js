const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Order } = require('../../db/models');

const router = express.Router();



router.get('/', async(req, res) => {

    let error = {};

    try {
        let getAllOrders = await Order.findAll({
            raw: true
        })

        return res
            .status(200)
            .json({
                "Orders": getAllOrders
            })



    } catch (err) {
        error.error = err
        return res.json(error)
    };
});


/*************************************** error handler ****************************************/

router.use((err, req, res, next) => {
    return res.json(err)
})


/****************************************** export ********************************************/

module.exports = router;
