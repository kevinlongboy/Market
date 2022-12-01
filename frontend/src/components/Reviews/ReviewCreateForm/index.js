/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// local files
import "./ReviewCreateForm.css"
import { thunkCreateSingleReview } from "../../../store/reviewsReducer";

/******************************* COMPONENT *******************************/
function ReviewCreateForm() {

  /****************** access store *******************/
  const sessionState = useSelector(state => state.session);
  const reviewsState = useSelector(state => state.reviews);
  const productsState = useSelector(state => state.products);

  /************ key into pertinent values ************/
  const { productId } = useParams()
  const departmentId = productsState.singleProductDetails.Department.id

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /****************** manage state *******************/
  const [rating, setRating] = useState("★★★★★");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  // change rating-value
  let incrementCounter = () => {
      if (rating.length < 5) setRating(rating.concat("★"));
  }
  let decrementCounter = () => {
      if (rating.length > 1) setRating(rating.slice(0, rating.length-1));
  }

  // render errors
  useEffect(() => {
    const errors = [];

    if (rating < 1 || rating > 5) {
      errors.push("Please enter a rating.")
    }

    if (title.length > 0 && title.length < 2) {
      errors.push("Please write a longer title.")
    } else if (title.length > 50) {
      errors.push("Please write a shorter title.")
    }

    if (description.length > 0 && description.length < 5) {
        errors.push("Please write a longer review.")
    } else if (description.length > 255) {
        errors.push("Please write a shorter review.")
    }


    let displayErrors;
    if (errors.length) {
        displayErrors = (
            <div className="errors">
            {validationErrors.length > 0 &&
            validationErrors.map((error) =>
            <p key={error}>{error}</p>)}
            </div>
        )
    } else {
        displayErrors = (
            <div className="errors">
            </div>
        )
    }

    setValidationErrors(errors)
  }, [rating, title, description])

  /***************** handle events *******************/
  const history = useHistory();

  const handleSubmit = (e) => {

    e.preventDefault();

    let errors = [];
    setValidationErrors(errors);
    if (errors.length) return

    let createReviewData = {
      rating: rating.length,
      title: title,
      description: description,
    }

    dispatch(thunkCreateSingleReview(parseInt(productId), createReviewData)).catch(
      async (res) => {

          const data = await res.json();

          if (data && data.errors) {
              data.errors.forEach(message => errors.push(message));
              setValidationErrors(errors);
          }
      });

      history.push(`/departments/${departmentId}/products/${productId}`)
  }

  /**************** render component *****************/
  // add redirect error handler: redirect to ReviewUpdateForm component if user already reviewed product
  return (
    <div className="page-wrapper-container">

      <div id="ReviewCreateForm-component">

          <h1>ReviewCreate Form</h1>

          <form onSubmit={handleSubmit}>

            <div>
                <h2>Rating</h2>
            </div>

            <label>
                <div>
                    <div>
                        <button
                            id="rating-button"
                            type="button"
                            name="rating"
                            min="1"
                            onClick={decrementCounter}
                            >
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>

                    <div className="output-field-rating">
                        <output>{rating}</output>
                    </div>

                    <div>

                        <button
                            id="rating-button"
                            type="button"
                            name="rating"
                            max="5"
                            onClick={incrementCounter}
                            >
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </label>

            <label>
                <div>
                    <h2 className="review-create-prompt">Title</h2>
                </div>
                <input
                    className="textarea-field"
                    type="text"
                    name="title"
                    minLength={5}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                >
                </input>
            </label>


            <label>
                <div>
                    <h2 className="review-create-prompt">Description</h2>
                </div>
                <textarea
                    className="textarea-field"
                    type="textarea"
                    name="description"
                    minLength={5}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                >
                </textarea>
            </label>


           {/* { <div className="errors">
                {validationErrors.length > 0 &&
                validationErrors.map((error) =>
                <p className="error-item" key={error}>{error}</p>)}
            </div>} */}

            {validationErrors.map((error, idx) => (
                <p className="error-item" key={idx}>{error}</p>
            ))}

            <button
            id="review-submit-button"
            type="submit"
            disabled={!!validationErrors.length}
            >
            Submit review
            </button>

            </form>







      </div>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default ReviewCreateForm