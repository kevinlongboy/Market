/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// local files
import { thunkReadAllUserOrders } from "../../../store/ordersReducer";
import NavBarAccount from "../../Navigation/NavBarAccount";
import "./UserOrders.css"

/******************************* COMPONENT *******************************/
function UserOrders() {

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const ordersState = useSelector(state => state.orders)
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

          <div className="UserReviews-directory-container">
              <NavLink exact to={'/account'} id="UserReviews-Account-redirect-button">
                <i class="fa-solid fa-chevron-left"></i>
                Account
              </NavLink>
          </div>

          <div className="UserReviews-title-container">
            <div className="UserReviews-title">Order history</div>
          </div>



            {orders && orders.map((order) => (
              <>

                <div className='blurb-card-title-container'>
                  <div>{order.createdAt}</div>
                  <NavLink
                    exact
                    to={`/orders/${order.id}`}
                    id='blurb-card-title-redirect'
                  >
                    View order
                  </NavLink>
                </div>

                <div className='blurb-card-details-container'>
                  <p>${order.total}</p>
                  <p>Order: {order.id}</p>
                  <div>
                    <i class="fa-solid fa-check"></i>
                    {order.status}
                  </div>
                </div>
              </>

            ))}


      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default UserOrders
