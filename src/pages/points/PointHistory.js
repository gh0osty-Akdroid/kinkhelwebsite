import React, { useEffect, useState } from 'react'
import "./pointhistory.css"
import Table from "react-bootstrap/Table";
import { Pagination } from '@mantine/core';
import { TokenUrl } from '../../Url';
import { Title } from '../../components/Header';
import { ErrorHandler } from '../../components/ErrorNotification';

const PointHistory = () => {
  const [data, setData] = useState()
  const [pages, setPages] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    TokenUrl().get(`/points-details?page=${page}`).then(res => {
      setData(res?.data?.data?.data)
      setPages(res?.data?.data?.totalPages)
    }).catch((err) => {
      ErrorHandler(err)
    })
    Title('Points Details')
  }, [])



  return (
    <div>

      <div className="pointhistory-body">
        <div className="pointhistory-banner">
          <div className="pointhistory-header">
            <div className="div">
              <h1>Welcome to Points History</h1>
              <h3>Point History</h3>
            </div>
          </div>
        </div>


        <div className="pointhistory-title">
          <h2>Point</h2>
          <h3>Point History</h3>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Point</th>
              <th>Remarks</th>
              <th>Date</th>

            </tr>
          </thead>
          <tbody>
            {
              data?.length > 0 ?
                data.map((e, i) =>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.points}</td>
                    <td>{e.remarks}</td>
                    <td>{new Date(e.createdAt).toDateString()}</td>
                  </tr>
                )

                :
                <p>No Details Found</p>
            }


          </tbody>
        </Table>

        <Pagination total={pages} onChange={setPage} />
      </div>
    </div>
  )
}

export default PointHistory