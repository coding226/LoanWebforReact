import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";

const StyledContainer = styled.div`
  background: #eee;
  padding: 0.5rem;
  margin-bottom: 1rem;
  .question-header {
    display: flex;
    justify-content: space-between;
    color: #4cb5e8;
    font-size: 1.5rem;
  }
  .question-header svg.open-icon {
    stroke-width: 1px;
  }
  .question-header svg.close-icon {
    stroke-width: 50px;
  }
  .question-title {
    color: #555;
    padding-left: 1rem;
    margin: 0;
  }
  .answer-text {
    padding: 1rem;
  }
`;

function Question({value}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <StyledContainer>
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="question-header"
      >
        <h5 className="question-title">{value.question}</h5>
        {showAnswer ? (
          <IoMdClose className="close-icon" />
        ) : (
          <GoPlus className="open-icon" />
        )}
      </div>
      {showAnswer && (
        <div className="answer-text">
          {value.answer}
        </div>
      )}
    </StyledContainer>
  );
}

export default Question;
