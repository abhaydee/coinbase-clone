import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";
import TransferModal from "./modal/TransferModal"
const Header = ({walletAddress,connectWallet}) => {
  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonContainer>
        <WalletLink>
          <WalletLinkTitle>
            Wallet Connected
            <WalletAddress>
              {walletAddress.slice(0,7)}...{walletAddress.slice(35)}
            </WalletAddress>
          </WalletLinkTitle>
        </WalletLink>
        <Button style={{ backgroundColor: "#3773f5", color: "#000" }}>
          Buy/Sell
        </Button>
        <Button>Send / Receive</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;


const WalletLink =styled.div`
  font-size:0.8rem;
  border:1px solid #282b2f;
  border-radius : 50rem;
  font-size:1.2rem;
  margin-right:1rem;
  padding:0 1rem;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
`

const WalletLinkTitle =styled.div`
  font-size:1.1rem;
  margin-bottom:0.3rem;
  color:#27ad75;
  font-weight:600;
`
const WalletAddress = styled.div`
 font-size:0.8rem;
`;