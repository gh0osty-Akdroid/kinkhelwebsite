import React from "react";
import NavBar from "../nav/NavBar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import "./informationcentre.css";
import woman from "../../assets/images/woman-banner.png";
import * as HiIcons from "react-icons/hi";
import million from "../../assets/images/mill.png";
import { Link } from "react-router-dom";

function InformationCard() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <div className="infocard-body">
        <div className="infobody-banner">
          <div className="info-header">
            <div className="div">
                <h1>Welcome to Kinkhel Information Centre</h1>
                <h3>We are Kinkhel, A new and unique way for lotteries.</h3>
            </div>
          </div>
          <div className="woman-image">
           <img src={woman} alt="" />
          </div>
        </div>


        <div className="infocentre">
            <div className="infocentre-header">
           
        <li id="info-lg-clock">
          <HiIcons.HiSpeakerphone />
        </li>
        <h3>Information Center | </h3>
        <p> Latest Lottery News</p>
      
            </div>


            <div className="info-div-container">
        <div className="info-card">
          <img src={million} alt="" />

          <div className="info-title">Euro Millions</div>
          <div className="info-para">
            EuroMlllions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </div>
          <Link to="/pages/gamesinformation/euromillionsinfo">
          <button className="info-button"> Read More</button>
          </Link>
        </div>


        <div className="info-card">
          <img src={million} alt="" />

          <div className="info-title">Euro Millions</div>
          <div className="info-para">
            EuroMlllions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </div>
          <Link to="/pages/gamesinformation/euromillionsinfo">
          <button className="info-button"> Read More</button>
          </Link>
        </div>


        <div className="info-card">
          <img src={million} alt="" />

          <div className="info-title">Euro Millions</div>
          <div className="info-para">
            EuroMlllions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </div>
          <Link to="/pages/gamesinformation/euromillionsinfo">
          <button className="info-button"> Read More</button>
          </Link>
        </div>


        <div className="info-card">
          <img src={million} alt="" />

          <div className="info-title">Euro Millions</div>
          <div className="info-para">
            EuroMlllions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </div>
          <Link to="/pages/gamesinformation/euromillionsinfo">
          <button className="info-button"> Read More</button>
          </Link>
        </div>
        </div>
        </div>

       
      </div>

      <Footer />
    </div>
  );
}

export default InformationCard;
