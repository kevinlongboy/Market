/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useHistory, useParams } from "react-router-dom";
// local files
import { thunkReadCart } from "../../store/cartReducer";
import { thunkCreateSingleOrder, thunkReadAllUserOrders } from "../../store/ordersReducer";
import "./Checkout.css"

/******************************* COMPONENT *******************************/
function Checkout() {

  /****************** access store *******************/
  const cartState = useSelector(state => state.cart.allProductsByUser)
  const user = useSelector(state => state.session.user)

  /************ key into pertinent values ************/
  const total = cartState.subtotal
  const products = Object.values(cartState.Products)


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadCart());
  }, [dispatch, cartState])


  /***************** handle events *******************/
  const history = useHistory()
  const placeOrder = async (e) => {

    e.preventDefault();

    let errors = [];

    let orderData = {
      total: total,
      products: products,
    }

    const newOrder = await dispatch(thunkCreateSingleOrder(orderData)).catch(
      async (res) => {

          const data = await res.json();

          if (data && data.errors) {
              data.errors.forEach(message => errors.push(message));
              // setValidationErrors(errors);
          }
      }
    )

    if (newOrder) {
      console.log("newOrder", newOrder);
        history.push(`/order-confirmation/${newOrder.id}`)
    }
  }


  /**************** render component *****************/
  if (products && products.length < 1) return <Redirect to='/cart'></Redirect>

  return (
      <div className="Checkout-page-wrapper-container">
        <div id="Checkout-component">

          <div className="Checkout-left">
            <div className="Checkout-product-list-card">

              <div className="Checkout-product-list-header-container">
                <div className="Checkout-product-list-text-container">
                  <i class="fa-solid fa-cart-shopping" id="Checkout-cart-icon"></i>
                  <div>
                    <div className="Checkout-product-list-header">Cart</div>
                    <div className="Checkout-details-container">
                      <div>${cartState && cartState.subtotal} subtotal</div>
                      <div>●</div>
                      <div>{products.length} items</div>
                    </div>
                  </div>
                </div>

                <div>
                  <NavLink exact to={`/cart`} id="Checkout-edit-button">Edit</NavLink>
                </div>
              </div>

              <div className="product-list-thumbnail-container">
                {products && products.map((product) => (
                    <img src={product.previewImage} className="product-list-thumbnail"></img>
                ))}
              </div>
            </div>
          </div>



          <div className="Checkout-right">
            <div className="Checkout-total-container">

              <div className="Checkout-total-at-a-glance">
                <div>Order summary</div>
              </div>

              <div className="Checkout-subtotal-breakdown">
                <div className="Checkout-subtotal-item">
                  <div>Subtotal ({products.length} items)</div>
                  <div>${cartState && cartState.subtotal}</div>
                </div>

                <div className="Checkout-subtotal-item" id="Checkout-subtotal-tax-item">
                  <div>Estimated Tax</div>
                  <div>$0.00</div>
                </div>

                <div className="Checkout-total-grandtotal">
                  <div>Total</div>
                  <div>${cartState && cartState.subtotal}</div>
                </div>
              </div>

              <div className="Checkout-disclaimer-wrapper">
                <div className="Checkout-disclaimer">
                  <div>
                    By placing an order, you agree to Market's{' '}
                    <span><a href="https://www.target.com/c/terms-conditions/-/N-4sr7l">terms</a></span>
                    {' '}and{' '}
                    <span><a href="https://www.target.com/c/target-privacy-policy/-/N-4sr7p">privacy policy</a></span>
                  </div>
                </div>
              </div>

              <div className="Checkout-checkout-button-container">
                <button
                  onClick={placeOrder}
                  className='Checkout-checkout-button'
                  id='Checkout-checkout-button'
                  >Place Order</button>
              </div>

              <div className="Checkout-disclaimer-wrapper">
                <div className="Checkout-disclaimer">
                  <div>Order confirmation and updates will be emailed to {user && user.email}
                </div>
              </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    )
}


/******************************** EXPORTS ********************************/
export default Checkout
