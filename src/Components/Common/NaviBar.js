import styled, {keyframes} from "styled-components";

const NaviBlock = styled.div`
    position: fixed;
    display: block;
    top : calc(60px - 100%);
    width: 150px;
    height: 100%;
    background-color: white;
    border-right : 1px solid black;
    z-index: 2;
  
  .NaviBlock.odd {
    animation-name: NaviDown;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  .NaviBlock.even {
    animation-name: NaviUp;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`
const NaviDown = keyframes`
  from { transform : translateY(0%)}
  to { transform: translateY(100%)}
`

const NaviUp = keyframes`
  from { transform: translateY(100%)}
  to { transform: translateY(0%)}
`

const NaviLink = styled.a`
    text-decoration: none;
    color : black;
    display: inline-block;
    margin : 5px 0px 5px 5px;
`

function NaviBar () {
    return (
        <NaviBlock id="Navi">
            <NaviLink href="/"> <i className="fas fa-tv fa-fw me-1"></i> Dashboard </NaviLink>
            <NaviLink href="/Calendar"> <i className="fas fa-calendar-alt fa-fw me-1"></i> Calendar </NaviLink>
            <NaviLink href="/board"> <i className="fas fa-edit fa-fw me-1"></i> New Post </NaviLink>
            <NaviLink href="https://onesoftdigm.com/index.php?getLang=ko"> <i className="fas fa-building fa-fw me-1"></i> Company </NaviLink>
            <NaviLink href="/test"> <i className="fas fa-flask fa-fw me-1"></i> TestPage </NaviLink>
        </NaviBlock>
    )
}

export default NaviBar;