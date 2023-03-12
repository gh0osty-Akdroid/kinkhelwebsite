import React from "react";
import "./header.css";
import Figure from "react-bootstrap/Figure";
import slider from "../../assets/images/slider.jpg";


const Header = () => {
  return (
    <div>
      <Figure className="header">
        <Figure.Image className="img" src={slider} alt="171x180" />
      </Figure>
      
    </div>
  );
};

export default Header;
