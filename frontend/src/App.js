import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/sessionReducer";
// components
import NavBarPrimary from "./components/Navigation/NavBarPrimary";
import NavBarSecondary from "./components/Navigation/NavBarSecondary";
import Landing from "./components/Landing";
import UserCart from "./components/Cart/UserCart";
import Checkout from "./components/Checkout";
import DepartmentPage from "./components/Departments/DepartmentPage";
import ProductPage from "./components/Products/ProductPage";
import LoginFormPage from "./components/Session/LoginFormPage";
import SignupFormPage from "./components/Session/SignupFormPage";
import UserOrders from "./components/Orders/UserOrders";
import UserReviews from "./components/Reviews/UserReviews";
import ReviewCreateForm from "./components/Reviews/ReviewCreateForm";
import ReviewUpdateForm from "./components/Reviews/ReviewUpdateForm";
import OrderDetails from "./components/Orders/OrderDetails";
import OrderConfirmation from "./components/Orders/OrderConfirmation";
import AccountPage from "./components/AccountPage";
import Footer from "./components/Footer";

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
      <NavBarPrimary isLoaded={isLoaded} />
      <NavBarSecondary isLoaded={isLoaded} />

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
            <UserCart />
          </Route>

          <Route exact path={'/checkout'}>
            <Checkout />
          </Route>

          <Route exact path={'/order-confirmation/:orderId'}>
            <OrderConfirmation />
          </Route>

          <Route exact path={'/account'}>
            <AccountPage />
          </Route>

          <Route exact path={'/account/orders'}>
            <UserOrders />
          </Route>

          <Route exact path={'/orders/:orderId'}>
            <OrderDetails />
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
