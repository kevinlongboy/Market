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
            "Cart": getAllCartItems
        })



    } catch (err) {
        error.error = err
        return res.json(error)
    };
});


// add item to cart
router.post('/:userId', async(req, res) => {
    // ^ remember to add pass requireAuth and remove wildcard ^

    let currentUserId = req.params.userId;
    // let currentUser = req.user;
    // let currentUserId = parseInt(req.user.id);
    let error = {};

    try {
        let { productId } = req.body;

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

        // handle error: missing product
        let findProduct = await Product.findByPk(productId);
        if (!findProduct) {
            error.message = "Product couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);
        }

        // instantiate cart-object
        let postCartProduct = await findProduct.createCart({
            userId: currentUserId,
            productId: productId
        })

        let printCartProduct = await Cart.findByPk(postCartProduct.id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })

        return res
            .status(200)
            .json(printCartProduct)


    } catch (err) {
        error.error = err
        return res.json(error)
    };
});

// should route be specific to cartId?
// remove item from cart
router.delete('/:productId', async(req, res) => {
    // ^ remember to add pass requireAuth and remove wildcard ^

    // let currentUser = req.user;
    // let currentUserId = parseInt(req.user.id);
    let prodId = req.params.productId;

    let error = {};

    try {
        let deleteProduct = await Cart.findOne({
            where: {
                userId: currentUserId,
                productId: prodId
            }
        })

        if (!deleteProduct) {
            error.message = "Product couldn't be found";
            error.status = 404;
            return res.status(404).json(error);
        }

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