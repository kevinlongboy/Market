/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// local files
import DeleteReview from "../DeleteReview"
import { thunkReadAllUserReviews } from "../../../store/reviewsReducer";
import "./UserReviews.css"

/******************************* COMPONENT *******************************/
function UserReviews() {

  /****************** access store *******************/
  const reviewsState = useSelector(state => state.reviews)
  const reviews = Object.values(reviewsState.allReviewsByUser)


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllUserReviews());
  }, [dispatch, reviewsState])

  /***************** handle events *******************/



  /**************** render component *****************/

    return (
      <div className="page-wrapper-container">

        <div id="Reviews-component">

            <h1>Reviews</h1>

            {reviews && reviews.map((review) => (
            <>
              <h2>{review.Product.name}</h2>
              <p>Rating: {review.rating}</p>
              <p>{review.title}</p>
              <p>{review.description}</p>

              <NavLink exact to={`/reviews/${review.id}/edit`}>
                <button>edit review</button>
              </NavLink>

              <DeleteReview id={review.id} />

              <br></br>
            </>
          ))}

        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default UserReviews
