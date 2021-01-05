import React from "react";
import styled from "styled-components";
import { Row, Col, Form, Button } from "react-bootstrap";

const StyledContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem;
  border-radius: 20px;
  max-width: 700px;
  margin: auto;
`;

function ContactForm() {
  return (
    <StyledContainer>
      <Form>
        <Row className='mt-2' >
          <Col sm='6' xs='12' >
            <Form.Group>
              <Form.Label >Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Your Name" required />
            </Form.Group>
          </Col>
          <Col sm='6' xs='12' >
            <Form.Group>
              <Form.Label >Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-2' >
          <Col>
            <Form.Group>
              <Form.Label >Application #</Form.Label>
              <Form.Control name="application" type="number" placeholder="Application Number" required />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-2' >
          <Col>
            <Form.Group>
              <Form.Label >Message</Form.Label>
              <Form.Control name="message" as='textarea' style={{height: 180}} placeholder="Type Your Message" />
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' variant='success' className='my-3 w-100' >Submit</Button>
      </Form>
    </StyledContainer>
  );
}

export default ContactForm;
