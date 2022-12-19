import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './sidebar.css'
import kinkhel from '../../assets/images/Kinkhel.png';
import axios from "axios";
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import { Url } from '../../Url';

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
  const [data, setData] = useState([])
  const [sItems, setSItems] = useState([])

  useEffect(() => {
    Url.get('categories?site=893022452').then((data2) => {
      setData(data2?.data?.data?.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      data.forEach(d => {
        let s = {
          title: d.name,
          path: `/category/${d.id}`,
          icon: <IoIcons.IoIosPaper />,
          cName: 'sub-nav'
        }
        let s2 = sItems
        s2.push(s)
        setSItems(s2)
      });
    }
  }, [data, sItems])

  const SidebarData2 = [
    {
      title: 'Home',
      path: '/',
      icon: <BiIcons.BiHomeAlt />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,


    },
    {
      title: 'All Games',
      icon: <CgIcons.CgGames />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: sItems
    },
    {
      title: 'Results',
      path: '/results',
      icon: <GiIcons.GiPodiumWinner />
    },
    {
      title: 'Information Centre',
      path: '/informationcentre',
      icon: <HiIcons.HiOutlineInformationCircle />
    },

    {
      title: 'News',
      path: '/news',
      icon: <BsIcons.BsNewspaper />
    },

    {
      title: 'FAQs',
      path: '/faqs',
      icon: <FiIcons.FiHelpCircle />
    },
    {
      title: 'Refer & Earn',
      path: '/referandearn',
      icon: <BsIcons.BsPeople />
    },
  ]

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>

        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>



        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <div className="kinkhelimg">
              <Link to="/home">
                <img src={kinkhel} alt="" />
              </Link>
            </div>
            {SidebarData2.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;