import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 2rem 0;
  
`;

function Desclaimer({value}) {
  return (
    <StyledContainer>
      <h3 className="desclaim-title">{value.title}</h3>
      <div className="desclaim-content mb-4 mt-2">
        {value.content}
      </div>
    </StyledContainer>
  );
}

export default Desclaimer;
