/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from "react-router-dom";
// local files
import * as sessionActions from '../../../store/sessionReducer';


/******************************* COMPONENT *******************************/
function ProfileButtonModal({ user, modalFunc }) {

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /***************** handle events *******************/
  const history = useHistory();

  // logout
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    modalFunc(false);
    history.push('/');
  };

  /************* conditional components **************/
  let menuOptions;

  if (user) {
    menuOptions = (
      <>

        <div onClick={(e) => modalFunc(false)}>
          <NavLink exact to={'/account'}>
            <div>Account </div>
            <div>Hello, {user.firstName}</div>
          </NavLink>
        </div>


        <div onClick={(e) => modalFunc(false)}>
          <NavLink exact to={'/account/orders'}>
            <div>Orders</div>
            <div>Track + manage</div>
          </NavLink>
        </div>

        <div onClick={(e) => modalFunc(false)}>
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
        <div onClick={(e) => modalFunc(false)}>
          <NavLink exact to={'/login'}>Sign in</NavLink>
        </div>

        <div onClick={(e) => modalFunc(false)}>
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


// ✨
// can also be reused in lieu of NavBarAccount
// this component would require receiving an object of classNames/css selectors
// via props
// to render different styling depending on which component is wrapping it
// IE: if this component appears a modal or inline/same z-index
