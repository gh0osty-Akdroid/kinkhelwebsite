import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../Css/Footer.css'


const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="footer-top">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 footer-links">
                                            <h4>Useful Links</h4>
                                            <ul>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-6 footer-links">
                                            <h4>Our Services</h4>
                                            <ul>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">......</a></li>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">......</a></li>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">......</a></li>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">......</a></li>
                                                <li><i className="bx bx-chevron-right"></i> <a href="#">......</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-6 footer-contact">
                                            <h4>Contact Us</h4>
                                            <p> .... <br /> .........<br /> Nepal <br /><br /> <strong>Phone:</strong>+977 ......<br /> <strong>Email:</strong> info@example.com<br /> </p>
                                        </div>
                                        <div className="col-lg-3 col-md-6 footer-info">
                                            <h3>About Play&Win</h3>
                                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                            <div className="social-links mt-3">
                                                <a href="#" className="twitter"><FaTwitter/></a>
                                                <a href="#" className="facebook"><FaFacebook/></a>
                                                <a href="#" className="instagram"><FaInstagram/></a>
                                                <a href="#" className="linkedin"><FaLinkedin/></a>
                                            </div>
                                            <button className='merchant'>Become A Merchant</button>
                                        </div>
                                        <div>
                                            <div className="container">
                                                <div className="copyright"> &copy; Copyright <strong>Play & Win</strong>. All Rights Reserved </div>

                                                {/* <div className="credits"> Designed by <a href="#">Play&Win</a> </div> */}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer