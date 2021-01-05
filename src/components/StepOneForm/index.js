import React from "react";
import styled from "styled-components";
import { Row, Col, Form, Button } from "react-bootstrap";
const StyledContainer = styled.div`
  h3 {
    text-align: center;
  }
  .form-wrapper {
    max-width: 600px;
    margin: auto;
  }
  .btn-wrapper {
    text-align: center;
  }
`;

function StepOneForm(props) {
  return (
    <StyledContainer>
      <h3 className="form-title mt-4">About You:</h3>
      <div className="form-wrapper mt-4">
        <Form>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>How much do you need to borrow? ($)</Form.Label>
                <Form.Control
                  name="need"
                  type="number"
                  placeholder="Borrow Amount"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label> Confirm Email</Form.Label>
                <Form.Control
                  name="emailConfirm"
                  type="email"
                  placeholder=" Confirm Email"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  name="street"
                  type="text"
                  placeholder="Yout Address"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  type="text"
                  placeholder="City"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control name="state" as="select" required />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Mobile Phone</Form.Label>
                <Form.Control
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Months at address</Form.Label>
                <Form.Control name="months" as="select" required />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Are You a Homeowner?</Form.Label>
                <Form.Control name="homeowner" as="select" required />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Driver License State</Form.Label>
                <Form.Control name="driverState" as="select" required />
              </Form.Group>
            </Col>
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>License #</Form.Label>
                <Form.Control
                  name="driverLicense"
                  type="number"
                  placeholder="Driver License"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>License Exp</Form.Label>
                <Form.Control
                  name="licenseExp"
                  type="date"
                  placeholder="mm/yy"
                  min="2021-1-17"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Date of birth</Form.Label>
                <Form.Control
                  name="birthday"
                  type="date"
                  placeholder="mm/yy"
                  max="2002-12-17"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Social Security Number</Form.Label>
                <Form.Control
                  name="socialSecurity"
                  type="number"
                  placeholder="Social Security Number"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Confirm Social Security</Form.Label>
                <Form.Control
                  name="confirmSecurity"
                  type="number"
                  placeholder="Confirm"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="btn-wrapper">
            <Button type="submit" variant="success" className="my-3 mx-2" onClick={props.onNextStep}>
              Next
            </Button>
          </div>
        </Form>
      </div>
    </StyledContainer>
  );
}

export default StepOneForm;
