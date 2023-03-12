import React from 'react';
import Table from 'react-bootstrap/Table';
import NavBar from '../nav/NavBar';
import Sidebar from '../sidebar/Sidebar';
import './winnings.css'

function Winnings() {
  return (
    <div>
        <Sidebar/>
        <NavBar/>
        
        <div className="winning-banner">
          <div className="winning-header">
            <div className="div">
                <h1>Winning Numbers</h1>
                <h3>History of Winning Numbers</h3>
            </div>
          </div>
          </div>
    <Table className='winnings' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Winning Numbers</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          
        </tr>
        
      </tbody>
    </Table>
    </div>
  );
}

export default Winnings;