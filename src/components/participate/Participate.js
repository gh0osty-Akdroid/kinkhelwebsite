import React from 'react'
import "./participate.css"
import Hyundai from "../../assets/images/Hyundai.jpg";
import Landcruiser from "../../assets/images/LandCruiser.png";
import { Link } from 'react-router-dom';

const Participate = () => {
  return (
    <div id="mainbodyparticipate">
        <div className='heading'>
             <h3>Participate & Win</h3>
        </div>
       <div className="hyundai">
        <Link to="/rewards">
        <img src={Hyundai} alt="" />
        </Link>
       </div>

       <div className="landcruiser">
        <Link  to="/rewards">
        <img src={Landcruiser} alt="" />
        </Link>
       </div>
    </div>
  )
}

export default Participate