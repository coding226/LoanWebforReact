import React from "react";
import styled from "styled-components";
import BannerImg from "../../images/banner.png";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  padding: 2rem;
  text-align: center;
  // background-image: url("images/banner.png");

  h1 {
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
    color: #555;
  }

  button {
    text-transform: uppercase;
    border-radius: 25px;
    padding: 0.5rem 2rem;
    color: #fff;
    background: #193794;
    outline: none;
    border: none;
    margin: 2rem 0;
  }
  button:hover {
    background: #b9db0c;
    color: #000;
  }
  a {
    color: #000;
  }
  p {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 576px) {
    h1 {
      font-size: 1.7rem;
    }
  }

`;

function Banner() {
  return (
    <StyledContainer >
      <h1>Payday Loans Online, Get Your Funds Instantly</h1>
      <img src={BannerImg} alt="banner" />
      <div>
        <button>Start Now</button>
        <p>
          Visit our <Link to="/privacy-rights">Privacy Policy</Link> ,{" "}
          <Link to="/terms">Terms of Use</Link>,{" "}
          <Link to="/how-it-works">Disclaimer</Link> to learn more.
        </p>
      </div>
    </StyledContainer>
  );
}

export default Banner;
