/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Order, OrderDetail, Product, ProductImage, Review, User } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();


/******************************** ROUTES *********************************/
// Get all orders by current user
router.get('/current', requireAuth, async(req, res) => {

    let currentUser = req.user;
    let currentUserId = req.user.id;
    let error = {};

    try {
        let getCurrentUserReviews = await Review.findAll({ // returns array of review-objects
            where: { userId: currentUserId },
            order: [['id']],
            raw: true,
        });

        for (let i = 0; i < getCurrentUserReviews.length; i++) {
            let review = getCurrentUserReviews[i];

            // add Product-key
            let productData = await Product.findByPk(review.productId, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
            });
            review.Product = productData;

            // add previewImage-key to every product
            let prevImage = await ProductImage.findOne({
                where: { productId: review.Product.id },
                raw: true
            });
            let prevUrl = prevImage.url;
            review.Product.previewImage = prevUrl
        }

        return res
            .status(200)
            .json(getCurrentUserReviews)


    } catch (err) {
        error.error = err;
        return res.json(error);
    };
})


/***************************** ERROR HANDLER *****************************/

router.use((err, req, res, next) => {
    return res.json(err)
})


/******************************** EXPORTS ********************************/

module.exports = router;
