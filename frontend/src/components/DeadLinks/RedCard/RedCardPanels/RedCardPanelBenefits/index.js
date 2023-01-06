/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import "./RedCardPanelBenefits.css"
import shoppingBasket from "../../../../../images/branding/market-village/market-village-shopping-basket.png"
import deliveryTruck from "../../../../../images/branding/market-village/market-village-delivery-truck.png"
import calendar from "../../../../../images/branding/market-village/market-village-calendar.png"
import gifts from "../../../../../images/branding/market-village/market-village-gifts.png"


/******************************* COMPONENT *******************************/
function RedCardPanelBenefits() {


    /**************** render component *****************/
    return (
        <div className="RedCardPanelBenefits-component">

            <div className="RedCardPanelBenefits-caption-container">
                Everyday RedCard benefits:
            </div>

            <div className="RedCardPanelBenefits-table-">
                <div className="RedCardPanelBenefits-cards-container">
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={shoppingBasket} alt="shopping basket" id="shopping-basket-icon"></img>
                        </div>
                        <p>5% off at Target</p>
                        <p>In store. Online. Every time.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={deliveryTruck} alt="delivery truck" id="delivery-truck-icon"></img>
                        </div>
                        <p>More to your door</p>
                        <p>Free shipping on most items at Target.com.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={calendar} alt="calendar" id="calender-icon"></img>
                        </div>
                        <p>More return time</p>
                        <p>An additional 30 days for returns and exchanges.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div    className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={gifts} alt="gifts" id="gifts-icon"></img>
                        </div>
                        <p>More exclusives</p>
                        <p>Including special items and offers.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                </div>

                <div className="RedCardPanelBenefits-disclaimer-container">
                <sup caleid="RedCard-benefits-foot-note-superscript">1</sup>Some restrictions apply. See below for RedCard benefits & program rules.
                </div>
            </div>

        </div>
    )
}


/******************************** EXPORTS ********************************/
export default RedCardPanelBenefits
