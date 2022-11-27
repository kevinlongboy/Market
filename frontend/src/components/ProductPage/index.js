/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// local files
import { thunkReadSingleProductDetails } from "../../store/productsReducer";
import { thunkAddSingleProductToCart } from "../../store/cartReducer";
import "./ProductPage.css"


/******************************* COMPONENT *******************************/
function ProductPage() {

  // When updating qty:
  // - check if delta is > or <
  // - dispatch add or remove (respectively)
  //   - by however many delta


  /****************** access store *******************/
  const productsState = useSelector(state => state.products)
  console.log("productsState", productsState)


  /************ key into pertinent values ************/
  const { productId } = useParams()
  const product = productsState.singleProductDetails;
  const productImages = product.ProductImages


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleProductDetails(productId));
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
      <button onClick={addItem}>add item to cart</button>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default ProductPage
