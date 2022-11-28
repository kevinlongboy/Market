/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// local files
import { thunkReadSingleDepartmentDetails } from "../../store/departmentsReducer";
import "./DepartmentPage.css"


/******************************* COMPONENT *******************************/
function DepartmentPage() {

  /****************** access store *******************/
  const departmentsState = useSelector(state => state.departments)

  /************ key into pertinent values ************/
  const { departmentId } = useParams()
  const department = departmentsState.singleDepartmentDetails;
  const productsArr = Object.values(department.Products)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleDepartmentDetails(departmentId));
  }, [dispatch])

  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">

      <div id="DepartmentPage-component">

          <h1>{department.name}</h1>
          {productsArr.map((product) => (
            <>
              <Link
                key={`${product.id}`}
                to={`/departments/${departmentId}/products/${product.id}`}
              >
              <h2>{product.name}</h2>

              </Link>

              <p>{(product.price).toFixed(2)}</p>
              <p>{product.description}</p>
            </>
          ))}
      </div>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default DepartmentPage
