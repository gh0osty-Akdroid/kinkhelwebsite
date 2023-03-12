import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ErrorHandler } from '../components/ErrorNotification';
import { GameImgUrl, Url } from '../Url';

function Category() {

    const [data, setData] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        Url().get(`categories/${id}`).then((data) => {
            setData(data?.data?.data)
        }).catch((err) => {
            ErrorHandler(err)
        })
    }, [id])

    return (
        <>
            <div id="mainbodygame">
                <div className="head">
                    <div className="card1">
                        {
                            data=== null || data.lenght === 0 ? <p>No active games availabe </p> :
                                data?.Games?.map((e, i) =>
                                    <div key={i} className="fcard">
                                        <div className="img">
                                            <img src={`${GameImgUrl}/${data.image}`} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>{e?.name}</p>
                                            <h6>Prize: {e.prize}</h6>
                                            <Link to={`/${e.id}/play`}>
                                                <button className="pick" >Quick Pick</button>
                                            </Link>
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