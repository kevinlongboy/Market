/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// local files
import { thunkReadCart } from "../../store/cartReducer";
import { thunkCreateSingleOrder, thunkReadAllOrders } from "../../store/ordersReducer";
import "./Checkout.css"

/******************************* COMPONENT *******************************/
function Checkout() {

  /****************** access store *******************/
  const cartState = useSelector(state => state.cart.allProductsByUser)
  console.log("cartState", cartState)
  const ordersState = useSelector(state => state.orders)

  /************ key into pertinent values ************/
  const total = cartState.subtotal
  console.log("total", total)
  const products = cartState.Products
  console.log("products", products)


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadCart());
  }, [dispatch, cartState])

  useEffect(() => {
    dispatch(thunkReadAllOrders());
  }, [dispatch])


  /***************** handle events *******************/
  function placeOrder(){

    let orderData = {
      total: total,
      products: products,
    }

    dispatch(thunkCreateSingleOrder(orderData))
  }


  /**************** render component *****************/
    return (
      <div className="page-wrapper-container">

        <div id="Checkout-component">

            <h1>Checkout</h1>

            {products.map((product) => (
              <>
                <p>{product.name}</p>
              </>
            ))}
            <p>Total: {total}</p>



            <button onClick={placeOrder}>Place Order</button>
        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default Checkout
