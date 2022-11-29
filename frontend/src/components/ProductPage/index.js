/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// local files
import ProductReviews from "../Reviews/ProductReviews";
import { thunkReadSingleProductDetails } from "../../store/productsReducer";
import { thunkReadAllProductReviews } from "../../store/reviewsReducer";
import { thunkAddSingleProductToCart } from "../../store/cartReducer";
import "./ProductPage.css"
import AddToCart from "../AddToCart";


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

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleProductDetails(productId));
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkReadAllProductReviews(productId));
}, [dispatch])

  /***************** handle events *******************/
  function addItem() {

    let productData = {
      productId: productId
    }

    dispatch(thunkAddSingleProductToCart(productData))
  }

  /**************** render component *****************/
  return (
    <div className="page-wrapper-container">

      <div id="ProductPage-component">

          <h1>{product.name}</h1>
          {/* <p>{product && (product.price).toFixed(2)}</p> */}
          <p>{product.description}</p>

          {productImages.map((image) => (
            <img src={image.url}></img>
          ))}
      </div>
      <div>

      <AddToCart
        productId={productId}
        text={`Add to cart`}
        cssSelector={"ProductPage-AddToCart-button"}
        />
      </div>

      <ProductReviews />

      {/* add condition to remove button if users already has reviewed item */}
      <NavLink exact to={`/products/${product.id}/add-review`}><button>Write a review</button></NavLink>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default ProductPage
