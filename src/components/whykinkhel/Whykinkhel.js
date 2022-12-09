import React from 'react'
import coin from "../../assets/images/4.png";
import safe from "../../assets/images/3.png";
import prize from "../../assets/images/2.png";
import premium from "../../assets/images/1.png";
import "./whykinkhel.css"



const Whykinkhel = () => {
  return (
    <div id="mainbodywhykinkhel">
        <div className="Headingjackpot">
          <h2>Why play with Kinkhel?</h2>
        </div>

        <div className="card2container">
          <div className="card2">
            <img src={coin} alt="" />

            <h3>Guaranteed</h3>
            <p>Guaranteed win payouts to every customer, everytime!</p>
          </div>

          <div className="card2">
            <img src={safe} alt="" />

            <h3>Safe & Secure</h3>
            <p>
              We are 100% safe, not to meniton you will never lose your tickets
            </p>
          </div>

          <div className="card2">
            <img src={prize} alt="" />

            <h3>Prizes</h3>
            <p>
              We pay prizes directly in to your account wallet and you can cash
              out anytime!
            </p>
          </div>

          <div className="card2">
            <img src={premium} alt="" />

            <h3>Premium Services</h3>
            <p>
              Our customer support team is on hand 24/7 to help with any issue
              you may have.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Whykinkhel