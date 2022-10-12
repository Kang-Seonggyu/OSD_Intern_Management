import styled from "styled-components";
import favicon from "./favicon.png";

const BackgroundLogoBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 88%;
  margin : 2px 1px 1px 1px;
`
const BackgroundLogoImg = styled.div`
  position: absolute;
  width: 50vw;
  height: 45vh;
  top: 30%;
  left: 25%;
  z-index: -1;
  background-image: url(${favicon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

function BackgroundLogo () {
    return(
        <BackgroundLogoBlock>
            <BackgroundLogoImg/>
        </BackgroundLogoBlock>
    )
}

export default BackgroundLogo;