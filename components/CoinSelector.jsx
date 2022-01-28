import React from 'react';
import styled from 'styled-components';
import CoinItem from './CoinItem';

const CoinSelector = ({selectedToken,walletAddress, setAction,thirdWebTokens,setSelectedToken, sanityTokens}) => {
  return <Wrapper>
        <Title>
            Select Asset
        </Title>
        <CoinList>
            {sanityTokens.map((token,tokenIndex) => (
               <CoinItem key={tokenIndex} token={token} sender={walletAddress} selectedToken={selectedToken} thirdWebTokens={thirdWebTokens} setSelectedToken={setSelectedToken} sanityTokens={sanityTokens} setAction={setAction}/>
            ))}
        </CoinList>
      </Wrapper>;
};

export default CoinSelector;


const Wrapper =styled.div`
    margin:2rem
`

const Title =styled.div`
    width:100%;
    text-align:center;
    font-size:1.5rem;
    margin-bottom:1rem;
`

const CoinList = styled.div`
 display:flex;
 flex-direction:column;

`