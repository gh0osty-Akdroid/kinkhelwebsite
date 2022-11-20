import React from 'react'
import Background from '../../../Images/dice4.jpg'

const IntroSection = () => {
    return (
        <div className="about" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${Background})`,   backgroundAttachment:" fixed"    }}>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-5 d_flex">
                        <div className="titlepage text_align_left" style={{ paddingLeft: '30%' }}>
                            <h1>Play & Win</h1>
                            <p>Play different games using points</p>
                            <a className="read_more" href="about.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="about_img" >
                            {/* <figure><img src="https://kinkhel.com/wp-content/uploads/2020/08/Transparent.png " alt="#" /></figure> */}
                            <video width={"auto"} height="500" autoPlay muted playsInline loop >
                                <source src="/Videos/playwin2.mp4" type="video/mp4" />
                            </video>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection