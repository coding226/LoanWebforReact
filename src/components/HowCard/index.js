import React from "react";
import styled from "styled-components";
// import featureImg1 from '../../images/bg-feature01.png'

const StyledContainer = styled.div`
  background: #ededec;
  padding: 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .howc-title-wrap {
    width: 40%;
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
  }
  .howc-title-wrap img {
    margin-right: 2rem;
  }
  .howc-desc-wrap {
    width: 60%;
    border-left: 3px solid #aaa;
    padding: 1rem 2rem;
  }
  .howc-step-num {
    min-width: 70px;
    height: 70px;
    font-size: 3.5rem;
    border: 6px solid #b9db0c;
    border-radius: 50%;
    color: #b9db0c;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 0.5rem;
    margin-right: 2rem;
  }

  @media screen and (max-width: 992px) {
    background: #fff;
    padding: 1.5rem 2rem;
    border-bottom: 2px solid #eee;
    margin-bottom: 0;
    .howc-title-wrap {
      width: 100%;
      flex-direction: column;
    }
    .howc-title-wrap img {
      margin-right: 0;
    }
    .howc-desc-wrap {
      width: 100%;
      border-left: none;
      text-align: center;
      padding: 1rem;
    }
    .howc-step-num {
      margin: 0;
    }
  }
`;

function HowCard({ step }) {
  return (
    <StyledContainer>
      <div className="howc-title-wrap">
        {/* <img src={feature.image} alt='prototype' /> */}
        <div className="howc-step-num"> {step.number} </div>
        <h3>{step.title}</h3>
      </div>
      <div className="howc-desc-wrap">
        <p>{step.description}</p>
      </div>
    </StyledContainer>
  );
}

export default HowCard;
