import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Main = ({ walletAddress, sanityTokens, thirdWebTokens }) => {
  return (
    <Wrapper>
      <Portfolio
        walletAddress={walletAddress}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promos />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: cal(100vh-64px);
  ::webkit-scrollbar {
    display: none;
  }
  & div {
    border-radius: 0.4rem;
  }
`;
