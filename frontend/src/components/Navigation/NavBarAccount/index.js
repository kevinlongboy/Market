/******************************** IMPORTS ********************************/
// libraries
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// local files
import ProfileButton from '../ProfileButton';
import LoginFormModal from '../../LoginFormModal';
import './NavBarAccount.css';
import CategoriesButton from '../CategoriesButton';


/******************************* COMPONENT *******************************/
function NavBarAccount({ isLoaded }){

  /****************** access store *******************/
  const sessionUser = useSelector(state => state.session.user);

  /************ key into pertinent values ************/

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

  /**************** render component *****************/
  return (

    <div className="NavBarAccount-wrapper-container">
      <div id='NavBarAccount-component'>


        <div className='NavBarAccount-left'>
            <NavLink exact to="/">Logo</NavLink>
            <CategoriesButton />
        </div>


        <div className='NavBarAccount-right'>
          <ProfileButton user={sessionUser} />

          <NavLink exact to="/cart">
            <div id="NavBarAccount-cart-button-container">
              <i class="fa-solid fa-cart-shopping" id='NavBarAccount-cart-button'></i>
            </div>
          </NavLink>
        </div>

        {/* {isLoaded && sessionLinks} */}

      </div>
    </div>
  );
}


/******************************** EXPORTS ********************************/
export default NavBarAccount;
