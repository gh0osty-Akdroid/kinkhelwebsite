import React from 'react'
import "./newsletter.css";

const Newsletter = () => {
  return (
    <>     <div id="newsletter" className="section-p1 section-m1">
          <div className="newstext">
            <h4>Signup its totally free.</h4>
            <p>Get Jackpot list direct to your inbox.</p>
          </div>
          <div className="form">
            <input type="text" placeholder="Your email address" />
            <button className="normal">Sign Up</button>
          </div>
        </div>
   </>
  )
}

export default Newsletter