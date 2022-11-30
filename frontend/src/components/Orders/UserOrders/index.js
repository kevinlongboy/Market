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

      <div id="Orders-component">
        <NavBarAccount user={user} />


          <h1>Orders</h1>

          {orders && orders.map((order) => (
            <>
              <NavLink exact to={`/orders/${order.id}`}>
                <p>Order Number: {order.id}</p>
                <p>Status: {order.status}</p>
                <p>Total: {order.total}</p>
                {/* <p>{order.Products}</p> */}
                <br></br>
              </NavLink>
            </>
          ))}

      </div>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default UserOrders
