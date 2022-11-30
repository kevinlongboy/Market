/******************************** IMPORTS ********************************/
// libraries

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
            <p>Weekly Ad</p>
            <p>BlueCard</p>
            <p>Market Squared</p>
          </div>
        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default NavBarPrimary
