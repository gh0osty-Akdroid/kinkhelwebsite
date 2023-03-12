import React from "react";
import "./playandwin.css";
import carimg from "../../assets/images/carimg.jpeg";
import Sidebar from "../sidebar/Sidebar";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer";
import slider from "../../assets/images/slider.jpg"
import { Figure } from "react-bootstrap";

const PlayandWin = () => {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <Figure className="header-playandwin">
        <Figure.Image className="img" src={slider} alt="171x180" />
      </Figure>
      <div className="playandwin-body">
        <div className="playandwin-header">
          <h2>Land Cruiser Play and Win</h2>
        </div>
        <div className="landcruiser-img">
          <img src={carimg} alt="land cruiser" />
        </div>
        <div className="participants">
          <p>Required Participants: </p>
          <p>Active Participants:</p>
          <p> Remaining Participants:</p>
        </div>
        <div onClick={() => console.log('123')} className="playandwin-button">
          <button onClick={() => window.open('http://35.80.167.18:81/login')}>Please Login/Register</button>
        </div>
      </div>
    </div>
  );
};

export default PlayandWin;
