/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Order, OrderDetail, Product, ProductImage } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();


/******************************** ROUTES *********************************/
// Get all orders by current user
router.get('/:userId', async(req, res) => {

    let currentUserId = req.params.userId;
    // remember to add pass requireAuth ^
    // let currentUser = req.user;
    // let currentUserId = req.user.id;
    let error = {};

    try {
        let getAllOrders = await Order.findAll({
            where: {userId: currentUserId},
            attributes: {
                exclude: ['updatedAt']
            },
            raw: true
        })

        if (!getAllOrders.length) {
            error.message = "Order couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);
        }

        // add Products-key to every order
        for (let i = 0; i < getAllOrders.length; i++) {
            let order = getAllOrders[i];

            let productsPurchased = await OrderDetail.findAll({
                where: { orderId: order.id },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
            })

            // add product details to every product in array
            for (let j = 0; j < productsPurchased.length; j++) {
                let product = productsPurchased[j];

                // modify keys
                delete product.orderId;
                product.id = product.productId;
                delete product.productId;

                let productDetails = await Product.findByPk(product.id, {
                    // attributes: {
                    //     exclude: ['createdAt', 'updatedAt']
                    // },
                    raw: true,
                });
                let { departmentId, name, price, description } = productDetails;
                product.departmentId = departmentId
                product.name = name
                product.price = price
                product.description = description

                // add previewImage-key to every product
                let prevImage = await ProductImage.findOne({
                    where: { productId: product.id },
                    raw: true
                });
                let prevUrl = prevImage.url;
                product.previewImage = prevUrl
            }
            order.Products = productsPurchased;


        }
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


// Get single order details
router.get('/:orderId', async(req, res) => {

});

/*************************************** error handler ****************************************/

router.use((err, req, res, next) => {
    return res.json(err)
})


/****************************************** export ********************************************/

module.exports = router;
