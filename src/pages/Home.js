import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ProCard from "../components/ProCard";
import Desclaimer from "../components/Desclaimer/Desclaimer";
import { features } from "../consts/features";
import { disclaimer } from "../consts/disclaimer";

const StyledContainer = styled.div`
  // padding: 2rem;
`;

function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledContainer>
      <Banner />
      {features.map((feature, index) => {
        return <ProCard feature={feature} key={index} />;
      })}

      <Desclaimer value={disclaimer} />
    </StyledContainer>
  );
}

export default Home;
