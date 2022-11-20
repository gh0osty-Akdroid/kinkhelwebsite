import React from 'react'
import './AboutUs.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const AboutUs = () => {
  return (
    <>
      <div className="best-features about-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Background</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2F0aG1hbmR1fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Who we are &amp; What we do?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
                <ul className="social-icons">
                  <li><a href="#"><i><FaFacebook /></i></a></li>
                  <li><a href="#"><i><FaTwitter /></i></a></li>
                  <li><a href="#"><i><FaLinkedin /></i></a></li>
                  <li><a href="#"><i><FaInstagram /></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="team-members">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Team Members</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="https://images.unsplash.com/photo-1478713361921-04b7ac591569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNpdCUyMHVwc3xlbnwwfHwwfHw%3D&w=1000&q=80" style={{ height: '240px' }} alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li><a href="#"><i><FaFacebook /></i></a></li>
                        <li><a href="#"><i><FaTwitter /></i></a></li>
                        <li><a href="#"><i><FaLinkedin /></i></a></li>
                        <li><a href="#"><i><FaInstagram /></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Johnny William</h4>
                  <span>CO-Founder</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img style={{ height: '240px' }} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li><a href="#"><i><FaFacebook /></i></a></li>
                        <li><a href="#"><i><FaTwitter /></i></a></li>
                        <li><a href="#"><i><FaLinkedin /></i></a></li>
                        <li><a href="#"><i><FaInstagram /></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Karry Pitcher</h4>
                  <span>Product Expert</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img style={{ height: '240px' }} src="https://media.newyorker.com/photos/606cd925407075a363d50dec/master/pass/Indurti-PersonofColorSomethingHappened.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li><a href="#"><i><FaFacebook /></i></a></li>
                        <li><a href="#"><i><FaTwitter /></i></a></li>
                        <li><a href="#"><i><FaLinkedin /></i></a></li>
                        <li><a href="#"><i><FaInstagram /></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Michael Soft</h4>
                  <span>Chief Marketing</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img style={{ height: '240px' }} src="https://i0.wp.com/www.yesmagazine.org/wp-content/uploads/2022/03/Ghaderi_1400x840.jpg?fit=1400%2C840&quality=90&ssl=1" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li><a href="#"><i><FaFacebook /></i></a></li>
                        <li><a href="#"><i><FaTwitter /></i></a></li>
                        <li><a href="#"><i><FaLinkedin /></i></a></li>
                        <li><a href="#"><i><FaInstagram /></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Mary Cool</h4>
                  <span>Product Specialist</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img style={{ height: '240px' }} src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li><a href="#"><i><FaFacebook /></i></a></li>
                        <li><a href="#"><i><FaTwitter /></i></a></li>
                        <li><a href="#"><i><FaLinkedin /></i></a></li>
                        <li><a href="#"><i><FaInstagram /></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>George Walker</h4>
                  <span>Product Photographer</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img style={{ height: '240px' }} src="https://images.unsplash.com/photo-1478713361921-04b7ac591569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNpdCUyMHVwc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li><a href="#"><i><FaFacebook /></i></a></li>
                        <li><a href="#"><i><FaTwitter /></i></a></li>
                        <li><a href="#"><i><FaLinkedin /></i></a></li>
                        <li><a href="#"><i><FaInstagram /></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Kate Town</h4>
                  <span>General Manager</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Product Management</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <Link to={"extra"} className="filled-button">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Customer Relations</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <a href="#" className="filled-button">Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Global Collection</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <a href="#" className="filled-button">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutUs