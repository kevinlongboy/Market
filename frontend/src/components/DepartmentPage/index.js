/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// local files
import { thunkReadSingleDepartmentDetails } from "../../store/departmentsReducer";
import AddToCart from "../AddToCart";
import "./DepartmentPage.css"


/******************************* COMPONENT *******************************/
function DepartmentPage() {

  /****************** access store *******************/
  const departmentsState = useSelector(state => state.departments)


  // const [thumbnail, setThumbnail] = useState()
  // 'https://target.scene7.com/is/content/Target/GUEST_26eaf754-af71-48ba-9286-d884b7fed1d8'
  // const changeImage = () => {

  // }

  /************ key into pertinent values ************/
  const { departmentId } = useParams()
  const department = departmentsState.singleDepartmentDetails;
  const productsArr = Object.values(department.Products)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleDepartmentDetails(departmentId));
  }, [dispatch, departmentsState])

  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">
      <div id="DepartmentPage-component">

      <div className='DepartmentPage-title'>
        <div>{department.name}</div>
      </div>

      <div className="DepartmentPage-product-quantity-results">
        <p>{productsArr.length} results</p>
      </div>

      <div className="product-card-container">

        {productsArr.map((product) => (
            <div className="product-card">

              <div className="product-card-thumbnail-container">
              <Link
                exact
                to={`/departments/${departmentId}/products/${product.id}`}
              >
                <img
                src={product.previewImage}
                className="product-card-thumbnail"
                // onMouseOver={}
                ></img>
              </Link>
              </div>

            <div
            className="product-card-name-container"
            >
              <Link
                key={`${product.id}`}
                exact
                to={`/departments/${departmentId}/products/${product.id}`}
                className="product-card-name"
                // className="product-card-name-container"
                >
                {/* <p className="product-card-name"> */}
                  {product.name}
                {/* </p> */}
              </Link>
            </div>

            <div className="product-card-brand-container">
              <p className="product-card-brand">Brand</p>
            </div>

            <div className="product-card-price-container">
              <div className="product-card-price">${(product.price).toFixed(2)}</div>
              <div className="product-card-location">When purchased online</div>
            </div>


            <div className="product-card-CartAdd-container">
              <div className="product-card-CartAdd-Shipt-offer">
                <span>Get it as soon as 9am today</span> with Shipt
              </div>

              <div className="product-card-CartAdd-ISPU-offer">
                <span>Ready within 2 hours</span> with pickup
              </div>

              <AddToCart
                productId={product.id}
                text={`Deliver it`}
                cssSelector={"DepartmentPage-AddToCart-button"}
              />
            </div>

          </div>

        ))}
      </div>

      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default DepartmentPage
