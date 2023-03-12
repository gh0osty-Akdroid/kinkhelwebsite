import { useSelector } from "react-redux";
/* eslint-disable */

import axios from 'axios'

export const Url = axios.create({
    baseURL: `http://44.237.37.194:6001/api/v1/user`
})



export var TokenUrl = function TokenUrl() {
    var token = JSON.parse(localStorage.getItem("state"))?.authToken?.authToken || null;
    var site = JSON.parse(localStorage.getItem("state"))?.site?.site || null;

    return axios.create({
        baseURL: `http://44.237.37.194:6001/api/v1/user`,
        headers: {
            "Authorization": `Bearer ${token}`,
            "site": site,
            'Access-Control-Allow-Origin': ['http://44.237.37.194:6001', "http://52.26.60.188:6969/"]
        }

    })
}


export const GameImgUrl = "http://52.26.60.188:6969/"
export const ImgUrl = "http://44.237.37.194:6001/"
export const ImgUrl2 = "http://localhost:6001/"

