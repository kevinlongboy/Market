/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { convertExactDate, normalizeArray } from "../../../component-resources";
// local files
import { thunkReadAllUserOrders } from "../../../store/ordersReducer";
import "./UserOrders.css"

/******************************* COMPONENT *******************************/
function UserOrders() {

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const ordersState = useSelector(state => state.orders)

  /************ key into pertinent values ************/
  const orders = Object.values(ordersState.allOrdersByUser)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllUserOrders());
  }, [dispatch])


  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">

      <div id="UserOrders-component">
          {/* <NavBarAccount user={user} /> */}

          <div className="UserOrders-directory-container">
              <NavLink exact to={'/account'} id="UserOrders-Account-redirect-button">
                <i class="fa-solid fa-chevron-left"></i>
                Account
              </NavLink>
          </div>

          <div className="UserOrders-title-container">
            <div className="UserOrders-title">Order history</div>
            <div className="UserOrders-title-location">Online</div>
          </div>

          <div className="UserOrders-cards-list-container">

            {orders && orders.map((order) => {

              return (

                <div className='UserOrders-card-container'>

                <div className='UserOrders-card-title-container'>
                  <div>{convertExactDate(order.createdAt)}</div>

                  <NavLink
                    exact
                    to={`/orders/${order.id}`}
                    id='UserOrders-card-title-redirect'
                    >
                    View order
                  </NavLink>
                </div>

                <div className='UserOrders-card-details-container'>
                  <p>${order.total}</p>
                  <p>Order: {order.id}</p>
                  <div>
                    <i class="fa-solid fa-check"></i>
                    {order.status}
                  </div>
                </div>

                <div className="UserOrders-card-thumbnail-container">
                {order && Object.values(order.Products).map(product => {
                  console.log("product", product)
                  return (

                    <NavLink exact to={`/departments/${product.departmentId}/products/${product.id}`}>
                        <img src={product.previewImage} className="UserOrders-card-thumbnail"></img>
                      </NavLink>
                    )
                  })}
                </div>

              </div>
          )
          })}
          </div>


      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default UserOrders
