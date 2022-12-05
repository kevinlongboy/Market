/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// local files
import NavBarAccount from '../Navigation/NavBarAccount';
import { thunkReadAllUserOrders } from '../../store/ordersReducer';
import { thunkReadAllUserReviews } from '../../store/reviewsReducer';
import "./AccountPage.css"
import { NavLink, Redirect } from 'react-router-dom';
import { convertExactDate } from '../../component-resources';

/******************************* COMPONENT *******************************/
function AccountPage() {

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const ordersState = useSelector(state => state.orders)
  const reviewsState = useSelector(state => state.reviews)

  /************ key into pertinent values ************/
  const orders = Object.values(ordersState.allOrdersByUser)
  const reviews = Object.values(reviewsState.allReviewsByUser)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkReadAllUserOrders());
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkReadAllUserReviews());
}, [dispatch])


  /************* conditional components **************/
  let ordersCard;
  if (orders && orders.length) {
    let mostRecentOrder = orders[orders.length - 1]
    let products = Object.values(mostRecentOrder.Products)
    console.log("products", products)

    ordersCard = (
      <>
        <div className='blurb-card-title-container'>

          <div>{convertExactDate(mostRecentOrder.createdAt)}</div>
            <NavLink
              exact
              to={`/orders/${mostRecentOrder.id}`}
              id='blurb-card-title-redirect'
              >
              View order
            </NavLink>
        </div>


        <div className='blurb-card-details-container'>
          <p>${mostRecentOrder.total}</p>
          <p>{mostRecentOrder && mostRecentOrder.id}</p>
          {/* <p>{mostRecentOrder && (mostRecentOrder.id).toString.padStart(12 , '0')}</p> */}
          <div>
            <i class="fa-solid fa-check"></i>
            {mostRecentOrder.status}
          </div>
        </div>

        <div className='blurb-card-thumbnail-container'>
          { products && products.map((product) => (
            <NavLink exact to={`/departments/${product.departmentId}/products/${product.id}`}>
              <img
                src={product.previewImage}
                id='blurb-card-order-thumbnail'
              >
              </img>
            </NavLink>
          ))}
        </div>

      </>
    )
  }

  let reviewsCard;

  if (reviews && reviews.length) {
    let mostRecentReview = reviews[reviews.length - 1]
    console.log("mostRecentReview", mostRecentReview)

    reviewsCard = (
      <>
        <div className='blurb-card-title-container'>
          <div>{mostRecentReview.title}</div>

            <NavLink
              exact
              to={`/reviews/${mostRecentReview.id}/edit`}
              id='blurb-card-title-redirect'
              >
              View review
            </NavLink>
        </div>

        <div className='blurb-card-details-container'>
          <p>{mostRecentReview.rating}</p>
          <p>{mostRecentReview && convertExactDate(mostRecentReview.createdAt)}</p>
        </div>

        <div id='blurb-card-review-description'>
          <p>{mostRecentReview.description}</p>

        </div>

        <div>

            <NavLink
              exact
              to={`/departments/${mostRecentReview.Product.departmentId}/products/${mostRecentReview.Product.id}`}
              className='blurb-card-review-product-container'
              >
              <img
                src={mostRecentReview.Product.previewImage}
                id='blurb-card-review-thumbnail'
                >
              </img>

              <div>{mostRecentReview.Product.name}</div>
            </NavLink>

        </div>


      </>
    )
  }


  /**************** render component *****************/
  if (user && user.id == null) return <Redirect to="/"></Redirect>

    return (
      <div className="page-wrapper-container">

        <div id="AccountPage-component">

              {/* <div className='NavBarAccount-component-container'> */}
                <NavBarAccount user={user} />
              {/* </div> */}

            <div className='AccountPage-right'>





              <div className='AccountPage-orders-blurb'>

                <div className='AccountPage-blurb-title-container'>
                  <div>Orders</div>
                  <NavLink
                    exact
                    to={'/account/orders'}
                    id='AccountPage-blurb-title-redirect'
                  >
                    VIEW ALL
                    <i class="fa-solid fa-chevron-right"></i>
                  </NavLink>
                </div>

                <div className='AccountPage-blurb-card-container'>
                  {ordersCard}
                </div>

              </div>



              <div className='AccountPage-reviews-blurb'>

              <div className='AccountPage-blurb-title-container'>
                  <div>Reviews</div>
                  <NavLink
                    exact
                    to={'/account/reviews'}
                    id='AccountPage-blurb-title-redirect'
                  >
                    VIEW ALL
                    <i class="fa-solid fa-chevron-right"></i>
                  </NavLink>
                </div>

                <div className='AccountPage-blurb-card-container'>
                  {reviewsCard}
                </div>

              </div>







            </div>

        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default AccountPage
