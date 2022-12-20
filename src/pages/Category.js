import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ErrorHandler } from '../components/ErrorNotification';
import NavBar from '../components/nav/NavBar'
import Sidebar from '../components/sidebar/Sidebar'
import { GameImgUrl, Url } from '../Url';

function Category() {

    const [data, setData] = useState([]);
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        Url.get(`categories/${id}`).then((data) => {

            setData(data?.data?.data)
        }).catch((err) => {
            ErrorHandler(err)
        })
    }, [id])

    return (
        <>
            <Sidebar />
            <NavBar />
            <div id="mainbodygame">
                <div className="head">
                    <div className="card1">
                        {
                            data?.Games?.length === 0 ? <p>No active games availabe </p> :
                                data.Games?.map((e) =>
                                    <div className="fcard">
                                        <div className="img">
                                            <img src={`${GameImgUrl}/${data.image}`} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>{e?.name}</p>
                                            <h6>Prize: {e.prize}</h6>
                                            <a href={`/game/${e.id}`}>
                                                <button className="pick" >Quick Pick</button>
                                            </a>
                                            {/* <a href={`http://35.80.167.18:81/games/${e.id}/play`} target={'_blank'}>
                                                <button className="pick" >Quick Pick</button>
                                            </a> */}
                                        </div>
                                    </div>
                                )
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Category