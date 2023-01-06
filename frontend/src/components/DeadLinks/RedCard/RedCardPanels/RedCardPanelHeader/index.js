/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import "./RedCardPanelHeader.css"
import cardStack from "../../../../../images/RedCard/RedCard-full-stack.png"


/******************************* COMPONENT *******************************/
function RedCardPanelHeader() {

    /************ key into pertinent values ************/


    /****************** manage state *******************/

    /**************** render component *****************/
    return (
        <div className="RedCardPanelHeader-component">

            <div className="RedCardPanelHeader-left">
                <span>Save 5%<span id="RedCardPanelHeader-superscript">¹</span></span>
                <span>today &</span>
                <span>every day.</span>

                <div className="RedCardPanelHeader-left-subheader-container">
                    <p>Market RedCard™ saves</p>
                    <p>you more, in store & online.</p>
                </div>

                <div className="RedCardPanelHeader-left-disclaimer">
                    <span><span id="RedCardPanelHeader-left-disclaimer-footnote">¹</span> Some restrictions apply. <span id="RedCardPanelHeader-see-below-text">See below</span> for RedCard benefits & program rules</span>
                </div>

                <div className="RedCardPanelHeader-buttons-container">
                    <button className="RedCardPanelHeader-CTA-button"
                    id="CTA-button-credit"
                    >
                        <NavLink exact to="/">Apply for Credit</NavLink>
                    </button>
                    <button className="RedCardPanelHeader-CTA-button"
                    id="CTA-button-debit"
                    >
                        <NavLink exact to="/">Apply for Debit</NavLink>
                    </button>
                    <button className="RedCardPanelHeader-CTA-button"
                    id="CTA-button-reloadable"
                    >
                        <NavLink exact to="/">Open a Reloadable</NavLink>
                    </button>

                </div>
            </div>

            <div className="RedCardPanelHeader-right">
                <img src={cardStack} alt="RedCard stack" id="card-stack-image"></img>
            </div>


        </div>
    )
}


/******************************** EXPORTS ********************************/
export default RedCardPanelHeader
