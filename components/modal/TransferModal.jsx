import React, { useState } from "react";
import styled from "styled-components";
import Receive from "./Receive";
import Transfer from "./Transfer";
const TransferModal = ({sanityTokens,thirdWebTokens}) => {
    const [action,setAction] =useState("send")
    const [selectedToken,setSeletedToken] =useState(sanityTokens[0])
    const selectedStyle={
        color:"#3773f5"
    }

    const unselectedStyle={
        border:"1px solid #282b2f"
    }

    const selectedModal =(option) =>{
      switch(option){
        case "send":
          return <Transfer selectedTokens={sanityTokens} setAction={setAction} thirdWebTokens={thirdWebTokens}/>
        case "receive":
          return <Receive/>
        default:
          return <h2>Send</h2>
      }
    }
  return (
    <Wrapper>
      <Selector>
        <Option style={action==="send" ? selectedStyle : unselectedStyle} onClick={()=>setAction("send")}>
          <p>Send</p>
        </Option>
        <Option style={action==="receive" ? selectedStyle : unselectedStyle} onClick={()=>setAction("receive")}>
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>
        {selectedModal(action)}
      </ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;


const ModalMain =styled.div`
  flex:1;
  padding;1rem;
`