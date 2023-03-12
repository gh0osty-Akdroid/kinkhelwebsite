import React, { useEffect, useState } from "react";
import "./informationcentre.css";
import woman from "../../assets/images/woman-banner.png";
import Information from "../informationcenter/Information";



function InformationCard() {

 

  return (
    <div>

      <div className="infocard-body">
        <div className="infobody-banner">
          <div className="info-header">
            <div className="div">
              <h1>Welcome to Kinkhel Information Centre</h1>
              <h3>We are Kinkhel, A new and unique way for lotteries.</h3>
            </div>
          </div>
          <div className="woman-image">
            <img src={woman} alt="" />
          </div>
        </div>
        <Information/>

        
      </div>

    </div>
  );
}

export default InformationCard;
