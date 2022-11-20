import React from 'react'
import { Link } from 'react-router-dom'

const Games = () => {
    return (
        <>
            <div className="games">
                <div className="container">
                    <div className="row">
                        <div className="row text-center">
                            <div className="col-12">
                                {/* <h2 className="section-title">We Are Specialists In</h2> */}
                                <h3 className="section-sub-title">Our Games</h3>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="games_box text_align_left">
                                <div className="games_img">
                                    <figure>
                                        <img src="https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg" alt="#" /></figure>
                                    <Link to={'/'}>Lucky 3</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="games_box text_align_left">
                                <div className="games_img">
                                    <figure>
                                        <img src="https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg" alt="#" />
                                    </figure>
                                    <Link to={'/'}>Lucky 4</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="games_box text_align_left">
                                <div className="games_img">
                                    <figure>
                                    <img src="https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg" alt="#" /></figure>
                                    <Link to={'/'}>Lucky 5</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="games_box text_align_left">
                                <div className="games_img">
                                    <figure>
                                    <img src="https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg" alt="#" /></figure>
                                    <Link to={'/'}>Lucky 6</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Games