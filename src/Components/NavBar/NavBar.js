import React, { useState } from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";
import { routes } from "../../Routes";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Nav routes={routes} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBar;