/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const REVIEWS_CREATE_SINGLE_REVIEW = 'REVIEWS/CREATE_SINGLE_REVIEW';
const REVIEWS_READ_ALL_PRODUCT_REVIEWS = 'REVIEWS/READ_ALL_PRODUCT_REVIEWS';
const REVIEWS_READ_ALL_USER_REVIEWS = 'REVIEWS/READ_ALL_USER_REVIEWS';
const REVIEWS_UPDATE_SINGLE_REVIEW = 'REVIEWS/UPDATE_SINGLE_REVIEW';
const REVIEWS_DELETE_SINGLE_REVIEW = 'REVIEWS/DELETE_SINGLE_REVIEW';



/**************************** ACTION CREATORS ****************************/
export const actionCreateSingleReview = (newReview) => ({
    type: REVIEWS_CREATE_SINGLE_REVIEW,
    payload: newReview
})

export const actionReadAllProductReviews = (productReviews) => ({
    type: REVIEWS_READ_ALL_PRODUCT_REVIEWS,
    payload: productReviews
});

export const actionReadAllUserReviews = (userReviews) => ({
    type: REVIEWS_READ_ALL_USER_REVIEWS,
    payload: userReviews
});


/***************************** THUNKS (API) ******************************/
export const thunkCreateSingleReview = (productId, createReviewData) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}/reviews`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json'} ,
        body: JSON.stringify(createReviewData)
    });
    console.log("response",response)
    if (response.ok) {
        const newReview = await response.json();
        console.log("newReview", newReview)
        dispatch(actionCreateSingleReview(newReview));
        return newReview;
    }
}

export const thunkReadAllProductReviews = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}/reviews`);
    if (response.ok) {
        const productReviews = await response.json();
        dispatch(actionReadAllProductReviews(productReviews.Reviews))
        return productReviews
    }
}

export const thunkReadAllUserReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/current`);
    if (response.ok) {
        const userReviews = await response.json();
        dispatch(actionReadAllUserReviews(userReviews.Reviews))
        return userReviews
    }
}


/***************************** STATE SHAPE *******************************/
const initialState = {
    singleProductReviews: {},
    allReviewsByUser: {}
}


/******************************* REDUCER *********************************/
const reviewsReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case REVIEWS_CREATE_SINGLE_REVIEW:
            newState.singleProductReviews = {...state.singleProductReviews}
            newState.allReviewsByUser[action.payload.id] = {...action.payload}
            return newState

        case REVIEWS_READ_ALL_PRODUCT_REVIEWS:
            newState.singleProductReviews = normalizeArray(action.payload)
            newState.allReviewsByUser = {...state.allReviewsByUser}
            return newState

        case REVIEWS_READ_ALL_USER_REVIEWS:
            newState.singleProductReviews = {...state.singleProductReviews}
            newState.allReviewsByUser = normalizeArray(action.payload)
            return newState

        default:
            return newState
    }
}

/******************************** EXPORTS ********************************/
export default reviewsReducer;
