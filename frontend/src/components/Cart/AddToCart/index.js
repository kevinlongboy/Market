/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// local files
import { thunkAddSingleProductToCart } from "../../../store/cartReducer";
import "./AddToCart.css"


/******************************* COMPONENT *******************************/
function AddToCart({productId, text, cssSelector}) {

    // console.log("productId at AddComponent", productId)
    // console.log("cssSelector at AddComponent", cssSelector)

    /************ reducer/API communication ************/
    const dispatch = useDispatch();


    /***************** handle events *******************/
    function addItem(productId) {

        let productData = {
            productId: productId
        }

        dispatch(thunkAddSingleProductToCart(productData))
    }

    /**************** render component *****************/
    return (
        // <div className="page-wrapper-container">
            // <div id="AddToCart-component">

                <button
                    className="AddToCart-button"
                    id={cssSelector}
                    type="submit"
                    onClick={(e) => addItem(productId)}
                >
                    {text}
                </button>

            // </div>
        // </div>
    )
}


/******************************** EXPORTS ********************************/
export default AddToCart
