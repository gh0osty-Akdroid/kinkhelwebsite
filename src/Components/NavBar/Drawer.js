import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";
const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
      <SNavbarBrand>LOGO</SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
         
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
const SNavbarBrand = styled.h2`
  font-size: 22px;
  text-align:center;
  background-color:#041e42;
  color:white;
  padding: 1rem;  
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  color:white;
  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: fixed;
  top: 0;
  height: 100%;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 0.5rem;
`;

