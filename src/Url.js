
import axios from 'axios'




export const Url = () => {
  const site = (JSON.parse(localStorage.getItem("state")))?.site?.site
  console.log("site", site)

  return axios.create({
    baseURL: `http://localhost:6001/api/v1/user`,
    headers: {
      "site": site || null,
      'Access-Control-Allow-Origin': ['http://44.237.37.194:6001', "http://52.26.60.188:6969/"]
    }
  })
}

export const TokenUrl = () => {
  const token = (JSON.parse(localStorage.getItem("state")))?.authToken?.authToken
  const site = (JSON.parse(localStorage.getItem("state")))?.site?.site


  return axios.create({
    baseURL: `http://localhost:6001/api/v1/user`,
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

