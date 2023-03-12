import React from 'react'
import { Link } from 'react-router-dom'
import "./banner.css"

const Banner = () => {
  return (
    <>
         <div id="sm-banner" className="section-p1">
          <div className="banner-box">
            <h2>The Store where</h2>
            <span>Everyone is a winner</span>
            
            <Link to="/pages/store">
            <button className="white">Buy Now</button>
            </Link>
          </div>

          <div className="banner-box banner-box2">
            <h2> eGiftcard is a quick and easy</h2>
            <span>way to spend a gift card</span>
            <Link to="/pages/gift-card">
            <button className="white">Buy Now</button>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Banner