/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from "react-router-dom";
// local files
import * as sessionActions from '../../../store/sessionReducer';
import './NavBarAccount.css'


/******************************* COMPONENT *******************************/
function NavBarAccount({ user }) {

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /***************** handle events *******************/
  const history = useHistory();

  /**************** render component *****************/
  return (

        <div className="NavBarAccount-container">

            <div className="NavBarAccount-title-container">
                <div id="NavBarAccount-title-user-greeting">Hello, {user && user.firstName}</div>
                <div id="NavBarAccount-title-account-createdAt">Account since May 2, 2012</div>
            </div>

            <div className="NavBarAccount-list-container">

                <div>
                <NavLink exact to={'/account'}>
                    <div>Account </div>
                    <div>Overview</div>
                </NavLink>
                </div>

                <div>
                <NavLink exact to={'/account/orders'}>
                    <div>Orders</div>
                    <div>Track, manage, & return</div>
                </NavLink>
                </div>

                <div>
                <NavLink exact to={'/account/reviews'}>
                    <div>Rate & review</div>
                    <div>See reviews</div>
                </NavLink>
                </div>


            </div>

        </div>
  );
}


/******************************** EXPORTS ********************************/
export default NavBarAccount;


/********* Notes from ProfileButtonModal: *********/
// ✨
// can also be reused in lieu of NavBarAccount
// this component would require receiving an object of classNames/css selectors
// via props
// to render different styling depending on which component is wrapping it
// IE: if this component appears a modal or inline/same z-index
