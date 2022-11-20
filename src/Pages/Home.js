import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../Components/Css/Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroSection from '../Components/Sections/HomePage/IntroSection'
import OurGroups from '../Components/Sections/HomePage/OurGroups'
import Games from '../Components/Sections/HomePage/Games'
import Tabs from '../Components/Sections/HomePage/Tabs'
import Aboutus from '../Components/Sections/HomePage/Aboutus'
import Partnership from '../Components/Sections/HomePage/Partnership'
import Clients from '../Components/Sections/HomePage/Winner'
// import {Carousel, CarouselItem} from"../Carousel/Carousel";
// import  CarouselItem from"../Carousel/CarouselItem";


const HomePage = () => {    
    return (
        <>
        <IntroSection/>
        <OurGroups/>
        <Games/>
        <Tabs/>
        <Aboutus/>
        <Clients/>
        <Partnership/>
        </>
    );
}

export default HomePage

