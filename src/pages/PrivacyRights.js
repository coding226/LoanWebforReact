import React from "react";
import styled from "styled-components";
import { privacy } from "../consts/privacy";

const StyledContainer = styled.div`
  padding: 2rem 0;
  .effective {
    color: #555;
  }
  p {
    margin-bottom: 2rem;
  }
  .policy-title {
    margin-bottom: 1rem;
  }
`;

function PrivacyRights() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <StyledContainer>
      <h3 className="privacy-title">{privacy.title}</h3>
      <p className='effective' ><strong>Effective Date: </strong> January 21, 2020 </p>
      <div className="privacy-content">
        {privacy.descriptions.map((description, index) => {
          return <p key={index}>{description}</p>;
        })}

        {
          privacy.policies.map((policy, index) => {
            return (
              <div key={index} >
                <h5 className='policy-title' >{policy.title}</h5>
                {
                  policy.contents.map((content, index) => {
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

export default PrivacyRights;
