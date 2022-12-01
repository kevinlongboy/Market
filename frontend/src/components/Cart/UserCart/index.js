/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// local files
import { thunkReadCart, thunkRemoveSingleProductFromCart } from "../../../store/cartReducer";
import "./UserCart.css"

/******************************* COMPONENT *******************************/
function UserCart() {

    // When updating qty:
    // - check if delta is > or <
    // - dispatch add or remove (respectively)
    //   - by however many delta


  /****************** access store *******************/
  const cartState = useSelector(state => state.cart)
  const products = Object.values(cartState.allProductsByUser.Products)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadCart());
  }, [dispatch, cartState])

  /***************** handle events *******************/
  function removeItem(cartId) {
    dispatch(thunkRemoveSingleProductFromCart(cartId),
    [dispatch])
  }

  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">

      <div id="Cart-component">

          <h1>Cart</h1>
          {products && products.map((product) => (
            <>
              <p>{product.name}</p>
              <button onClick={(e) => removeItem(product.cartId)}>remove from cart</button>
            </>
          ))}
          <p>{cartState && cartState.allProductsByUser.subtotal}</p>
      </div>
      <NavLink exact to={`/checkout`}>
        <button>Continue to Checkout</button>
      </NavLink>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default UserCart