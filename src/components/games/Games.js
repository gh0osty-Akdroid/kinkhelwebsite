import React from "react";
import "./games.css";
import ball1 from "../../assets/images/ball-1.png";
import ball2 from "../../assets/images/ball-2.png";
import ball3 from "../../assets/images/ball-3.png";
import ball4 from "../../assets/images/ball-4.png";

import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";


const Games = () => {
  return (
    <div>
      <div id="mainbodygame">
        <div className="head">
          <li id="lg-clock">
            {" "}
            <MdIcons.MdTimer />
          </li>
          <h3>Ending Soon | </h3>
          <p> Don't miss out these huge jackpots!</p>
        </div>

        <div className="card1">
          <div className="fcard">
            <div className="img">
              <img src={ball1} alt="" />
            </div>
            <div className="text">
              <p>Lucky 3</p>
              <h6>Prize: RS. 25000</h6>
              <Link to="alllotteries/uspowerball">
              <button className="pick">Quick Pick</button>
              </Link>
            </div>
          </div>

          <div className="fcard">
            <div className="img">
              <img src={ball2} alt="" />
            </div>
            <div className="text">
              <p>Lucky 5</p>
              <h6>Prize: RS. 50000</h6>
              <Link  to="alllotteries/uspowerball">
              <button className="pick">Quick Pick</button>
              </Link>
            </div>
          </div>

          <div className="fcard">
            <div className="img">
              <img src={ball3} alt="" />
            </div>
            <div className="text">
              <p>Lucky 6</p>
              <h6>Prize: RS. 50 Lakh</h6>
              <Link  to="alllotteries/uspowerball">
              <button className="pick">Quick Pick</button>
              </Link>
            </div>
          </div>

          <div className="fcard">
            <div className="img">
              <img src={ball4} alt="" />
            </div>
            <div className="text">
              <p>Lucky 5 + 1</p>
              <h6>Prize: RS.1 crore</h6>
              <Link  to="alllotteries/uspowerball">
              <button className="pick">Quick Pick</button>
              </Link>
            </div>
          </div>

          <div className="fcard">
            <div className="img">
              <img src={ball1} alt="" />
            </div>
            <div className="text">
              <p>Lucky 3</p>
              <h6>Prize: RS. 25000</h6>
              <Link to="alllotteries/uspowerball">
              <button className="pick">Quick Pick</button>
              </Link>
            </div>
          </div>

          <div className="fcard">
            <div className="img">
              <img src={ball2} alt="" />
            </div>
            <div className="text">
              <p>Lucky 5</p>
              <h6>Prize: RS. 50000</h6>
              <Link  to="alllotteries/uspowerball">
              <button className="pick">Quick Pick</button>
              </Link>
            </div>
          </div>

          <div className="fcard">
            <div className="img">
              <img src={ball3} alt="" />
            </div>
            <div className="text">
              <p>Lucky 6</p>
              <h6>Prize: RS. 50 Lakh</h6>
              <Link  to="alllotteries/uspowerball">
              <button className="pick">Quick Pick</button>
              </Link>
            </div>
          </div>

          <div className="fcard">
            <div className="img">
              <img src={ball4} alt="" />
            </div>
            <div className="text">
              <p>Lucky 5 + 1</p>
              <h6>Prize: RS.1 crore</h6>
              <Link  to="alllotteries/uspowerball">
              <button className="pick">Quick Pick</button>
              </Link>
            </div>
          </div>


          


        </div>

    
      

       

       
        

     

        
      </div>
    </div>
  );
};

export default Games;
