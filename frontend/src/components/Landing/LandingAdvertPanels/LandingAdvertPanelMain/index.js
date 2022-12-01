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
      dispatch(thunkReadSingleDepartmentDetails(5));
  }, [dispatch])


  /**************** render component *****************/
  return (

      <div id="LandingAdvertPanelMain-component">

        <div className="LandingAdvertPanelMain-title">
            <div>Holiday deals</div>
            <div>Score incredible deals on holiday must-haves</div>
            <div><button>Get the deals now</button></div>
        </div>

        <div className="LandingAdvertPanelMain-panel">
            <div>Holiday Top Picks</div>

            <div>
            {products && products.map((product) => (
                <div>
                    <img
                        src={product.previewImage}
                        id="LandingAdvertPanelMain-thumbnail">
                    </img>
                    <div>{product.price}</div>
                    <div>{product.name}</div>
                </div>
            ))}

            </div>
        </div>



      </div>
  )
}


/******************************** EXPORTS ********************************/
export default LandingAdvertPanelMain
