/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
// local files
import * as sessionActions from '../../../store/sessionReducer';


/******************************* COMPONENT *******************************/
function ProfileButton({ user }) {
  console.log("user from profile button", user)

  /****************** access store *******************/


  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  // conditional components
  let menuOptions;

  if (user) {
    menuOptions = (
      <>
        <div>
          <h1>Account</h1>
          <button onClick={openMenu}>X
          </button>
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
          <button onClick={openMenu}>X
          </button>
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

  /***************** handle events *******************/




  /**************** render component *****************/
  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>

      {showMenu && (

        <div className="account-menu-side-panel-container">
          {menuOptions}
        </div>

      )}
    </>
  );
}

export default ProfileButton;
