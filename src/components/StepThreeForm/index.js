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

function StepThreeForm(props) {
  return (
    <StyledContainer>
      <h3 className="form-title mt-4">Financial Information:</h3>
      <div className="form-wrapper mt-4">
        <Form>
        <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>ABA/Routing number</Form.Label>
                <Form.Control name="routingNumber" type="number" required />
              </Form.Group>
            </Col>
          </Row>


          <Row className="mt-2">
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  name="accountNumber"
                  type="number"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Confirm Account Number</Form.Label>
                <Form.Control
                  name="confirmAccount"
                  type="number"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Type of Account</Form.Label>
                <Form.Control name="typeOfAccount" as="select" required />
              </Form.Group>
            </Col>
          </Row>

          <div className="btn-wrapper">
            <Button type="submit" variant="secondary" className="my-3 mx-2" onClick={props.onPrevStep}>
              Previous
            </Button>
            <Button type="submit" variant="success" className="my-3 mx-2" onClick={props.onNextStep}>
              Next
            </Button>
          </div>
        </Form>
      </div>
    </StyledContainer>
  );
}

export default StepThreeForm;
