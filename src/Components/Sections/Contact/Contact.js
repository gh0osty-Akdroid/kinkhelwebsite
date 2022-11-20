import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Contact.css'
const AboutUs = () => {
  return (
    <div>
      
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Location on Map</h2>
              </div>
            </div>
            <div className="col-md-8">
             
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.924577445074!2d85.33106357370615!3d27.694703324260402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2z4KSo4KSv4KS-4KSBIOCkrOCkvuCkqOClh-CktuCljeCkteCksCwg4KSV4KS-4KSg4KSu4KS-4KSh4KWM4KSBIDQ0NjAw!5e0!3m2!1sne!2snp!4v1656926256369!5m2!1sne!2snp" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" height={"100%"} width={"100%"}></iframe>
   
            </div>
            <div className="col-md-4">
              <div className="left-content">
                <h4>About our office</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
                <ul className="social-icons">
                  <li><a href="#"><i><FaFacebook/></i></a></li>
                  <li><a href="#"><i><FaTwitter/></i></a></li>
                  <li><a href="#"><i><FaLinkedin /></i></a></li>
                  <li><a href="#"><i><FaInstagram /></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="send-message">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Send us a Message</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required=""/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required=""/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutUs








