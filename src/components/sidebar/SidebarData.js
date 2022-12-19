import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <BiIcons.BiHomeAlt/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: 'All Games',
    icon: <CgIcons.CgGames />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Lucky 3',
        path: '/alllotteries/USPowerball',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Lucky 5',
        path: '/alllotteries/usmegamillions',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Lucky 6',
        path: '/alllotteries/eurojackpot',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Lucky 5 + 1',
        path: '/alllotteries/bonoloto',
        icon: <IoIcons.IoIosPaper />
      },
    ]
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
];