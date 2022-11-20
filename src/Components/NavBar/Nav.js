import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";

const Nav = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars style={{color:"white"}} />
        </DrawerButton>
        <SNavBrand>
        <SNavImg src="https://kinkhel.com/wp-content/uploads/2020/08/Transparent.png"></SNavImg>
        {/* <SNavbarBrand>Kinkhel</SNavbarBrand> */}
        </SNavBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
         
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Nav;
const SNavBrand = styled.div`
display:flex;
flex-direction:row;
`;

const SNavImg = styled.img`
width:150px;
height:auto;
`;

const DrawerButton = styled.button`
  all: unset;
  font-size: 2rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: #041e42;
  position:fixed;
  top:0;
  width:100%;
  max-width:100%;
  z-index:100;
`;
const NavContainer = styled.div`
  padding: 1rem 3rem;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const SNavbarBrand = styled.h2`
  font-size: 20px;
  color:white;
  margin:auto;
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 5px;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    color: white;
    background-color: #fcb900;
    border-radius: 5px;
  }
`;

