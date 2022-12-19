import React, { useState } from "react";
import "./games.css";
import ball1 from "../../assets/images/ball-1.png";


import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


const Games = () => {
  const [data, setData] = useState([])
  const Url = axios.create({
    baseURL: "http://52.26.60.188:6969/api/v1",
    headers: {
      'Access-Control-Allow-Origin': ['http://44.237.37.194:6001', "http://52.26.60.188:6969/", "http://localhost:3001"],
      'Content-Type': 'application/x-www-form-urlencoded'

    }
  })

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
                  <a href={`http://35.80.167.18:81/games/${e.id}/play`}>
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
