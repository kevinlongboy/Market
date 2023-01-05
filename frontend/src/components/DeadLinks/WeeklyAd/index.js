/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// local files
import "./WeeklyAd.css"
import advert from "../../../images/WeeklyAd/weeklyAd.png";
import calendarBackground from "../../../images/WeeklyAd/weeklyAd-calendar-background.png";
import reminderBanner from "../../../images/WeeklyAd/weeklyAd-reminder-banner.jpeg";
import expectMoreBanner from "../../../images/WeeklyAd/weeklyAd-expect-more-banner.jpeg";


/******************************* COMPONENT *******************************/
function WeeklyAd() {

  /****************** access store *******************/

  /**************** render component *****************/
  return (
    <div className="landing-wrapper-container">

      <div id="WeeklyAd-component">

        <div className="WeeklyAd-header">
            <h3>Weekly Ads & Catalogs</h3>
        </div>

        <div className="WeeklyAd-main">
            <div className="WeeklyAd-main-left">
                <img src={advert} id="WeeklyAd-advert-image"></img>
            </div>

            <div className="WeeklyAd-main-right">
                <h2>Weekly Ad</h2>
                <h4>Prices Valid Jan 1 - Jan 7</h4>
                <div className="View-WeeklyAd-button-container">
                    <button className="View-WeeklyAd-button">View the Weekly Ad</button>
                </div>
                <div className="days-to-save-container">
                    <span>07</span>
                    <div className="days-to-save-container-left">
                        <span>days to</span>
                        <span>save</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="border"></div>

        <div className="WeeklyAd-banners-container">
            <div>
                <img src={reminderBanner} className="WeeklyAd-banner"></img>
            </div>
            <div>
                <img src={expectMoreBanner} className="WeeklyAd-banner"></img>
            </div>
        </div>

        <div className="WeeklyAd-footer">
            <div className="WeeklyAd-footer-line-1">
                <p>Terms</p>
                <p>Privacy<span style={{color:"#CC0000"}}> updated 12/2022</span></p>
                <p>Interest-Based Ads</p>
                <p>CA Supply Chain Act</p>
                <p>CA Privacy</p>
                <p>My Privacy Choices - CA</p>
            </div>
            <div className="WeeklyAd-footer-line-2">
                <p>© 2023 Market Brands, Inc.</p>
            </div>

        </div>

      </div>

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default WeeklyAd
