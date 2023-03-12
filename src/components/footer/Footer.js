import React from 'react'
import './footer.css'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Footer = () => {
  const token = useSelector(p => p.authToken?.authToken)
  return (
    <div>
      <footer className="section-p1">

        <div className="col">
          <h4>About</h4>
          <Link to='/about-us'>
            About Us
          </Link>

          <Link to='/customer-reward-policy'> Customer Reward Policy </Link>
          <Link to='/return-and-refundpolicy'>Return and Refund Policy </Link>
          <Link to='/terms-and-conditions'>Terms & Conditions </Link>

        </div>

        <div className="col">
          <h4>My Account</h4>

          <>{
            !token ? <Link to={'/login'}>
              Login / Register
            </Link> :
              <Link to={'/profile'}>
                Profile
              </Link>
          }
          </>



        </div>

        <div className="col install">
          <h4>Useful Links</h4>
          <Link to='/contact-us'>Contact US</Link>
          <Link to='/faqs'>FAQ </Link>
        </div>


        <div className="copyright">
          {/* <p> @2022, Powerd by AKDROID NEPAL. </p> */}
        </div>
      </footer>

    </div>
  )
}

export default Footer