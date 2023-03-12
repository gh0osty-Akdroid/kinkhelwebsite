import React, { useEffect, useState } from "react";

import million from "../../assets/images/mill.png";
import * as HiIcons from "react-icons/hi";
import "./information.css";
import { Link } from "react-router-dom";
import { Url } from "../../Url";
import { ErrorHandler } from "../ErrorNotification";
import { useSelector } from "react-redux";
import { Grid } from "@mantine/core";


const Information = () => {

  const [data, setData] = useState([])
  const site = useSelector(p => p.site.site)


  useEffect(() => {
    Url().get(`games?site=${site}`).then((res) => {
      setData(res?.data?.data)
    }).catch((err) => {
      ErrorHandler(err)
    })
  }, [])


  return (
    <>
      
      <div className="infocentre">
        <div className="infocentre-header">

          <li id="info-lg-clock">
            <HiIcons.HiSpeakerphone />
          </li>
          <h3>Information Center | </h3>
          <p> Latest Lottery News</p>

        </div>


        <div className="info-div-container">
          {
            data?.length === 0 ? <p>No data availabe</p> :

              <Grid>
                {
                  data.map((e, i) =>
                    <Grid.Col sm={4} key={i}>
                      <div className="info-card">
                        <img src={million} alt="" />

                        <div className="info-title">{e.name}</div>

                        <Link to={`/information-center/${e.id}`}>
                          <button className="info-button"> Read More</button>
                        </Link>
                      </div>
                    </Grid.Col>

                  )
                }
              </Grid>


          }

        </div>
      </div>
    </>
  );
};

export default Information;
