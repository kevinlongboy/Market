import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton';
import LoginFormModal from '../../LoginFormModal';
import './NavBarAccount.css';

function NavBarAccount({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="NavBarAccount-wrapper-container">

      <div id='NavBarAccount-component'>

            <NavLink exact to="/">Home</NavLink>

            {/* {isLoaded && sessionLinks} */}

            <ProfileButton user={sessionUser} />

          <NavLink exact to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </NavLink>

      </div>

    </div>
  );
}

export default NavBarAccount;
