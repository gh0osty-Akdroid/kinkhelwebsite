import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import Sidebar from "../components/sidebar/Sidebar";
import "./uspowerball.css";
import gamebanner from "../assets/images/gamebanner.png";
import { Link } from "react-router-dom";

const Uspowerball = () => {
  return (
    <div>
      <Sidebar />
      <NavBar />

      <div className="uspowerballbody">
        <div className="headpower">
          <div className="price">
            <h2>Rs.25000</h2>
          </div>
          <img src={gamebanner} alt="" />
        </div>

        <div className="powerballbodysection">
          <div className="powerballsection-header">
            <div className="timer">
              <h2>
                Draw Closes in: 327 days 05 hr : 41 min : 06 minute | Next draw
                starts from Saturday 2023-10-08
              </h2>
            </div>

            <div className="howtoplay">
              <h2>How to play</h2>
              <div className="underline"></div>
              <p>
                Reward Points 150 required. It's easy to play. Just pick three
                single-digit numbers from "0" to "9", choose how you want to
                play them,
              </p>
              <li>
                Exact Order - You win if your numbers match the winning numbers
                in the exact order they are drawn.
              </li>
              <li>
                Any Order - You win if your numbers match the winning numbers in
                any order.
              </li>
            </div>

            <div className="gamebox-container">
              <div className="gamebox">
                <div className="gamebox-header">
                  <h2>Lucky 3 Winners</h2>
                </div>
                <div className="gamebox-numbers">
                  <div className="number">
                    <h3>0</h3>
                  </div>
                  <div className="number">
                    <h3>1</h3>
                  </div>
                  <div className="number">
                    <h3>2 </h3>
                  </div>
                  <div className="number">
                    <h3> 3 </h3>
                  </div>
                  <div className="number">
                    <h3>4</h3>
                  </div>
                  <div className="number">
                    <h3>5</h3>
                  </div>
                  <div className="number">
                    <h3>6</h3>
                  </div>
                  <div className="number">
                    <h3>7</h3>
                  </div>
                  <div className="number">
                    <h3>8</h3>
                  </div>
                  <div className="number">
                    <h3>9</h3>
                  </div>
                </div>
                <div className="gamebox-footer">
                  <h2>Selected Numbers</h2>
                </div>
              </div>
            </div>

            <div className="loginorregister">
              <h3>
                Please {""}
                <span style={{color:'blue'}} onClick={()=>window.open('http://35.80.167.18:81')}>Register </span>
                or {""}
                <span style={{color:'blue'}} onClick={()=>window.open('http://35.80.167.18:81')}>Login </span>
                to play.
              </h3>
            </div>

            <div className="underlinetwo"></div>

            <div className="luckypick">
              <div className="luckypick-text">
                <h2>Last 3 drawings Winning Numbers</h2>
              </div>
              <div className="luckypick-card">
                <div className="luckypick-card-text">
                  <h3>July 5, 2023</h3>
                </div>
                <div className="luckypick-card-numbers">
                  <div className="card-numbers">
                    <h3>0</h3>
                  </div>
                  <div className="card-numbers">
                    <h3>3</h3>
                  </div>
                  <div className="card-numbers">
                    <h3>5</h3>
                  </div>
                </div>
                <div className="picknumber">
                  <h3>Pick 3</h3>
                </div>
              </div>

              <div className="luckypick-card">
                <div className="luckypick-card-text">
                  <h3>July 5, 2023</h3>
                </div>
                <div className="luckypick-card-numbers">
                  <div className="card-numbers">
                    <h3>0</h3>
                  </div>
                  <div className="card-numbers">
                    <h3>3</h3>
                  </div>
                  <div className="card-numbers">
                    <h3>5</h3>
                  </div>
                </div>
                <div className="picknumber">
                  <h3>Pick 3</h3>
                </div>
              </div>

              <div className="luckypick-card">
                <div className="luckypick-card-text">
                  <h3>July 5, 2023</h3>
                </div>
                <div className="luckypick-card-numbers">
                  <div className="card-numbers">
                    <h3>0</h3>
                  </div>
                  <div className="card-numbers">
                    <h3>3</h3>
                  </div>
                  <div className="card-numbers">
                    <h3>5</h3>
                  </div>
                </div>
                <div className="picknumber">
                  <h3>Pick 3</h3>
                </div>
              </div>
            </div>

            <div className="underlinethree"></div>

            <div className="policyandnotes">
              <h2>Policy and Notes</h2>
              <div className="underlinefour"></div>
              <p>
                NOTE: Drawing are held every Monday to Saturday. Numbers Picking
                and Points redemption are not available during draw break,
                Monday to Saturday from 10:00 PM - 10:15 PM.
              </p>
              <li>
                In the case of a discrepancy between these numbers and the
                official drawing results, the official drawing results will
                prevail. View the WEBCAST of the official drawings.
              </li>
              <li>
                Prizes must be claimed no later than 180 days after the draw
                date.
              </li>
              <li>
                Predicted winning numbers with confirmation numbers are not
                valid until it is presented for payment and meets the KINKHEL'S
                validation requirements.
              </li>
            </div>
          </div>
        </div>

        {/* <div className="powerballimage">
          <img src={powerballimage} alt="" />
        </div> */}

        {/* <div className="powerballheading">
          <div className="imgandtext">
              <div className="headingimg">
                <img src={ballone} alt="" />
              </div>

              <div className="text">
               <h2>Lucky 3</h2> 
              </div>
          </div>

          <div className="pricevalue">
            <h2> RS.100,000</h2>
          </div>

          <div className="timer">
          <li id="lg-clock">
            <MdIcons.MdTimer />
          </li>
           <h2> 7days,22hours,22minutes </h2>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Uspowerball;
