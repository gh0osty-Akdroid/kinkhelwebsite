import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Complaint = () => {
    return (
        <div style={{ padding:'20px 50px 50px 50px' }}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Select Your Account</Form.Label>
                    <Form.Select>
                        <option>User Account</option>
                        <option>Merchant Account</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Your Registered Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Your Registered Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Your Complain</Form.Label>
                    {/* <Form.Control type="textarea" placeholder="Enter Your Registered Number" /> */}
                    <fieldset>
                        <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                      </fieldset>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Complaint