import React, { useState } from "react";
import "./games.css";
import ball1 from "../../assets/images/ball-1.png";


import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Url } from "../../Url";


const Games = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    Url.get('/games?site=893022452').then((data) => {
      setData(data?.data?.data)
    }).catch((err) => {
      console.log(err)
    })

  }, [])



  return (
    <div>
      <div id="mainbodygame">
        <div className="head">
          <li id="lg-clock">
            {" "}
            <MdIcons.MdTimer />
          </li>
          <h3>Ending Soon | </h3>
          <p> Don't miss out these huge jackpots!</p>
        </div>

        <div className="card1">
          {
            data?.map((e) =>
              <div className="fcard">
                <div className="img">
                  <img src={`http://52.26.60.188:6969/${e?.Category?.image}`} alt="" />
                </div>
                <div className="text">
                  <p>{e?.name}</p>
                  <h6>Prize: {e.prize}</h6>
                  {/* <a href={`http://35.80.167.18:81/games/game/${e.id}/play`}>
                    <button className="pick" >Quick Pick</button>
                  </a> */}
                  <a href={`/game/${e.id}`}>
                    <button className="pick" >Quick Pick</button>
                  </a>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Games;
