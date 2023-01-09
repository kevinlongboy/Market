/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import { thunkReadAllDepartments } from "../../../../store/departmentsReducer";
import './LandingAdvertDepartmentList.css'


/******************************* COMPONENT *******************************/
function LandingAdvertDepartmentList() {

  /****************** access store *******************/
  const departmentsState = useSelector(state => state.departments)

  /************ key into pertinent values ************/
  const allDepartments = Object.values(departmentsState.allDepartments);

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllDepartments());
  }, [dispatch])


  /**************** render component *****************/
  return (

      <div id="LandingAdvertDepartmentList-component">

          <div className="LandingAdvertDepartmentList-title">Categories</div>

          <div className="department-card-container">
            {allDepartments && allDepartments.map((dept) => (
                <div className="department-card">

                    <NavLink
                        key={`${dept.id}`}
                        to={`/departments/${dept.id}`}
                        className="department-card"
                        >

                        <img
                        src={dept.url}
                        className='department-card-thumbnail'
                        >
                        </img>
                        {dept.name}
                    </NavLink>
                </div>
            ))}
          </div>

      </div>
  )
}


/******************************** EXPORTS ********************************/
export default LandingAdvertDepartmentList
