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

function StepTwoForm(props) {
  return (
    <StyledContainer>
      <h3 className="form-title mt-4">Income:</h3>
      <div className="form-wrapper mt-4">
        <Form>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Source of income</Form.Label>
                <Form.Control name="income" as="select" required />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Employer Name</Form.Label>
                <Form.Control
                  name="employerName"
                  type="text"
                  placeholder="Employer Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm="6" xs="12">
              <Form.Group>
                <Form.Label>Months Employed</Form.Label>
                <Form.Control name="monthsEmployed" type="number" required />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Employer Phone</Form.Label>
                <Form.Control name="employerPhone" type="phone" required />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>Gross Monthly Income ($)</Form.Label>
                <Form.Control name="monthlyIncome" type="number" required />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>What is your credit score?</Form.Label>
                <Form.Control name="income" as="select" required />
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

export default StepTwoForm;
