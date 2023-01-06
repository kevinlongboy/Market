/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
import ImageGallery from 'react-image-gallery';
// local files
import { Modal } from "../../../context/Modal";
import "./ProductPage.css"
import ProductReviews from "../../Reviews/ProductReviews";
import { thunkReadSingleProductDetails } from "../../../store/productsReducer";
import { thunkReadAllProductReviews, thunkReadAllUserReviews } from "../../../store/reviewsReducer";
import { thunkAddSingleProductToCart } from "../../../store/cartReducer";
import { thunkReadSingleDepartmentDetails } from "../../../store/departmentsReducer";
import AddToCart from "../../Cart/AddToCart";
import UpdateFavorite from "../../Favorites/UpdateFavorite";


/******************************* COMPONENT *******************************/
function ProductPage() {

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const product = useSelector(state => state.products.singleProductDetails)
  const productImages = useSelector(state => state.products.singleProductDetails.ProductImages)
  // console.log("productImages", productImages)
  const reviewsState = useSelector(state => state.reviews);

  /************ key into pertinent values ************/
  const { productId } = useParams()
  const mainImage = productImages[0]
  // reviews
  const userReviews = Object.values(reviewsState.allReviewsByUser)
  let alreadyReviewedByUser = userReviews.find((review) => review.productId == productId)
  // images for modal
  // const images = [];
  // productImages.forEach((obj) =>  {
  //   let image = {}
  //   image.original = obj.url
  //   image.thumbnail = obj.url
  //   images.push(image)
  // })
  // console.log("images", images)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleProductDetails(productId));
  }, [dispatch, product])

  useEffect(() => {
    dispatch(thunkReadAllProductReviews(productId));
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkReadAllUserReviews());
  }, [dispatch])

  /****************** manage state *******************/
  const [showModal, setShowModal] = useState(false);

  /************* conditional components **************/
  let displayReviewButton
  if (user == null) {
    displayReviewButton = (
      <></>
      // <NavLink exact to={`/reviews/${alreadyReviewedByUser.id}/edit`} id="review-button-link">
      //   <button id="ProductPage-write-a-review-button">Edit review</button>
      // </NavLink>
      )
  } else if (user && alreadyReviewedByUser ) {
    displayReviewButton = (
    <></>
    )
  } else {
    displayReviewButton = (
      <NavLink exact to={`/products/${product.id}/add-review`} id="review-button-link">
        <button id="ProductPage-write-a-review-button">Write a review</button>
      </NavLink>
    )
  }


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
              {productImages.length > 0 && productImages.map((image) => (
                <div className="ProductPage-thumbnail-container">
                  <img src={image.url} id="ProductPage-thumbnail"></img>
                </div>
                ))}
            </div>

            {mainImage && (
              <div id="ProductPage-main-image-container">
                <img
                  src={mainImage.url}
                  id="ProductPage-main-image"
                >
                </img>

                {/* <Modal onClose={() => setShowModal(false)}>
                  <ImageGallery items={images} showPlayButton={false} />
                </Modal> */}

                <div id="ProductPage-UpdateFavorite-button">
                  <UpdateFavorite productId={productId}/>
                </div>
              </div>
            )}



            <div className="ProductPage-review-and-actions-container">

                <div className="ProductPage-price-container">
                  <div>{product && `$${parseInt(product.price).toFixed(2)}`}</div>
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

        <div className="random-div">

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

      <ProductReviews product={product} reviewsState={reviewsState}/>
        {displayReviewButton}
      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default ProductPage
