import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../lib/sanity";
const CoinItem = ({
  token,
  sender,
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
}) => {
    const [balance,setBalance] = useState("Fetching ....");
    const [imageUrl,setImageUrl] =useState(null);

    useEffect(()=>{
        const getBalance  = async () =>{ 
            let activeThirdWebToken;
            thirdWebTokens.map(thirdWebToken =>{ 
                if(thirdWebToken.address === token.contractAddress){
                    activeThirdWebToken = thirdWebToken
                }
            })
            console.log("the sender",sender)
            const balance = await activeThirdWebToken.balanceOf(sender);
            console.log("logging token balance",balance)
            return await setBalance(balance.displayValue.split(".")[0])
        }
        const getImageUrl = async () => {
            if(token.logo){
                const  imageUrl = imageUrlBuilder(client).image(token.logo).url()
                setImageUrl(imageUrl)    
            }

        }
        getImageUrl()
        getBalance()
    }, [])
  return (
    <Wrapper>
      <Main>
        <Icon><img src={imageUrl} alt="logo"/></Icon>
      </Main>
    </Wrapper>
  );
};

export default CoinItem;
const Wrapper = styled.div``;
const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  & > img {
    height: 120%;
    width: 120%;
    object-fit: contain;
  }
`;

const NameDetails = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

const Balance = styled.div``;

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`;
