/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// local files
import "./RedCard.css"
import RedCardPanelHeader from "./RedCardPanels/RedCardPanelHeader";


/******************************* COMPONENT *******************************/
function RedCard() {

  /****************** access store *******************/

  /**************** render component *****************/
  return (
    <div className="landing-wrapper-container">
      <div id="RedCard-component">

        <div className="RedCard-panel-container">
          <RedCardPanelHeader />
        </div>

        <div className="RedCard-panel-container">

        </div>

        <div className="RedCard-panel-container">

        </div>

        <div className="RedCard-panel-container">

        </div>

      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default RedCard
