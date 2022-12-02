/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { thunkReadSingleProductDetails } from "../../../store/productsReducer";
// local files
import './CartConfirmationModal.css'


/******************************* COMPONENT *******************************/
function CartConfirmationModal({productId}) {

/****************** access store *******************/
  const product = useSelector(state => state.products.singleProductDetails)

  /************ key into pertinent values ************/
  const images = Object.values(product.ProductImages)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(thunkReadSingleProductDetails(productId));
    }, [dispatch])

  /***************** handle events *******************/
  const history = useHistory();

  /**************** render component *****************/
  return (
    <>
        <div className="CartConfirm-modal-container">

          <div className="CartConfirm-modal-title-container">
            <p>Added to Cart</p>
          </div>

          <div className="CartConfirm-modal-body-container">

            <div className="CartConfirm-modal-product-details">
                {images && (
                    <img src={images[0].url} id="CartConfirm-modal-product-thumbnail"></img>
                )}
                <p id="CartConfirm-modal-product-name">{product.name}</p>
            </div>

            <div className="CartConfirm-modal-buttons">


            <button
              type="submit"
              className='CartConfirm-button'
              id='CartConfirm-shopping-button'
              >
                Continue shopping
              </button>

            <div>
                <NavLink exact to={`/cart`}>
                    <button
                    className='CartConfirm-button'
                    id='CartConfirm-proceed-button'
                    >
                        View cart & check out
                    </button>
                </NavLink>
            </div>

            </div>

          </div>
        </div>
    </>
  );
}


/******************************** EXPORTS ********************************/
export default CartConfirmationModal;


// ✨
// can also be reused in lieu of NavBarAccount
// this component would require receiving an object of classNames/css selectors
// via props
// to render different styling depending on which component is wrapping it
// IE: if this component appears a modal or inline/same z-index
