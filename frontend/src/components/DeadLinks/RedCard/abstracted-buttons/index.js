/******************************** IMPORTS ********************************/
// libraries
import { NavLink } from "react-router-dom"
// local files
import "./abstracted-buttons.css"


/******************************* COMPONENTS *******************************/
export const CTACreditButton = (
    <button
        className="RedCard-CTA-button"
        id="CTA-button-credit"
    >
        <NavLink exact to="/">Apply for Credit</NavLink>
    </button>
)

export const CTADebitButton = (
    <button
        className="RedCard-CTA-button"
        id="CTA-button-debit"
    >
        <NavLink exact to="/">Apply for Debit</NavLink>
    </button>
)


export const CTAReloadableButton = (
    <button
        className="RedCard-CTA-button"
        id="CTA-button-reloadable"
    >
        <NavLink exact to="/">Open a Reloadable</NavLink>
    </button>
)
