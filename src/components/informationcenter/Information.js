import React from "react";

import million from "../../assets/images/mill.png";
import * as HiIcons from "react-icons/hi";
import "./information.css";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div id="mainbodyinfocenter">
      <div class="headtwo">
        <li id="lg-clock">
          <HiIcons.HiSpeakerphone />
        </li>
        <h3>Information Center | </h3>
        <p> Latest Lottery News</p>
      </div>

      <div className="div-container">
        <div className="card">
          <img src={million} alt="" />

          <div className="title">Euro Millions</div>
          <div className="para">
            EuroMlllions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </div>
          <Link to="/pages/gamesinformation/euromillionsinfo">
          <button className="button"> Read More</button>
          </Link>
        </div>

        <div className="card">
          <img src={million} alt="" />

          <div className="title">Euro Millions</div>
          <div className="para">
            EuroMlllions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </div>

          <Link to="/pages/gamesinformation/euromillionsinfo">
          <button className="button"> Read More</button>
          </Link>
        </div>

        <div className="card">
          <img src={million} alt="" />

          <div className="title">Euro Millions</div>
          <div className="para">
            EuroMlllions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </div>

          <Link to="/pages/gamesinformation/euromillionsinfo">
          <button className="button"> Read More</button>
          </Link>
        </div>

        <div className="card">
          <img src={million} alt="" />

          <div className="title">Euro Millions</div>
          <div className="para">
            EuroMlllions is one of the biggest lotteries on the continent,
            played across nine countries and with millions of players entering
            each draw.
          </div>

          <Link to="/pages/gamesinformation/euromillionsinfo">
          <button className="button"> Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
