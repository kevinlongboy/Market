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
          <p>
            <NavLink exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
          </p>
          <i class="fa-solid fa-cart-shopping"></i>
      </div>

    </div>
  );
}

export default NavBarAccount;