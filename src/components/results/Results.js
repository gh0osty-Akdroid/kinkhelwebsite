import React from 'react'

import "./results.css"
import lucky3 from '../../assets/images/ball-1.png'
import { Link } from 'react-router-dom'

const Results = () => {
  
  return (
    <div>

      <div className="result-body">
        <div className="result-banner">
          <div className="result-header">
            <div className="div">
              <h1>Welcome to Results</h1>
              <h3>History of Winning Numbers</h3>
            </div>
          </div>
        </div>
        <div className="result-heading">
          <h2>Winning Numbers</h2>
        </div>

        <div className="result-card">
          <div className="result-one">
            <div className="result-img">
              <img src={lucky3} alt="Lucky 3" />
            </div>
            <div className="result-category">
              <h4></h4>
              <h3>December 21, 2022</h3>
              <div className="winning-number">
                <div className="circle">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
                <div className="circle">4</div>
                <div className="circle">5</div>
                <div className="circle">6</div>
              </div>

              <div className="play">
                <h3>POWERPLAY X2</h3>
              </div>


              <div className="winning-previous">
                <Link to="/winnings"><h3>Previous Winning Numbers</h3>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Results