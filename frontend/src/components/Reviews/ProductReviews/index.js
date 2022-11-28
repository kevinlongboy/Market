/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// local files
import { convertDate } from "../../../component-resources";
import { thunkReadAllProductReviews } from "../../../store/reviewsReducer";
import "./ProductReviews.css"

/******************************* COMPONENT *******************************/
function ProductReviews() {

  /****************** access store *******************/
  const reviewsState = useSelector(state => state.reviews)
  console.log("reviewsState", reviewsState)
  const reviews = Object.values(reviewsState.singleProductReviews)
  console.log("reviews", reviews)

  /************ key into pertinent values ************/
  const { productId } = useParams();

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllProductReviews(productId));
  }, [dispatch])

  /**************** render component *****************/

    return (
      <div className="page-wrapper-container">

        <div id="Reviews-component">

            <h2>Reviews</h2>

            {reviews && reviews.map((review) => (
            <>
              <h3>{review.title}</h3>
              <p>Rating: {review.rating}</p>
              <p>{review.description}</p>
              <p>{review.User.firstName} {review.User.lastName[0]}</p>
              <p>{review.createdAt && convertDate(review.createdAt)}</p>
              <br></br>
            </>
          ))}

        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default ProductReviews
