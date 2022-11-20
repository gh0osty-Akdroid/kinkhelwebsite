import React, {useState} from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tabs = () => {
    const [id, setID] = useState("");
    const [activeTab, setActiveTab] = useState("1");

    const TabContent = ({ id, activeTab, children }) => {
        return (
            activeTab === id ?
                <>{children}</>
                : null
        );
    }

    const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

        const handleClick = () => {
            setActiveTab(id);
        };

        return (
            <li ><a onClick={handleClick} className={activeTab === id ? "active" : ""}>{title} <i><FontAwesomeIcon icon={faAngleRight}/>
</i></a></li>
        );
    }
    
  return (
      <>
      <div className="tabs-content" id="tabs-area">
                <div className="container">
                    <div className="row">
                        <div className="row text-center">
                            <div className="col-12">
                                <h3 className="section-sub-title">How To</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="tabs clearfix" data-tabgroup="third-tab-group">
                                <TabNavItem title="SignIn" id="1" activeTab={activeTab} setActiveTab={setActiveTab} />
                                <TabNavItem title="Purchase" id="2" activeTab={activeTab} setActiveTab={setActiveTab} />

                                <TabNavItem title="Games" id="3" activeTab={activeTab} setActiveTab={setActiveTab} />
                                <TabNavItem title="Win Prizes" id="4" activeTab={activeTab} setActiveTab={setActiveTab} />
                                {/* <TabNavItem title="Points" id="5" activeTab={activeTab} setActiveTab={setActiveTab} /> */}
                                {/* <TabNavItem title="Lucky Faces" id="6" activeTab={activeTab} setActiveTab={setActiveTab} /> */}
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <section id="third-tab-group" className="recommendedgroup">
                                <TabContent id={"1"} activeTab={activeTab}>
                                    <Video />
                                </TabContent>
                                <TabContent id={"2"} activeTab={activeTab}>
                                    <Video2 />
                                </TabContent>
                                <TabContent id={"3"} activeTab={activeTab}>
                                    <Video3 />
                                </TabContent>
                                <TabContent id={"4"} activeTab={activeTab}>
                                    <Video4 />
                                </TabContent>
                                <TabContent id={"5"} activeTab={activeTab}>
                                    <Video5 />
                                </TabContent>
                                <TabContent id={"6"} activeTab={activeTab}>
                                    <Video6 />
                                </TabContent>


                            </section>
                        </div>
                    </div>
                </div>
            </div>
      </>
  )
}

export default Tabs


const Video = () => {
    return (<>
        <div id="livingroom">
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/tbbveDpUZv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
        </div>
    </>)

}

const Video2 = () => {
    return (<>
        <div id="livingroom">
            <div className="row">
                <div className="col-md-12">
                        <div className="item">
                            <div className="suiteroom-item">
                                <img src="img/suite-02.jpg" alt="" />
                                <div className="text-content">
                                    <h4>Content1</h4>
                                    <span>......</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="suiteroom-item">
                                <img src="img/suite-01.jpg" alt="" />
                                <div className="text-content">
                                    <h4>Content 2</h4>
                                    <span>......</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="suiteroom-item">
                                <img src="img/suite-03.jpg" alt="" />
                                <div className="text-content">
                                    <h4>Content 3</h4>
                                    <span>.....</span>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>

    </>)
}
const Video3 = () => {
    return (<>
        <div id="livingroom">
            <img src="img/swiming-pool.jpg" alt="" />
            <div className="row">
                <div className="col-md-12">
                    <div className="text-content">
                        <h4>Content 1</h4>
                        <span>......</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

const Video4 = () => {
    return (<>
        <div id="livingroom">
            <img src="img/massage-service.jpg" alt="" />
            <div className="row">
                <div className="col-md-12">
                    <div className="text-content">
                        <h4>Content 1</h4>
                        <span>......</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
const Video5 = () => {
    return (<>
        <div id="livingroom">
            <img src="img/fitness-service.jpg" alt="" />
            <div className="row">
                <div className="col-md-12">
                    <div className="text-content">
                        <h4>Content 1</h4>
                        <span>.....</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
const Video6 = () => {
    return (<>
        <div id="livingroom">
            <img src="img/evening-event.jpg" alt="" />
            <div className="row">
                <div className="col-md-12">
                    <div className="text-content">
                        <h4>Content 1</h4>
                        <span>.....</span>
                    </div>
                </div>
            </div>
        </div>
    </>)

}