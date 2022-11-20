import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
const Partnership = () => {


    function SimpleSlider() {


        const SliderWrap = styled.div`
        .slick-slider {
            Background-color: Var(--brand-black);
            .slick-list {
                .slick-track {
                    .slick-slide{
                        padding: 0 15px;
                       
                    }
                }         
            }
        }
        .slick-slider .slick-next{
            right:0px
            
        }.slick-slider .slick-prev{
            left:0px
            
        }
    `;

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 5,
            slidesToScroll: 1
        }

        const Data = () => {
            return (
                <div className="image_5"><img src="https://thumbs.dreamstime.com/b/handshake-14482643.jpg" /></div>
            )
        }


        return (
            <SliderWrap>
                <Slider {...settings}>
                    <div className='col-md-3'>
                        <Data />
                    </div>
                    <div className='col-md-2'>
                        <Data />
                    </div>
                    <div className='col-md-2'>
                        <Data />
                    </div>
                    <div className='col-md-2'>
                        <Data />
                    </div>
                    <div className='col-md-2'>
                        <Data />
                    </div>
                    <div className='col-md-2'>
                        <Data />
                    </div>
                    <div className='col-md-2'>
                        <Data />
                    </div>
                </Slider>
            </SliderWrap>
        );
    }

    return (
        <>
            <section id="partnership">
                <div className="container">
                    <div className="row">
                        <div className="row text-center">
                            <div className="col-12">
                                <h3 className="section-sub-title">Our Partners</h3>
                            </div>
                        </div>
                        <div className="service_section_2 layout_padding">
                            <div className="row">
                                <SimpleSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partnership