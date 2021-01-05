import React, { useState } from "react";
import styled from "styled-components";
import StepOneForm from "../components/StepOneForm";
import StepTwoForm from "../components/StepTwoForm";
import StepThreeForm from "../components/StepThreeForm";
import StepFourForm from "../components/StepFourForm";

const StyledContainer = styled.div`
  padding: 2rem 0;
  .apply-step-bar {
    display: flex;
    justify-content: space-between;
    max-width: 750px;
    margin: auto;
  }
  .step-item {
    width: 23.5%;
    height: 15px;
    border-radius: 10px;
    background: #ddd;
  }
  .step-item.ready {
    background: #aaa;
  }
  .step-item.complete {
    background: #4caf50;
  }
  .step-item.success {
    background: #a6d7a8;
  }
`;

function Apply() {
  const [steps, setSteps] = useState(0);

  const onNextStep = () => {
    if (steps < 3) setSteps(steps + 1);
  };

  const onPrevStep = () => {
    if (steps > 0) setSteps(steps - 1);
  };

  const setStepClassName = (index) => {
    if(index === steps) {
      return "step-item ready "
    } else if(index < steps) {
      return "step-item success"
    } else {
      return "step-item"
    }
  }
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StyledContainer>
      <div className="apply-step-bar">
        
        <span className={setStepClassName(0)}></span>
        <span className={setStepClassName(1)}></span>
        <span className={setStepClassName(2)}></span>
        <span className={setStepClassName(3)}></span>
      </div>
      {steps === 0 && <StepOneForm onNextStep={onNextStep} />}
      {steps === 1 && (
        <StepTwoForm onNextStep={onNextStep} onPrevStep={onPrevStep} />
      )}
      {steps === 2 && (
        <StepThreeForm onNextStep={onNextStep} onPrevStep={onPrevStep} />
      )}
      {steps === 3 && <StepFourForm onPrevStep={onPrevStep} />}
    </StyledContainer>
  );
}

export default Apply;
