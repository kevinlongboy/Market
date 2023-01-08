/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// local files
import "./Square.css"
import SquarePanelHeader from "./SquarePanels/SquarePanelHeader";


/******************************* COMPONENT *******************************/
function Square() {

  /****************** access store *******************/

  /**************** render component *****************/
  return (
    <div className="landing-wrapper-container">
      <div id="Square-component">

        <div className="Square-panel-container" id="Square-panel-container-full-width">
            <SquarePanelHeader />
        </div>

        <div className="Square-panel-container">
        </div>

        <div className="Square-panel-container">
        </div>

        <div className="Square-panel-container">
        </div>

      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default Square
