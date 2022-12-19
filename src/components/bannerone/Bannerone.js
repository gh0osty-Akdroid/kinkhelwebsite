import React from 'react'
import "./bannerone.css"
import {Link } from "react-router-dom"

const Bannerone = () => {
  return (
    <div id="mainbodybannerone">
        <div id="banner" className="section-m1">
          <h4>Play now</h4>
          <h2>
            for <span>Life Changing</span> Jackpots
          </h2>
          <Link onClick={()=>window.open('http://35.80.167.18:81')}>
          <button className="normal">Sign In</button>
          </Link>
        </div>
    </div>
  )
}

export default Bannerone