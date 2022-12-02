/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// local files
import ProductReviews from "../../Reviews/ProductReviews";
import { thunkReadSingleProductDetails } from "../../../store/productsReducer";
import { thunkReadAllProductReviews } from "../../../store/reviewsReducer";
import { thunkAddSingleProductToCart } from "../../../store/cartReducer";
import "./ProductPage.css"
import AddToCart from "../../Cart/AddToCart";


/******************************* COMPONENT *******************************/
function ProductPage() {

  // When updating qty:
  // - check if delta is > or <
  // - dispatch add or remove (respectively)
  //   - by however many delta


  /****************** access store *******************/
  const productsState = useSelector(state => state.products)
  const reviewsState = useSelector(state => state.reviews);

  /************ key into pertinent values ************/
  const { productId } = useParams()
  const product = productsState.singleProductDetails;
  const productImages = product.ProductImages
  const mainImage = productImages[0]
  console.log("productImages", productImages)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleProductDetails(productId));
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkReadAllProductReviews(productId));
}, [dispatch])


  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">

      <div id="ProductPage-component">


          <div className="UserReviews-directory-container" id="header">
            <NavLink exact to={'/account'} id="UserReviews-Account-redirect-button">
              Account
            </NavLink>
            <p>/</p>
            <p>Rate & review</p>


            <div className="UserReviews-title-container">
                <div className="UserReviews-title">{product.name}</div>
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
              <div className="ProductPage-main-image-container">
                <img src={mainImage.url}></img>
              </div>
            )}

            <AddToCart
              productId={productId}
              text={`Add to cart`}
              cssSelector={"ProductPage-AddToCart-button"}
            />

          </div>


        <div>

          {/* <p>{product && (product.price).toFixed(2)}</p> */}


        <p>{product.description}</p>


        </div>

      <ProductReviews />

      {/* add condition to remove button if users already has reviewed item */}
      <NavLink exact to={`/products/${product.id}/add-review`}><button>Write a review</button></NavLink>

      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default ProductPage
