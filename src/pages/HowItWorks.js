import React from "react";
import styled from "styled-components";
import HowCard from "../components/HowCard";
import {howItWorks} from '../consts/howItWorks'
import {howSteps} from '../consts/howSteps'

const StyledContainer = styled.div`
  padding: 2rem 0;
  p {
    margin-bottom: 2rem;
  }
`;

function HowItWorks() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <StyledContainer>
      <h3 className="hiw-title mb-4">{howItWorks.title}</h3>
      {
        howSteps.map((step, index) => {
          return (
            <HowCard step={step} key={index} />
          )
        })
      }
      
      <div className="hiw-content mt-5">
        {
          howItWorks.contents.map((content, index) => {
            return (
              <p key={index} >{content}</p>
            )
          })
        }
      </div>
    </StyledContainer>
  );
}

export default HowItWorks;
