/******************************** IMPORTS ********************************/
// libraries
import { Link, NavLink } from "react-router-dom";
// local files
import "./NavBarPrimary.css"

/******************************* COMPONENT *******************************/
function NavBarPrimary() {

    return (
      <div className="NavBarMain-wrapper-container">

        <div id="NavBarMain-component">

          <div className="NavBarMain-left-container">
            <i class="fa-solid fa-city"></i>
            <p id="navbar-location-button">Online Store</p>
          </div>

          <div className="NavBarMain-right-container">
            <p><NavLink exact to={'/weeklyad'}>Weekly Ad</NavLink></p>
            <p><NavLink exact to={'/redcard'}>RedCard</NavLink></p>
            <p><NavLink exact to={'/square'}>Market Square</NavLink></p>
          </div>
        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default NavBarPrimary
