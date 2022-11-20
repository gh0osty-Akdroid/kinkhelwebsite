import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: fit-content;
  display: flex;
  z-index:100;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top:5px;
  background-color:#041e42;

  visibility: hidden;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
@media (max-width: 768px) {
  display: none;
}
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

const SubRoute = styled(Link)`
  text-decoration: none;
  color: white;
  font-size:16px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  &:hover {
    transition: 0.3s ease-in;
    color:  black;
    background-color: #fcb900;
  }
`;