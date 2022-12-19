import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavBar from '../nav/NavBar'
import Sidebar from '../sidebar/Sidebar'
import news3 from "../../assets/images/news3.png";
import news from '../../assets/images/news.png'
import news1 from '../../assets/images/news1.png'
import * as HiIcons from "react-icons/hi";

const News = () => {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="infocard-body">
        <div className="infobody-banner">
          <div className="info-header">
            <div className="div">
                <h1>Welcome to Kinkhel News</h1>
                <h3>We are Kinkhel, A new and unique way for lotteries.</h3>
            </div>
          </div>
          <div className="woman-image">
           <img src={news3} alt="" />
          </div>
        </div>


        <div className="infocentre">
            <div className="infocentre-header">
           
        <li id="info-lg-clock">
          <HiIcons.HiSpeakerphone />
        </li>
        <h3>News Information | </h3>
        <p> Latest News on Kinkhel</p>
      
            </div>


            <div className="info-div-container">
        <div className="info-card">
          <img src={news} alt="" />

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
          <img src={news1} alt="" />

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
          <img src={news} alt="" />

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
          <img src={news1} alt="" />

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

      <Footer/>
      News
      </div>
  )
}

export default News