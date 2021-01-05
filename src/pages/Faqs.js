import React from "react";
import styled from "styled-components";
import Question from "../components/Question";
import {faqs} from '../consts/faqs'

const StyledContainer = styled.div`
  padding: 2rem 0;
  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`;

function Faqs() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <StyledContainer>
      <h3 className="hiw-title">{faqs.title}</h3>
      <div className="hiw-content">
        <p>
          {faqs.description}
        </p>
      </div>
      {
        faqs.questions.map((question, index) => {
          return (
            <Question value={question} key={index} />
          )
        })
      }

    </StyledContainer>
  );
}

export default Faqs;
