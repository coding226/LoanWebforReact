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
  .privacy-form-wrap {
    border: 1px solid #333;
    padding: 1rem;
  }
`;

function StepFourForm(props) {
  return (
    <StyledContainer>
      <h3 className="form-title mt-4">Repayment:</h3>
      <div className="form-wrapper mt-4">
        <Form>
          <Row className="mt-2">
            <Col>
              <Form.Group>
                <Form.Label>
                  Repay with same bank account or with debit/credit card?
                </Form.Label>
                <Form.Control as="select" required />
              </Form.Group>
            </Col>
          </Row>

          <div className="privacy-form-wrap">
            <h4 className="privacy-form-title mb-4">
              PRIVACY POLICY AND TERMS OF USE
            </h4>
            <p className="mb-4">
              By clicking "Submit" you confirm that you have read, understand,
              and agree to the Terms of Use, Privacy Policy and Disclaimer. Your
              click is your electronic signature, and you authorize us to share
              your information with lenders and third party marketers and
              partners we contact with.
            </p>
            <p className="mb-4">
              By checking this box, you give your written consent to
              <br /> 1) receive information and marketing e-mail messages and
              notifications from us and third party marketers we contract with{" "}
              <br /> 2) receive SMS/text messages and autodialed or prerecorded
              calls from lenders and third party marketers and partners on the
              telephone number provided in the form (even if your number can be
              found in Do-Not-Call-Lists of any kind). In case you do not wish
              to receive this kind of information by messages, please email with
              subject line “STOP” to help@gotloaned.com from the email address
              listed in your application. I understand that my consent is not
              required to obtain a loan.
            </p>
            <Form.Group controlId="formHorizontalCheck">
                <Form.Check label="I agree to terms and conditions" />
            </Form.Group>
          </div>

          <div className="btn-wrapper">
            <Button type="submit" variant="secondary" className="my-3 mx-2" onClick={props.onPrevStep}>
              Previous
            </Button>
            <Button type="submit" variant="success" className="my-3 mx-2">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </StyledContainer>
  );
}

export default StepFourForm;
