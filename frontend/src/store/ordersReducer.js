/******************************** IMPORTS ********************************/
// local files
import { csrfFetch } from "./csrf";
import { findItemIndex, normalizeArray } from "../component-resources/index";


/********************************* TYPES *********************************/
const ORDERS_READ_ALL_ORDERS = 'ORDERS/READ_ALL_ORDERS';
const ORDERS_CREATE_SINGLE_ORDER = 'ORDERS/CREATE_SINGLE_ORDER';


/**************************** ACTION CREATORS ****************************/
export const actionReadAllOrders = (allOrders) => ({
    type: ORDERS_READ_ALL_ORDERS,
    payload: allOrders
});

export const actionCreateSingleOrder = (newOrder) => ({
    type: ORDERS_CREATE_SINGLE_ORDER,
    payload: newOrder
});


/***************************** THUNKS (API) ******************************/
export const thunkReadAllOrders = () => async (dispatch) => {
    const response = await csrfFetch(`/api/orders`);
    if (response.ok) {
        const allOrders = await response.json();
        dispatch(actionReadAllOrders(allOrders.Orders))
        return allOrders
    }
}

export const thunkCreateSingleOrder = (orderData) => async (dispatch) => {
    console.log("reach")
    const response = await csrfFetch(`/api/orders`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    });
    if (response.ok) {
        const newOrder = await response.json()
        dispatch(actionCreateSingleOrder(newOrder))
        return newOrder;
    }
}


/***************************** STATE SHAPE *******************************/
const initialState = {
    allOrdersByUser: {
        Products: []
    }
}


/******************************* REDUCER *********************************/
const ordersReducer = (state = initialState, action) => {

    let newState = {...state};

    switch (action.type) {

        case ORDERS_READ_ALL_ORDERS:
            newState.allOrdersByUser = normalizeArray(action.payload)
                // newState.allOrdersByUser.Products = [...action.payload.Products]
            return newState

        case ORDERS_CREATE_SINGLE_ORDER:
            console.log(action)
            newState.allOrdersByUser = {...state.allOrdersByUser}
            newState.allOrdersByUser[action.payload.id] = action.payload
            return newState

        default:
            return newState
    }
}

/******************************** EXPORTS ********************************/
export default ordersReducer;
