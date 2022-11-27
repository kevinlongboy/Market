/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Cart, Order, OrderDetail, Product, ProductImage } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();


/******************************** ROUTES *********************************/
// get all items in cart by current user
router.get('/:userId', async(req, res) => {
    // ^ remember to add pass requireAuth and remove wildcard ^

    let currentUserId = req.params.userId;
    // let currentUser = req.user;
    // let currentUserId = req.user.id;
    let error = {};

    try {

        let getAllCartItems = await Cart.findAll({
            where: { userId: currentUserId },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            raw: true,
        })

        // add product details to every product in array
        for (let j = 0; j < getAllCartItems.length; j++) {
            let product = getAllCartItems[j];

            // modify keys
            product.id = product.productId;
            delete product.productId;
            delete product.userId;

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

        return res
        .status(200)
        .json({
            "userId": parseInt(currentUserId),
            "Cart": getAllCartItems
        })



    } catch (err) {
        error.error = err
        return res.json(error)
    };
});

/***************************** ERROR HANDLER *****************************/

router.use((err, req, res, next) => {
    return res.json(err)
})


/******************************** EXPORTS ********************************/

module.exports = router;
