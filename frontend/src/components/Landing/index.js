/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// local files
import { thunkReadAllDepartments } from "../../store/departmentsReducer";
import "./Landing.css"
import LandingAdvertDepartmentList from "./LandingAdvertPanels/LandingAdvertDepartmentList";
import LandingAdvertPanelMain from "./LandingAdvertPanels/LandingAdvertPanelMain";


/******************************* COMPONENT *******************************/
function Landing() {

  /****************** access store *******************/
  const departmentsState = useSelector(state => state.departments)
  console.log("departmentsState", departmentsState)

  /************ key into pertinent values ************/
  const allDepartments = Object.values(departmentsState.allDepartments);

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllDepartments());
  }, [dispatch])


  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">

      <div id="Landing-component">

          <LandingAdvertPanelMain />


          <div className="secondary-panels">

          </div>

          <LandingAdvertDepartmentList />
      </div>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default Landing
