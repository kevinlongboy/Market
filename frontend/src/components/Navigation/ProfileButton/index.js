/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
// local files
import * as sessionActions from '../../../store/sessionReducer';
import './ProfileButton.css'


/******************************* COMPONENT *******************************/
function ProfileButton({ user }) {

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /************ reducer/API communication ************/
  const [showMenu, setShowMenu] = useState(false);

  /****************** manage state *******************/
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  /***************** handle events *******************/
  const history = useHistory();

  // toggle menu
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  // logout
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  /************* conditional components **************/
  let menuOptions;
  let profileGreeting;

  if (user) {
    profileGreeting = `Hello, ${user.firstName}`;

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
    profileGreeting = `Sign in`

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

  /**************** render component *****************/
  return (
    <>
      <button onClick={openMenu} className='ProfileButton-container'>
        <i className="fas fa-user-circle" />
        <p>{profileGreeting}</p>
        <i class="fa-solid fa-chevron-down" id='visible-on-hover'></i>
      </button>

      {showMenu && (

        <div className="account-menu-side-panel-container">
          {menuOptions}
        </div>

      )}
    </>
  );
}


/******************************** EXPORTS ********************************/
export default ProfileButton;
