import React from "react";
import styled from "styled-components";
import { terms } from "../consts/terms";

const StyledContainer = styled.div`
  padding: 2rem 0;
  .effective {
    color: #555;
  }
  p {
    margin-bottom: 2rem;
  }
  .information-title {
    margin-bottom: 1rem;
  }
`;

function Terms() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <StyledContainer>
      <h3 className="terms-title">{terms.title}</h3>
      <p className='effective' ><strong>Effective Date: </strong> January 21, 2020 </p>
      <div className="terms-content">
        {terms.descriptions.map((description, index) => {
          return <p key={index}>{description}</p>;
        })}

        {
          terms.informations.map((information, index) => {
            return (
              <div key={index} >
                <h5 className='information-title' >{information.title}</h5>
                {
                  information.contents.map((content, index) => {
                    return (
                      <p key={index} >{content}</p>
                    )
                  })
                }
              </div>
            )
          })
        }
        
      </div>
    </StyledContainer>
  );
}

export default Terms;
