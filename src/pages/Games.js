import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Url } from '../Url'

const GamesCollection = () => {
  const [data, setData] = useState([])
  const site = useSelector(p => p.site.site)
  useEffect(() => {
    Url().get(`/games?site=${site}`).then((data) => {
      setData(data?.data?.data)
    }).catch((err) => {

    })

  }, [])



  return (
    <div id="mainbodygame">
      <div className="card1">
        {
          data?.map((e, i) =>
            <div className="fcard" key={i}>
              <div className="img">
                <img src={`http://52.26.60.188:6969/${e?.Category?.image}`} alt="" />
              </div>
              <div className="text">
                <p>{e?.name}</p>
                <h6>Prize: {e.prize}</h6>
                {/* <a href={`http://35.80.167.18:81/games/game/${e.id}/play`}>
                      <button className="pick" >Quick Pick</button>
                    </a> */}
                <Link to={`/${e.id}/play`}>
                  <button className="pick" >Quick Pick</button>
                </Link>
              </div>
            </div>
          )
        }

      </div>
    </div>

  );
}

export default GamesCollection