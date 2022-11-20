import React from 'react'

const Aboutus = () => {
  return (
    <>
    <section id="ts-service-area" className="ts-service-area pb-0">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            {/* <h2 className="section-title">We Are Specialists In</h2> */}
                            <h3 className="section-sub-title">Extra About Us</h3>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ts-service-box d-flex">
                                <div className="ts-service-box-img">
                                    <img loading="lazy" src="https://cdn4.iconfinder.com/data/icons/erp-software-icon-set-1/512/new_purchase-512.png" style={{ height: '100px' }} alt="service-icon" />
                                </div>
                                <div className="ts-service-box-info">
                                    <h3 className="service-box-title"><a href="#">Buy</a></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                                </div>
                            </div>

                            <div className="ts-service-box d-flex">
                                <div className="ts-service-box-img">
                                    <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi10ubOojZTK8x_H-0kSoYucmhTxrkinR27g&usqp=CAU" style={{ height: '100px' }} alt="service-icon" />
                                </div>
                                <div className="ts-service-box-info">
                                    <h3 className="service-box-title"><a href="#">Earn Points</a></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                                </div>
                            </div>



                        </div>

                        <div className="col-lg-4 text-center">
                            <img loading="lazy" className="img-fluid" src="https://cdni.iconscout.com/illustration/premium/thumb/playing-games-online-3594032-3007151.png" alt="service-avater-image" />
                        </div>

                        <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
                            <div className="ts-service-box d-flex">
                                <div className="ts-service-box-img">
                                    <img loading="lazy" src="https://www.seekpng.com/png/detail/346-3465654_game-controller-icon-free-png-joystick-icon.png" style={{ height: '100px' }} alt="service-icon" />
                                </div>
                                <div className="ts-service-box-info">
                                    <h3 className="service-box-title"><a href="#">Play Different Games</a></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                                </div>
                            </div>

                            <div className="ts-service-box d-flex">
                                <div className="ts-service-box-img">
                                    <img loading="lazy" src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/121-512.png" style={{ height: '100px' }} alt="service-icon" />
                                </div>
                                <div className="ts-service-box-info">
                                    <h3 className="service-box-title"><a href="#">Win Different Prizes</a></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </section>
    </>
  )
}

export default Aboutus