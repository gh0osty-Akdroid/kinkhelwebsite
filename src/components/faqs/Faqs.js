import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../nav/NavBar";
import Sidebar from "../sidebar/Sidebar";
import Accordion from "react-bootstrap/Accordion";
import news3 from "../../assets/images/news3.png";
import "./faq.css";

const Faqs = () => {
  return (
    <div>

      <div className="collapseable-faq">
        <div className="infobody-banner-faq">
          <div className="info-header-faq">
            <div className="div">
              <h1>Welcome to Frequently Asked Questions</h1>
              <h3>Most frequently askde questions are put below.</h3>
            </div>
          </div>
          <div className="woman-image">
            <img src={news3} alt="" />
          </div>
        </div>

        <Accordion className="accordion-faq">
          <Accordion.Item eventKey="0" className="accordion-faq-one">
            <Accordion.Header>How to play??</Accordion.Header>
            <Accordion.Body>Play like a champ!!</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="accordion-faq-two">
            <Accordion.Header>How can Money be withdrawn?</Accordion.Header>
            <Accordion.Body>
              You can directly load up the money to your bank account and you
              can also link it to your E-Sewa and Khalti.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </div>
  );
};

export default Faqs;
