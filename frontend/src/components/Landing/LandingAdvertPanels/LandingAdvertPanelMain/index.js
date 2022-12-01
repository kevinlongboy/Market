/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import { thunkReadSingleDepartmentDetails } from "../../../../store/departmentsReducer";
import './LandingAdvertPanelMain.css'


/******************************* COMPONENT *******************************/
function LandingAdvertPanelMain() {

  /****************** access store *******************/
  const departmentsState = useSelector(state => state.departments)
  console.log("departmentsState", departmentsState)

  /************ key into pertinent values ************/
  const department = departmentsState.singleDepartmentDetails;
  console.log("department", department)
  const products = Object.values(department.Products)
  console.log("products", products)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleDepartmentDetails(4));
  }, [dispatch])


  /**************** render component *****************/
  return (

      <div id="LandingAdvertPanelMain-component">

        <div className="LandingAdvertPanelMain-title-container">
            <div className="LandingAdvertPanelMain-title">Holiday <span style={{color:'#fff'}}>deals</span></div>
            <div className="LandingAdvertPanelMain-subtitle">Score incredible deals on holiday must-haves</div>
            {/* <div><button>Get the deals now</button></div> */}
        </div>

        <div className="LandingAdvertPanelMain-panel">
            <div className="main-panel-scroll-title">
                <p>Holiday</p>
                <p>Top Picks</p>
            </div>

            <div className="main-panel-list">
            {products && products.map((product) => (

                <div className="main-panel-list-item-container">
                    <NavLink
                    exact
                    to={`/departments/${product.departmentId}/products/${product.id}`}
                    >
                        <img
                            src={product.previewImage}
                            id="LandingAdvertPanelMain-thumbnail">
                        </img>
                        <div id="main-panel-list-item-price">${product.price}</div>
                        <div id="main-panel-list-item-name">{product.name}</div>
                    </NavLink>
                </div>
            ))}
            </div>

        </div>



      </div>
  )
}


/******************************** EXPORTS ********************************/
export default LandingAdvertPanelMain
