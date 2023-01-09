/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const PRODUCTS_READ_SINGLE_PRODUCT_DETAILS = 'PRODUCTS/READ_SINGLE_PRODUCT_DETAILS';


/**************************** ACTION CREATORS ****************************/
export const actionReadSingleProductDetails = (singleProductDetails) => ({
    type: PRODUCTS_READ_SINGLE_PRODUCT_DETAILS,
    payload: singleProductDetails
});


/***************************** THUNKS (API) ******************************/
export const thunkReadSingleProductDetails = (productId) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}`);
    if (response.ok) {
        const singleProductDetails = await response.json();
        dispatch(actionReadSingleProductDetails(singleProductDetails))
        return singleProductDetails
    }
}


/***************************** STATE SHAPE *******************************/
const initialState = {
    singleProductDetails: {
        Department: {},
        ProductImages: {}
    }
}


/******************************* REDUCER *********************************/
const productsReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case PRODUCTS_READ_SINGLE_PRODUCT_DETAILS:
            newState.singleProductDetails = {...action.payload}
                newState.singleProductDetails.Department = {...action.payload.Department}
                const normalizeImgs = normalizeArray(action.payload.ProductImages)
                const copyArr = Object.values(normalizeImgs)
                newState.singleProductDetails.ProductImages = copyArr
            return newState

        default:
            return newState
    }

}


/******************************** EXPORTS ********************************/
export default productsReducer;
