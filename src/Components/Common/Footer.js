import styled from "styled-components";

const FooterBlock = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 21px;
  border-top: 1px solid black;
  z-index: 3;

  background-color: lightgray;
`;
const FooterSpan = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  border-right: 1px solid black;
`;

function Footer () {
    return (
        <>
            <FooterBlock>
                <FooterSpan>this</FooterSpan>
                <FooterSpan>is</FooterSpan>
                <FooterSpan>sparta</FooterSpan>
                <FooterSpan>-</FooterSpan>
                <FooterSpan>300</FooterSpan>
            </FooterBlock>
        </>
    )
}

export default Footer;