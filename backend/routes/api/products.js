/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Department, Product, ProductImage, Review, User } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();


/******************************** ROUTES *********************************/
// Get all reviews by Product
router.get('/:productId/reviews', async(req, res) => {

    let currProdId = req.params.productId;
    let error = {};

    try {
        // handle error: missing product
        let findProduct = await Product.findByPk(currProdId, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        });
        if (!findProduct) {
            error.message = "Product couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);
        }

        let findAllProductReviews = await Review.findAll({
            where: { productId: currProdId },
            raw: true,
        })

        // add User-key
        for (let i = 0; i < findAllProductReviews.length; i++) {
            let review = findAllProductReviews[i];
            let userData = await User.findByPk(review.userId, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
            });
            review.User = userData;
        }

        return res
            .status(200)
            .json(findAllProductReviews)


    } catch (err) {
        error.error = err;
        return res.json(error);
    };
})


// Get single product details
router.get('/:productId', async(req, res) => {

    let currProdId = req.params.productId;
    let error = {};

    try {
        let findProduct = await Product.findByPk(currProdId, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        });

        if (!findProduct) {
            error.message = "Product couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);

        } else {

            // add numReviews-key
            let reviewCount = await Review.count({
                where: { productId: currProdId},
                raw: true,
            });
            reviewCount ? findProduct.numReviews = reviewCount : findProduct.numReviews = 0 // key into "dataValues" before numReviews?

            // add avgRating-key
            let ratingsSum = await Review.sum('rating', {
                where: { productId: currProdId},
                raw: true,
            });
            let ratingAvg = ratingsSum / reviewCount;
            ratingAvg ? findProduct.avgRating = ratingAvg : findProduct.avgRating = 0

            // add Department-key
            let deptData = await Department.findByPk(findProduct.departmentId, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true,
            })
            findProduct.Department = deptData
            delete findProduct.departmentId

            // add ProductImages-key
            let images = await ProductImage.findAll({
                where: { productId: currProdId },
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true,
            })
            findProduct.ProductImages = images

            return res
                .status(200)
                .json(findProduct)
        }

    } catch (err) {
        error.error = err;
        return res.json(error);
    };
});



/***************************** ERROR HANDLER *****************************/
router.use((err, req, res, next) => {
    return res.json(err)
})


/******************************** EXPORTS ********************************/
module.exports = router;
