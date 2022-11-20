import { faStore, faUser, faUserFriends, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const OurGroups = () => {
  return (
    <>
     <div className="classes">
                <div className="container">
                    <div className="row">
                        <div className="row text-center">
                            <div className="col-12">
                                <h1 className="section-sub-title">Our Groups</h1>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="white_bg">
                                <div className="row">
                                   
                                    <div className="col-md-4">
                                        <div id="ho_heal" className="our_class text_align_center">
                                            <FontAwesomeIcon icon={faStore}  className="icon"/>
                                            <h3 className='yellow'>Merchant</h3>
                                            <a className='orange'><p>200+ <br />Merchants</p></a>
                                            {/* <a className="read_more" href="javascript:void(0)">Read More</a> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div id="ho_heal" className="our_class text_align_center">
                                        <FontAwesomeIcon icon={faUser}  className="icon"/>
                                            <h3 className='yellow'>User</h3>
                                            <a className='orange'><p>200+ <br />Users</p></a>
                                            {/* <a className="read_more" href="javascript:void(0)">Read More</a> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div id="ho_heal" className="our_class text_align_center">
                                            <i className='orange'><FontAwesomeIcon icon={faUserFriends} className="icon"/></i>
                                        
                                            <h3 className='yellow'>Winners</h3>
                                            <a className='orange'><p>200+ <br />Winners</p></a>
                                            {/* <a className="read_more" href="javascript:void(0)">Read More</a> */}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default OurGroups