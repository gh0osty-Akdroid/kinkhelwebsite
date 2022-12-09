import React from 'react'
import Footer from '../footer/Footer'
import NavBar from '../nav/NavBar'
import Sidebar from '../sidebar/Sidebar'
import news3 from "../../assets/images/news3.png";
import "./referandearn.css"

const ReferandEarn = () => {
  return (
    <div>
       <Sidebar />
      <NavBar />
      <div className="refandearn">
      <div className="infobody-banner">
          <div className="info-header">
            <div className="div">
              <h1>Refer and Earn</h1>
              <h3>You can now Earn up to 100 points by referring someone.</h3>
              <h3>Your referreal code is: XYZ102Y</h3>
            </div>
          </div>
          <div className="woman-image">
            <img src={news3} alt="" />
          </div>
        </div>
        </div>

      <Footer/>
    </div>
  )
}

export default ReferandEarn