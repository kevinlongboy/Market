/******************************** IMPORTS ********************************/
// libraries
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// local files
import ProfileButton from '../ProfileButton';
import CategoriesButton from '../CategoriesButton';
import './NavBarAccount.css';


/******************************* COMPONENT *******************************/
function NavBarAccount({ isLoaded }){

  /****************** access store *******************/
  const sessionUser = useSelector(state => state.session.user);

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
          {/* <ProfileButton /> */}


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
