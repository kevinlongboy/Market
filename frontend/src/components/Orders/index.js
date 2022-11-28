/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// local files
import { thunkReadAllOrders } from "../../store/ordersReducer";
import "./Orders.css"

/******************************* COMPONENT *******************************/
function Orders() {

  /****************** access store *******************/
  const ordersState = useSelector(state => state.orders)
  console.log("ordersState", ordersState)
  const orders = Object.values(ordersState.allOrdersByUser)
  console.log("orders", orders)


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllOrders());
  }, [dispatch])

  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">

      <div id="Orders-component">

          <h1>Orders</h1>
          {orders && orders.map((order) => (
            <>
              <p>Order Number: {order.id}</p>
              <p>Status: {order.status}</p>
              <p>Total: {order.total}</p>
              {/* <p>{order.Products}</p> */}
              <br></br>
            </>
          ))}
      </div>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default Orders
