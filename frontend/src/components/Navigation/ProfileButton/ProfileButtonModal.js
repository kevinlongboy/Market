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
          <div id="ProfileButton-modal-list-user-greeting">Hello, {user.firstName}</div>
        </div>

        <div>
          <NavLink exact to={'/account/orders'}>
            <div>Orders</div>
            <div>Track + manage</div>
          </NavLink>
        </div>

        <div>
          <NavLink exact to={'/account/reviews'}>
            <div>Reviews</div>
            <div>See reviews</div>
          </NavLink>
        </div>

          <button
            onClick={logout}
            id='ProfileButton-modal-list-SignOut-button'
          >
            Sign Out
          </button>
      </>
    )

  } else {
    menuOptions = (
      <>
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
        <div className="ProfileButton-modal-container">

          <div className="ProfileButton-modal-title-container">
            <p>Account</p>
          </div>

          <div className="ProfileButton-modal-list-container">
            {menuOptions}
          </div>

        </div>
    </>
  );
}


/******************************** EXPORTS ********************************/
export default ProfileButtonModal;
