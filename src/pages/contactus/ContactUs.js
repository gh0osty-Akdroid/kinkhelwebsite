import React from 'react'
import { Form, Row } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/nav/NavBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './contactus.css';

const ContactUs = () => {
  return (
    <div><NavBar/>
    <Sidebar/>
    <div className="contactus-form">
    <Form>
      <Row className="mb-3">

        
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label> First Name</Form.Label>
          <Form.Control  placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label> Last Name</Form.Label>
          <Form.Control  placeholder="Enter Lasr Name" />
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="Subject" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Subject" Erows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <Footer/></div>
  )
}

export default ContactUs