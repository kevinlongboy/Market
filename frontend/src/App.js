import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/sessionReducer";
import NavBarMain from "./components/Navigation/NavBarMain";
import NavBarAccount from "./components/Navigation/NavBarAccount";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import DepartmentPage from "./components/DepartmentPage";
import ProductPage from "./components/ProductPage";
import LoginFormPage from "./components/LoginFormPage";
import Orders from "./components/Orders";
import UserReviews from "./components/UserReviews";
import ReviewCreateForm from "./components/ReviewCreateForm";
import ReviewUpdateForm from "./components/ReviewUpdateForm";
import Footer from "./components/Footer";
import OrdersDetails from "./components/OrderDetails";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {

  const dispatch = useDispatch();

  // use to load components only after there is a current session
  // and user's details are retrieved from database
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBarMain isLoaded={isLoaded} />
      <NavBarAccount isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>

          <Route exact path={'/'}>
            <Landing />
          </Route>

          <Route exact path={'/login'}>
            <LoginFormPage />
          </Route>

          <Route exact path={'/signup'}>
            <SignupFormPage />
          </Route>

          <Route exact path={'/departments/:departmentId'}>
            <DepartmentPage />
          </Route>

          <Route exact path={'/departments/:departmentId/products/:productId'}>
            <ProductPage />
          </Route>

          <Route exact path={'/cart'}>
            <Cart />
          </Route>

          <Route exact path={'/checkout'}>
            <Checkout />
          </Route>

          <Route exact path={'/order-confirmation'}>
            <OrderConfirmation />
          </Route>

          <Route exact path={'/account/orders'}>
            <Orders />
          </Route>

          <Route exact path={'/orders/:orderId'}>
            <OrdersDetails />
          </Route>

          <Route exact path={'/account/reviews'}>
            <UserReviews />
          </Route>

          <Route exact path={'/products/:productId/add-review'}>
            <ReviewCreateForm />
          </Route>

          <Route exact path={'/reviews/:reviewId/edit'}>
            <ReviewUpdateForm />
          </Route>

          {/* <Route>
            Page Not Found
          </Route> */}

        </Switch>
        )}

        {/* <Footer /> */}
    </>
  );
}

export default App;
