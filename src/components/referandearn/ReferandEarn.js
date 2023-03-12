import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import NavBar from '../nav/NavBar'
import Sidebar from '../sidebar/Sidebar'
import news3 from "../../assets/images/news3.png";
import "./referandearn.css"
import { TokenUrl } from '../../Url';
import { ErrorHandler, SuccessNotification } from '../ErrorNotification';
import { Button, Input } from '@mantine/core';

const ReferandEarn = () => {
  const [data, setData] = useState("")
  const [code, setCode] = useState("")
  useEffect(() => {
    TokenUrl().get('/get-referal-point').then(res => {
      setData(res?.data?.data)
    }).catch(err => {
      ErrorHandler(err)
    })
  }, [])

  const onClaim = () => {
    TokenUrl().post('post-referal-point', { code: code }).then((res) => {
      SuccessNotification({ title: "Claimed!", message: "You have received the referral points." })
    }).catch((err) => {
      ErrorHandler(err)
    })
  }



  return (
    <div>

      <div className="refandearn">
        <div className="infobody-referandearn">
          <div className="info-headerrefer">
            <div className="div">
              <h1>Refer and Earn</h1>
              <h3>You can now Earn up to 100 points by referring someone.</h3>
              <h3>Your referreal code is: {data.referral_code} </h3>
            </div>
          </div>
          <div className="woman-imagerefer">
            <img src={news3} alt="" />
          </div>
        </div>
        <div className="infobody-referandearn">
          <div className="info-headerrefer">
            <div className="div">
              <h1>Enter referral code</h1>
              <Input placeholder='Enter your code.' onChange={(e) => setCode(e.target.value)} value={code} />
              <Button color={"gray"} variant={"outline"} className={"mt-2"} onClick={onClaim}>claim!</Button>
            </div>
          </div>

        </div>
      </div>


    </div >
  )
}

export default ReferandEarn