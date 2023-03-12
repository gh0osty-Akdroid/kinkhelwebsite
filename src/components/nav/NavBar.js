import { React } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as CgIcons from 'react-icons/cg';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  const token = useSelector(p => p.authToken?.authToken)

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div>
      <Nav className="justify-content-end test" activeKey="/">
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
        {
          !token ?
            <Nav.Item>
              <Nav.Link onClick={() => window.open('http://35.80.167.18:81')} id="nav-dropdown" eventKey="link-2">
                <Link to={'/login'}>
                  {" "}
                  Login/Register
                </Link>
              </Nav.Link>
            </Nav.Item> :

            <Nav.Item>
              <Nav.Link id="nav-dropdown" eventKey="link-2">
                <Link to={'/profile'}>
                  <CgIcons.CgProfile />

                  Profile
                </Link>


              </Nav.Link>
            </Nav.Item>
        }
      </Nav>
    </div>
  );
};

export default NavBar;
