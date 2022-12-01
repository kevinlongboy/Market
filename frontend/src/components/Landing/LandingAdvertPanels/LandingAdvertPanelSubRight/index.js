/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import './LandingAdvertPanelSubRight.css'
import xbox from '../../../../images/xbox-s.png'


/******************************* COMPONENT *******************************/
function LandingAdvertPanelSubRight() {


  /**************** render component *****************/
  return (

      <div id="LandingAdvertPanelSubLeft-component">

        <div className="right-promo-text-container">
            <div id='save'>Save</div>
            <div id='money-container'>
                <span id='dollar'>$</span>
                <div id='money'>50</div>
            </div>
        </div>

        <div className="promo-image-container">
            <NavLink exact to="departments/5/products/38">
            <img
            src={xbox}
            id="xbox-image"></img>
            </NavLink>
        </div>


      </div>
  )
}


/******************************** EXPORTS ********************************/
export default LandingAdvertPanelSubRight
