import styled, {keyframes} from "styled-components";
import Button from "./Button";
import React from "react";

const HeaderBlock = styled.div`
  display: block;
  position: fixed;
  top: 0px;
  margin: 0px;
  padding: 0px;
  height: 60px;
  width: 100%;
  background: lightgray;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid black;
  z-index: 3;
`;

const MenuBlock = styled.span`
  margin-left : 13px;
  height : 30px;
  width: 30px;
`;

const Menu = styled.img`
  height : 30px;
  margin-top: 13px;
  padding-bottom: 7px;
  cursor : pointer;
  .odd {
    animation-name: MenuSpinForward;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }  
  .even {
    animation-name: MenuSpinReverse;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;

const HeadImg = styled.img`
  position : absolute;
  width: 80px !important;
  height: 40px !important;
  margin: 10px 0 0 10px;
  padding: 0;
`;

const MainTitle = styled.span`
  position : absolute;
  left: 35%;
  font-size: 40px;
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
`
const LogInButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  background: white;
  outline: none;
  cursor: pointer;
  position: absolute;
  top : 1rem;
  right : 20px;
`

const MenuSpinForward = keyframes`
    from {
        transform : rotate(0deg);
    }
    to {
        transform: rotate(90deg);
    }
`
const MenuSpinReverse = keyframes`
    from {
      transform : rotate(90deg)
    }
    to {
      transform: rotate(0deg)
    }
`
const Spacer = styled.div`
  height: 60px;
`
function Header ({menuClick}) {
    return(
        <>
            <HeaderBlock>
                <MenuBlock>
                    <Menu id="menu" src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="Menu" onClick={menuClick}/>
                </MenuBlock>
                <a href="/">
                    <HeadImg src="https://onesoftdigm.com/img/logo.png" alt="원소프트다임, Logo" style={{ height : "30px"}} />
                </a>
                <MainTitle>
                    INTERN PROJECT
                </MainTitle>
                <LogInButton>로그인</LogInButton>
            </HeaderBlock>
            <Spacer />
        </>
    )
}

export default Header;

