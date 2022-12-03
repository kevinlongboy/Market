/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import ProductReviews from "../../Reviews/ProductReviews";
import { thunkReadSingleProductDetails } from "../../../store/productsReducer";
import { thunkReadAllProductReviews } from "../../../store/reviewsReducer";
import { thunkAddSingleProductToCart } from "../../../store/cartReducer";
import { thunkReadSingleDepartmentDetails } from "../../../store/departmentsReducer";
import "./ProductPage.css"
import AddToCart from "../../Cart/AddToCart";


/******************************* COMPONENT *******************************/
function ProductPage() {

  // When updating qty:
  // - check if delta is > or <
  // - dispatch add or remove (respectively)
  //   - by however many delta

  const [rating, setRating] = useState(5)

  /****************** access store *******************/
  const productsState = useSelector(state => state.products)
  const reviewsState = useSelector(state => state.reviews);

  /************ key into pertinent values ************/
  const { productId } = useParams()
  const product = productsState.singleProductDetails;
  const productImages = product.ProductImages
  const mainImage = productImages[0]


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleProductDetails(productId));
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkReadAllProductReviews(productId));
}, [dispatch, reviewsState])


  /**************** render component *****************/
  return (
    <div className="ProductPage-page-wrapper-container">

      <div id="ProductPage-component">



          <div className="ProductPage-header-container">

            <div className="ProductPage-directory-container">
              <NavLink exact to={'/'}>
                Market
              </NavLink>
              <p>/</p>
              <NavLink exact to={`/departments/${product.Department.id}/`}>
              {product.Department.name}
              </NavLink>
            </div>

            <div className="ProductPage-title-container">
                <div className="ProductPage-title">{product.name}</div>
            </div>
          </div>



          <div className="ProductPage-body-container">

            <div className="ProductPage-thumbnails-container">
              {productImages.map((image) => (
                <div className="ProductPage-thumbnail-container">
                  <img src={image.url} id="ProductPage-thumbnail"></img>
                </div>
                ))}
            </div>

            {mainImage && (
              <div id="ProductPage-main-image-container">
                <img src={mainImage.url} id="ProductPage-main-image"></img>
              </div>
            )}



            <div className="ProductPage-review-and-actions-container">

              <div className="ProductPage-price-container">
                <div>${product.price}</div>
                <p>When purchased online</p>
              </div>

              <div className="ProductPage-rating-container">
              <StarRatings
                rating={product.avgRating}
                starRatedColor="#ffd700"
                numberOfStars={5}
                name='rating'
                starDimension='20px'
                starSpacing='0'
              />
                <div id="ProductPage-rating-review-count">{product.numReviews}</div>
              </div>

              <div>
                <AddToCart
                  productId={productId}
                  text={`Add to cart`}
                  cssSelector={"ProductPage-AddToCart-button"}
                  />
              </div>
              </div>

            </div>

        <div>

        <div className="ProductPage-description-container">

          <div className="ProductPage-description-header-container">
            <div>About this item</div>
            <div><p>Details</p></div>
          </div>

          <div className="ProductPage-description-highlights-container">
            <div>Highlights</div>
            <p>{product.description}</p>
          </div>


        </div>


        </div>

      <ProductReviews product={product}/>

      {/* add condition to remove button if users already has reviewed item */}
      <NavLink exact to={`/products/${product.id}/add-review`} id="review-button-link">
        <button id="ProductPage-write-a-review-button">Write a review</button>
      </NavLink>

      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default ProductPage
