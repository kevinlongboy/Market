/******************************** IMPORTS ********************************/
// libraries
import { Link } from "react-router-dom";
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
            <p><Link href="https://weeklyad.target.com/">Weekly Ad</Link></p>
            <p><Link href="https://www.target.com/redcard/about">Red Card</Link></p>
            <p><Link href="https://www.target.com/circle">Market Square</Link></p>
          </div>
        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default NavBarPrimary
