import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import Sidebar from "../components/sidebar/Sidebar";
import "./uspowerball.css";
import gamebanner from "../assets/images/banner.webp";
import { useParams } from "react-router-dom";
import { Url } from "../Url";
const parse = require('html-react-parser')

const Uspowerball = () => {


  const { id } = useParams()
  const [data, setData] = useState()


  useEffect(() => {
    Url.get(`/game/${id}`).then((data) => {
      setData(data?.data?.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    if (data != null) {
      console.log(data)
    }
  }, [data])

  return (
    <div>
      <Sidebar />
      <NavBar />

      <div className="uspowerballbody">
        <div className="headpower">
          <div className="price">
            <h2 style={{ color: 'white' }}>{data?.prize}</h2>
          </div>
          <img style={{ height: 300 }} src={gamebanner} alt="" />
        </div>

        <div className="powerballbodysection" style={{ marginTop: 100 }}>
          <div className="powerballsection-header">
            <div className="timer">
              <h2>
                Draw Closes in: 327 days 05 hr : 41 min : 06 minute | Next draw
                starts from Saturday 2023-10-08
              </h2>
            </div>

            <div className="howtoplay">
              <h2>How to play</h2>
              <div className="underline"></div><br />
              {data?.description}
            </div>

            <div className="gamebox-container">
              <div className="gamebox">
                <div className="gamebox-header">
                  <h2>Play {data?.name} Winners</h2>
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
                <span style={{ color: 'blue' }} onClick={() => window.open('http://35.80.167.18:81')}>Register </span>
                or {""}
                <span style={{ color: 'blue' }} onClick={() => window.open('http://35.80.167.18:81')}>Login </span>
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
              {data?.notes}
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
