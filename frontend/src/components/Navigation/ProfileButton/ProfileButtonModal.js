/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from "react-router-dom";
// local files
import * as sessionActions from '../../../store/sessionReducer';


/******************************* COMPONENT *******************************/
function ProfileButtonModal({ user }) {

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /***************** handle events *******************/
  const history = useHistory();

  // logout
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  /************* conditional components **************/
  let menuOptions;

  if (user) {
    menuOptions = (
      <>
        <div>
          <h1>Account</h1>
        </div>

        <div>Hello, {user.firstName}</div>

        <div>
          <NavLink exact to={'/account/orders'}>Orders</NavLink>
          <p>Track + manage</p>
        </div>

        <div>
          <NavLink exact to={'/account/reviews'}>Reviews</NavLink>
          <p>See reviews</p>
        </div>

        <button onClick={logout}>Sign Out</button>
      </>
    )

  } else {
    menuOptions = (
      <>
        <div>
          <h1>Account</h1>
        </div>

        <div>
          <NavLink exact to={'/login'}>Sign in</NavLink>
        </div>

        <div>
          <NavLink exact to={'/signup'}>Create Account</NavLink>
        </div>
      </>
    )
  }

  /**************** render component *****************/
  return (
    <>
        <div className="account-menu-side-panel-container">
          {menuOptions}
        </div>
    </>
  );
}


/******************************** EXPORTS ********************************/
export default ProfileButtonModal;
