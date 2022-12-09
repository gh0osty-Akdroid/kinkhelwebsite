import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './sidebar.css'
import kinkhel from '../../assets/images/Kinkhel.png';

const Nav = styled.div`
  background: transparent;
 height: 80px;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 position: absolute;

 @media (max-width: 2560px) {
  display:none
}


@media (max-width: 1440px) {
  display:none
}

@media (max-width: 1024px) {
  display:none
}

@media (max-width:540px) {
  display:initial;
}



@media (max-width: 425px) {
  display:initial
 
}


`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 2560px) {
    display:none
  }
  
  
  @media (max-width: 1440px) {
    display:none
  }

  

  @media (max-width: 1024px) {
    display:none
  }

  @media (max-width: 425px) {
    display:initial
    
  }
  @media (max-width:540px) {
    display:initial;
  }
`;

const SidebarNav = styled.nav`

overflow:auto;
  background: White;
  width: 230px;
  height: 200vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

  @media (max-width:540px) {
    display:initial;
    left: ${({ sidebar }) => (sidebar ? '-100%' : '0')};
  }

  @media (max-width:375px) {
    display:initial;
    left: ${({ sidebar }) => (sidebar ? '-100%' : '0')};
  }

  @media (max-width:320px) {
    left: ${({ sidebar }) => (sidebar ? '-100%' : '0')};
  }
  
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>

      <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>

       
    
        <SidebarNav  sidebar={sidebar}>
          <SidebarWrap>
          <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <div className="kinkhelimg">
          <img src={kinkhel} alt="" />
        </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;