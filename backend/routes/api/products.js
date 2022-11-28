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

const validateReview = [
    check('review')
        // .exists({ checkFalsy: true })
        .isLength({ min: 5 })
        .withMessage("Please write a longer review."),
    check('review')
        // .exists({ checkFalsy: true })
        .isLength({ max: 500 })
        .withMessage("Please write a shorter review."),
    check('stars')
        .exists({ checkFalsy: true })
        .withMessage("Stars must be an integer from 1 to 5."),
    handleValidationErrors
]


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
            order: [['id', 'DESC']],
            raw: true,
        })
        console.log("findAllProductReviews", findAllProductReviews)


        // add User-key
        for (let i = 0; i < findAllProductReviews.length; i++) {
            let review = findAllProductReviews[i];
            let userData = await User.findByPk(review.userId, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true,
            });
            review.User = userData;
        }
        console.log("findAllProductReviews", findAllProductReviews)


        return res
            .status(200)
            .json({
                "Reviews": findAllProductReviews
            })


    } catch (err) {
        error.error = err;
        return res.json(error);
    };
})


// Create a review for a Product
router.post('/:productId/reviews', requireAuth, async(req, res) => {
    // add validateReview ^

    let currentUser = req.user;
    let currentUserId = req.user.id;
    let currProdId = req.params.productId;
    let error = {};

    try {
        let { rating, title, description } = req.body;

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

        // handle error: missing fields
        const validationErrorMessages = []
        if (!rating) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Rating must be an integer from 1 to 5.")
        }
        if (!title) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Please write a longer title.")
        }
        if (!description) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Please write a longer review.")
        }
        if (error.message) {
            error.errors = validationErrorMessages;
            return res.status(400).json(error)
        }

        // handle error: review exits
        let reviewExists = await Review.findAll({ // returns array of review for req. spot
            where: { userId: currentUserId, productId: currProdId }
        });
        if (reviewExists.length > 0) {
            error.message = "Validation Error";
            error.statusCode = 403;
            validationErrorMessages.push("User already has a review for this product");
            error.errors = validationErrorMessages;
            return res.status(403).json(error)
        }

        // instantiate review
        let postReview = await currentUser.createReview({
            productId: parseInt(currProdId),
            userId: currentUserId,
            rating: rating,
            title: title,
            description: description,
        })
        postReview.save();

        let printReview = await Review.findByPk(postReview.id, {
            raw: true,
        })
        console.log("printReview", printReview)

        // add User-key
        // let userData = await User.findByPk(currentUserId, {
        //     attributes: {
        //         exclude: ['email', 'hashedPassword', 'createdAt', 'updatedAt']
        //     },
        //     raw: true,
        // });
        // printReview.User = userData;

        // add Product-key
        printReview.Product = findProduct;

        // add ProductImages-key
        let image = await ProductImage.findOne({
            where: { productId: currProdId },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        })
        printReview.Product.previewImage = image

        return res
            .status(201)
            .json(printReview)

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
        // handle error: missing spot
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
