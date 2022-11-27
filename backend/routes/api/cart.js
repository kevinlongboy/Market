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
// Get all items in cart by current user
router.get('/', requireAuth, async(req, res) => {
    // ^ remember to add pass requireAuth and remove wildcard ^
    // let currentUserId = req.params.userId;

    let currentUser = req.user;
    let currentUserId = req.user.id;
    let error = {};

    try {

        let getAllCartItems = await Cart.findAll({
            where: { userId: currentUserId },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            raw: true,
        })

        let subtotal = 0;

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

            // update subtotal
            subtotal += product.price;
        }

        return res
        .status(200)
        .json({
            "userId": parseInt(currentUserId),
            "subtotal": subtotal,
            "Products": getAllCartItems
        })



    } catch (err) {
        error.error = err
        return res.json(error)
    };
});

// Add item to cart
router.post('/', requireAuth, async(req, res) => {

    let currentUser = req.user;
    let currentUserId = parseInt(req.user.id);
    let error = {};

    try {
        let { productId } = req.body;
        productId = parseInt(productId)

        // handle error: missing fields
        const validationErrorMessages = []
        if (!productId) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Product ID is required.")
        }
        if (error.message) {
            error.errors = validationErrorMessages;
            return res.status(400).json(error);
        }

        let findProduct = await Product.findByPk(productId, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            raw: true,
        });
        console.log("findProduct >>", findProduct)

        // handle error: missing product
        if (!findProduct) {
            error.message = "Product couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);
        }

        // instantiate cart-object
        let postCartProduct = await Cart.create({
            userId: currentUserId,
            productId: productId
        });
        postCartProduct.save();

        // add previewImage-key
        let prevImage = await ProductImage.findOne({
            where: { productId: findProduct.id },
            raw: true
        });
        let prevUrl = prevImage.url;
        findProduct.previewImage = prevUrl

        return res
            .status(200)
            .json(findProduct)


    } catch (err) {
        error.error = err
        return res.status(404).json(error)
    };
});

// Remove item from cart
// should route be specific to cartId?
router.delete('/:productId', requireAuth, async(req, res) => {

    let currentUser = req.user;
    let currentUserId = parseInt(req.user.id);
    let prodId = req.params.productId
    let error = {};

    try {
        let deleteProduct = await Cart.findOne({
            where: {
                userId: currentUserId,
                productId: prodId
            }
        })

        // handle error: missing product
        if (!deleteProduct) {
            error.message = "Product couldn't be found";
            error.status = 404;
            return res.status(404).json(error);
        }

        // delete record
        deleteProduct.destroy();
        deleteProduct.save();

        return res
            .status(200)
            .json({
                "message": "Successfully deleted",
                "statusCode": 200
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
