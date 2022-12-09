import React from 'react'
import lottery from "../../assets/images/lottery.png";
import * as MdIcons from "react-icons/md";
import "./highestjackpot.css"

const Highestjackpot = () => {
  return (
    <div id="mainbodyhijackpot">
         <div class="headtwo">
          <li id="lg-clock">
            <MdIcons.MdTimer />
          </li>
          <h3>Highest Live Jackpots | </h3>
          <p> Explore live jackpots in the world!</p>
        </div>

        <div className="cardf">
          <div className="cardone">
            <div className="imgf">
              <img src={lottery} alt="" />
            </div>
            <div className="textf">
              <h3>Super Prize</h3>
              <h2>Up to 100000</h2>
            </div>
            <button className="pickf">Play Now</button>
          </div>

          <div className="cardone">
            <div className="imgf">
              <img src={lottery} alt="" />
            </div>
            <div className="textf">
              <h3>Super Prize</h3>
              <h2>Up to 100000</h2>
            </div>
            <button className="pickf">Play Now</button>
          </div>

          <div className="cardone">
            <div className="imgf">
              <img src={lottery} alt="" />
            </div>
            <div className="textf">
              <h3>Super Prize</h3>
              <h2>Up to 100000</h2>
            </div>
            <button className="pickf">Play Now</button>
          </div>

          <div className="cardone">
            <div className="imgf">
              <img src={lottery} alt="" />
            </div>
            <div className="textf">
              <h3>Super Prize</h3>
              <h2>Up to 100000</h2>
            </div>
            <button className="pickf">Play Now</button>
          </div>


          
        </div>
    </div>
  )
}

export default Highestjackpot