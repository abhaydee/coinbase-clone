import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);
function Dashboard({ address }) {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);
  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://hfam2mls.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22coins%22%5D%7B%0A%20%20name%2C%0A%20%20Symbol%2C%0A%20%20contractAddress%2C%0A%20%20usdPrice%2C%0A%20%20Logo%2C%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;
      setSanityTokens(sanityTokens);
      setThirdWebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };
    getSanityAndThirdWebTokens();
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens && sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Dashboard;
