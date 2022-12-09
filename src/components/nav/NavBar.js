import {   React } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as CgIcons from 'react-icons/cg';

import "./navbar.css";

const NavBar = () => {

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div>
      <Nav className="justify-content-end test" activeKey="/home">
        <NavDropdown
          title="English/Eur"
          id="nav-dropdown"
          variant="pills"
          activeKey="1"
          onSelect={handleSelect}
        >
          <NavDropdown.Item eventKey="4.1"> English </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2"> French </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3"> Nepali </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4"> Currency </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          
         
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>window.open('http://35.80.167.18:81')} id="nav-dropdown" eventKey="link-2">
            {" "}
            Login/Register 
            
          </Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link id="nav-dropdown" eventKey="link-2">
            {" "}
            
            <CgIcons.CgProfile/>
            
            Profile
            
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
