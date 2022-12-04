/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useParams } from "react-router-dom";
// local files
import cartReducer, { thunkReadCart, thunkRemoveSingleProductFromCart } from "../../../store/cartReducer";
import RemoveFromCart from "../RemoveFromCart";
import "./UserCart.css"

/******************************* COMPONENT *******************************/
function UserCart() {

    // When updating qty:
    // - check if delta is > or <
    // - dispatch add or remove (respectively)
    //   - by however many delta


  /****************** access store *******************/
  const cart = useSelector(state => state.cart.allProductsByUser)
  const products = Object.values(cart.Products)
  console.log("products", products)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadCart());
  }, [dispatch, cart])

  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">

      <div id="Cart-component">

        <div className="Cart-left-panel">



        <div className="Cart-head-container">
          <div className="Cart-title">Cart</div>
          <div className="Cart-details-container">
            <div>${cart && cart.subtotal} subtotal</div>
            <div>●</div>
            <div>{products.length} items</div>
          </div>
        </div>



        <div className='Cart-card-container'>

          <div className='Cart-card-title-container'>
              <div id="Cart-title-shipping">Shipping</div>
              <div id="Cart-title-total">{products.length} items</div>
          </div>


          <div className="Cart-list-container">
          {products && products.map(product => (
            <div className='Cart-list-item-container'>

              <div className='Cart-list-item-container-left'>

                <div className='Cart-list-item-thumbnail-container'>
                  <NavLink exact to={`/departments/${product.departmentId}/products/${product.productId}`}>
                      <img src={product.previewImage} className="Cart-list-item-thumbnail"></img>
                  </NavLink>
                </div>

                <div className="Cart-list-item-itemization-container">
                  <div>
                    <NavLink exact to={`/departments/${product.departmentId}/products/${product.productId}`} id="Cart-product-list-itemization-name">
                      <div id="Cart-product-list-itemization-name">{product.name}</div>
                    </NavLink>
                  </div>

                  <div className="Cart-product-list-item-qty">Qty 1</div>
                </div>

              </div>


              <div className='Cart-list-item-container-right'>
                <div className="Cart-product-list-price">${product.price}</div>
                <div className="Cart-product-remove-item-button-container">
                  <RemoveFromCart
                    cartId={product.cartId}
                    text={<i class="fa-solid fa-xmark"></i>}
                    cssSelector={'UserCart-RemoveFromCart-button'}
                  />
                  </div>
              </div>

            </div>
          ))}
          </div>


        </div>


      </div>



      <div className="Cart-right-panel">
        <div className="Cart-total-container">

            <div className="Cart-total-at-a-glance">
              <div>Order summary</div>
            </div>

            <div className="Cart-subtotal-breakdown">

            <div className="Cart-subtotal-item">
              <div>Subtotal ({products.length} items)</div>
              <div>${cart && cart.subtotal}</div>
            </div>

            <div className="Cart-subtotal-item" id="Cart-subtotal-tax-item">
              <div>Estimated Tax</div>
              <div>$0.00</div>
            </div>

            <div className="Cart-total-grandtotal">
              <div>Total</div>
              <div>${cart && cart.subtotal}</div>
            </div>

          </div>
        </div>


        <div className="Cart-checkout-button-container">
          <NavLink exact to={`/checkout`}>
            <button
            className='Cart-checkout-button'
            id='Cart-checkout-button'
            >
              Check out
            </button>
          </NavLink>
        </div>

        </div>
      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default UserCart
