import React from 'react'
import styled from "styled-components";
// import featureImg1 from '../../images/bg-feature01.png'

const StyledContainer = styled.div`
  background: #ededec;
  padding: 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .proc-title-wrap {
    width: 40%;
    display: flex;
    padding: .5rem 0;
    align-items: center;
  }
  .proc-title-wrap img {
    margin-right: 2rem;
  }
  .proc-desc-wrap {
    width: 60%;
    border-left: 3px solid #aaa;
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 992px) {
    .proc-title-wrap {
      width: 100%;
      flex-direction: column;
    }
    .proc-title-wrap img {
      margin-right: 0;
    }
    .proc-desc-wrap {
      width: 100%;
      border-left: none;
      text-align: center;
      padding: 1rem;

    }
  }
`;

function ProCard({feature}) {
  return (
    <StyledContainer>
      <div className='proc-title-wrap' >
        <img src={feature.image} alt='prototype' />
        <h3>{feature.title}</h3>
      </div>
      <div className='proc-desc-wrap'>
        <p>{feature.description}</p>
      </div>
    </StyledContainer>
  )
}

export default ProCard
