/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import { thunkAddSingleProductToFavorites, thunkReadFavorites, thunkRemoveSingleProductFromFavorites } from "../../../store/favoritesReducer";
import AddToCart from "../../Cart/AddToCart";
import "./UpdateFavorite.css"


/******************************* COMPONENT *******************************/
function UpdateFavorite({productId}) {

    /****************** access store *******************/
    const favoritesState = useSelector(state => state.favorites)

    /************ key into pertinent values ************/
    const products = favoritesState.allProductsByUser.Products;
    // const products = []; // uncomment to test for condition (no favorites)

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkReadFavorites());
    }, [dispatch])

    /************* conditional components **************/


    /***************** handle events *******************/
    function dispatchAppropriateThunk(productId) {

        const alreadyFavorite = products.find(obj => obj.productId == productId)
        console.log("alreadyFavorite", alreadyFavorite)

        let productData = {
            productId: productId
        }
        console.log("productData", productData)

        alreadyFavorite ? dispatch(thunkRemoveSingleProductFromFavorites(alreadyFavorite.favoriteId)) : dispatch(thunkAddSingleProductToFavorites(productData))
    }

    /**************** render component *****************/
    return (
        <>
            <button
                className="AddToCart-button"
                // id={cssSelector}
                type="submit"
                onClick={(e) => dispatchAppropriateThunk(productId)}
            >
                favorite
            </button>
        </>
    )
}


/******************************** EXPORTS ********************************/
export default UpdateFavorite
