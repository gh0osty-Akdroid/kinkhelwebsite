import React, { useEffect, useState } from "react";
import parse from 'html-react-parser'
import "./euromillionsinfo.css";
import Euro from "../../assets/images/Euro1.png";
import { GameImgUrl, ImgUrl, Url } from "../../Url";
import { ErrorHandler } from "../../components/ErrorNotification";
import { useParams } from "react-router-dom";
import { Grid } from "@mantine/core";

const GameInformation = () => {

  const { id } = useParams()
  const [data, setData] = useState('')

  useEffect(() => {
    Url().get(`/game/${id}`).then((res) => {
      setData(res?.data?.data?.data)
    }).catch((err) => {
      ErrorHandler(err)
    })

  }, [])



  return (
    <div>
      <div className="euromillions-body">
        <Grid>
          <Grid.Col sm={12}>
            <img style={{width:"100%"}} src={`${GameImgUrl}${data.Category.image}`} alt="" />
          </Grid.Col>
        </Grid>


        <div className="euromillions-header">
          <h1>{`${data?.Category?.name}(${data?.name})`}</h1>
          {parse(data?.description || "")}
        </div>
      </div>
    </div>
  );
};

export default GameInformation;
