import React from 'react'
import './footer.css'
import appimg from '../../assets/images/app.jpg'
import playimg from '../../assets/images/play.jpg'
import payimg from '../../assets/images/pay.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="section-p1">
       
        <div className="col">
            <h4>About</h4>
            <Link to='/pages/aboutus'>
            <a href='#'>About Us</a>
            </Link>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={appimg} alt=""/>
                <img src={playimg} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={payimg} alt=""/>
        </div>


        <div className="copyright">
            <p> @2022, Powerd by AKDROID NEPAL. </p>
        </div>
    </footer>

    </div>
  )
}

export default Footer