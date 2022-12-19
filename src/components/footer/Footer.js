import React from 'react'
import './footer.css'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="section-p1">
       
        <div className="col">
            <h4>About</h4>
            <Link to='/pages/aboutus'>
             About Us
            </Link>
            
          <Link to='/pages/customerrewardpolicy'> Customer Reward Policy </Link>
          <Link to='/pages/returnandrefundpolicy'>Return and Refund Policy </Link>
          <Link to='/pages/termsandconditions'>Terms & Conditions </Link>
         
        </div>

        <div className="col">
            <h4>My Account</h4>
            <Link onClick={()=>window.open('http://35.80.167.18:81')} eventKey="link-2">
            {" "}
            Sign In 
            
          </Link>
           
        </div>

        <div className="col install">
            <h4>Useful Links</h4>
            <Link to='/pages/contactus'>Contact US</Link>
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