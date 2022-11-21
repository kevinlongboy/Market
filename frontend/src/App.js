import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/NavBarAccount";
import NavBarAccount from "./components/Navigation/NavBarMain";
import Landing from "./components/Landing";

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

          <Route path={'/'} exact={true}>
            <Landing />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
