import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./api/Dashboard";
export default function Home() {
  const { address, connectWallet } = useWeb3();
  return (
    <Wrapper>
      {address ?
        (<Dashboard address={address}/>)
        : (
          <WalletConnect>
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
          <Details>
            You need to be on chrome to run this app
          </Details>
        </WalletConnect>
        )
      }
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3772f5;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`;


const Details =styled.p`
  font-weight:500;
  font-size:1.2rem;
  margin-top:1rem;
  text-align:center;

`