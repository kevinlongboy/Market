/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import { thunkReadFavorites } from "../../../store/favoritesReducer";
import AddToCart from "../../Cart/AddToCart";
import Footer from "../../Footer";
import "./UserFavorites.css"


/******************************* COMPONENT *******************************/
function UserFavorites() {

  /****************** access store *******************/
  const favoritesState = useSelector(state => state.favorites)
  console.log("favoritesState", favoritesState)

  /************ key into pertinent values ************/
  const products = favoritesState.allProductsByUser.Products;

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadFavorites());
  }, [dispatch])

  /**************** render component *****************/
  return (
    <>
    <div className="page-wrapper-container">
      <div id="UserFavorites-component">

      <div className='UserFavorites-title'>
        <div><i class="fa-solid fa-heart" id="heart-icon-UserFavorites"></i> {'  '} Favorites</div>

        <div id="UserFavorites-directory-container">
              <NavLink exact to={'/'}>
                Market
              </NavLink>
              <p>/</p>
              <p>Favorites</p>
            </div>
      </div>

      {/* <div className="DepartmentPage-product-quantity-results">
        <p>{productsArr.length} results</p>
      </div> */}

      <div className="product-card-container">

        {products.length > 0 && products.map((product) => (
            <div className="product-card">

            <div className="product-card-thumbnail-container">
            <Link
              exact
              to={`/departments/${product.departmentId}/products/${product.productId}`}
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
                to={`/departments/${product.departmentId}/products/${product.productId}`}
                className="product-card-name"
                // className="product-card-name-container"
                >
                {/* <p className="product-card-name"> */}
                  {product.name}
                {/* </p> */}
              </Link>
            </div>


            <div className="product-card-brand-container">
              <p className="product-card-brand">{product.brand}</p>
            </div>


            <div className="DepartmentPage-rating-container">
              <StarRatings
                rating={product.avgRating}
                starRatedColor="#ffd700"
                numberOfStars={5}
                name='rating'
                starDimension='12px'
                starSpacing='0'
              />
                <div id="DepartmentPage-rating-review-count">{product.numReviews}</div>
              </div>


              <div className="product-card-price-container">
                <div className="product-card-price">${(product.price).toFixed(2)}</div>
                <div className="product-card-location">When purchased online</div>
              </div>


              <div className="product-card-CartAdd-container">
                {/* <div className="product-card-CartAdd-shipping-offer">
                  <span>Get it as soon as 9am next day</span> with Shipt
                </div> */}

                <div className="product-card-CartAdd-shipping-offer">
                  <span>Free shipping</span> with RedCard
                </div>

                <div className="product-card-CartAdd-ISPU-offer">
                  <span>Ready within 2 hours</span> with pickup
                </div>

                <AddToCart
                  productId={product.productId}
                  text={`Add to cart`}
                  cssSelector={"UserFavorites-AddToCart-button"}
                />
              </div>

          </div>

        ))}
      </div>

      </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}


/******************************** EXPORTS ********************************/
export default UserFavorites
