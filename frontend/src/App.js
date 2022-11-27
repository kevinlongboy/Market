import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/NavBarAccount";
import NavBarAccount from "./components/Navigation/NavBarMain";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import DepartmentPage from "./components/DepartmentPage";
import ProductPage from "./components/ProductPage";
import LoginFormPage from "./components/LoginFormPage";
import Orders from "./components/Orders";
import Reviews from "./components/Reviews";
import ReviewCreateForm from "./components/ReviewCreateForm";
import ReviewUpdateForm from "./components/ReviewUpdateForm";
import Footer from "./components/Footer";
import OrdersDetails from "./components/OrderDetails";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBarAccount />
      <Navigation isLoaded={isLoaded} />

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

          <Route exact path={'/departments/:departmentId/:productId'}>
            <ProductPage />
          </Route>

          <Route exact path={'/cart'}>
            <Cart />
          </Route>

          <Route exact path={'/checkout'}>
            <Checkout />
          </Route>

          <Route exact path={'/account/orders'}>
            <Orders />
          </Route>

          <Route exact path={'/orders/:orderId'}>
            <OrdersDetails />
          </Route>

          <Route exact path={'/account/reviews'}>
            <Reviews />
          </Route>

          <Route exact path={'/reviews/create'}>
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
