import React, { useEffect, useState } from 'react'
import "./bannerone.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImgUrl, ImgUrl2, Url } from '../../Url';
import { ErrorHandler } from '../ErrorNotification';

const Bannerone = () => {

  const [banner, setBanner] = useState([])

  useEffect(() => {

    Url().get('/banner').then((res) => {
      setBanner(res?.data?.data['rows'])
    }).catch((err) => {
      ErrorHandler(err)
    })
  }, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div >
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          banner?.map((e, i) =>
            <div>
              <img src={`${ImgUrl}${e.image}`} />
              <p className="legend">{e.text}</p>
            </div>
          )
        }
      </Carousel>
    </div>
  )
}

export default Bannerone