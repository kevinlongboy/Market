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
function ProductReviews({product}) {

  /****************** access store *******************/
  const reviewsState = useSelector(state => state.reviews)

  /************ key into pertinent values ************/
  const reviews = Object.values(reviewsState.singleProductReviews)
  console.log("reviews", reviews)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllProductReviews(product.id));
  }, [dispatch])

  /**************** render component *****************/

    return (

        <div id="Reviews-component">

          <div className="Reviews-ratings-blurb-container">
            <h2>Guest Ratings & Reviews</h2>
            <div>{product.avgRating}</div>
            <p>{product.numReviews} start ratings</p>
          </div>


        <div className="Reviews-ratings-count-container">
          We found {product.numReviews}  matching reviews
        </div>

        <div className="Reviews-list-container">

            {reviews && reviews.map((review) => (
              <div className="Reviews-list-item-container">
                <div id="Reviews-list-item-title">{review.title}</div>

                <p id="Reviews-list-item-rating">Rating: {review.rating}</p>

                <div id="Reviews-list-item-user-info">
                  <p>{review.User.firstName} {review.User.lastName[0]}</p>
                  <p>{review.createdAt && convertDate(review.createdAt)}</p>
                </div>

                <p id="Reviews-list-item-user-description">{review.description}</p>
            </div>
          ))}
          </div>

        </div>

    )
}


/******************************** EXPORTS ********************************/
export default ProductReviews
