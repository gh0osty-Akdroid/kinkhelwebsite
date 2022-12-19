import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./about.css";

const AboutUs = () => {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <div className="about">
        <div className="about-header">
          <h4>About us</h4>
        </div>

        <p>
          “Kinkhel” is a trademark of VB Group Holdings Private Limited, a
          company incorporated under the Companies Act, 2018 with its registered
          office at Baluwatar-4, Thirbum Sadak, Kathmandu, Nepal. The domain
          name www.kinkhel.com is owned by the Company. Please feel free to
          reach out to us at our Customer Care helpline: 9802092510
          (Whatsapp/Viber)
        </p>
      </div>
      <Footer />
      AboutUs
    </div>
  );
};

export default AboutUs;
