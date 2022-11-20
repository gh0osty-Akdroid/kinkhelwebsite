import React from 'react'
import downimage from '../../../Images/down-arrow.png'
import Slider from "react-slick";
import styled from 'styled-components'


const Clients = () => {


    const SimpleSlider = () => {

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
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
        }

        const Data = () => {
            return (
                <>
                    <div className="client_box">
                        <p className="dummy_text">Lorem ipsum dolor . Duis aute irure dolor in reprehenderi</p>
                    </div>
                    <div className="image_5"><img src="https://media.istockphoto.com/photos/young-black-woman-with-braid-using-notebook-in-home-room-picture-id1226859700?k=20&m=1226859700&s=612x612&w=0&h=EfrvWgGGcHacnOxg3lJsHmgVrHOPM5Z6tb3_1bc4ii4=" /></div>
                    <h1 className="distribution_text">WINNER</h1>
                    <h3 className="owner_text">Nepali Nepali</h3>
                </>
            )
        }

        return (

            <SliderWrap>
                <Slider {...settings}>
                    <div className='col-md-3'>
                        <Data />
                    </div>
                    <div className='col-md-3'>
                        <Data />
                    </div>
                    <div className="col-md-3">
                        <Data />
                    </div>
                    <div className='col-md-3'>
                        <Data />
                    </div>
                    <div className='col-md-3'>
                        <Data />
                    </div>

                </Slider>
            </SliderWrap>

        )
    }

    return (
        <>
            <div className="client_section layout_padding">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h3 className="section-sub-title">Winners</h3>
                        </div>
                    </div>
                    <p className="client_text">Some words from our winners</p>
                    <div className="service_section_2 layout_padding">
                        <div className="row">
                            <SimpleSlider />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Clients