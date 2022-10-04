import React from "react";
import "./FrameStyle.css"
import "./Hearder.css"

function HeaderContainer() {
    const menuClick = () => {
        const menuToggle = document.getElementById("menu")
        const NaviToggle = document.getElementById("Navi")
        const fullToggle = document.getElementById("fullscreen")


        if (menuToggle.className === 'menu odd') {
            menuToggle.className = 'menu even'
            NaviToggle.className = 'NaviContainer even'
            fullToggle.className = 'fullscreen'

        }
        else if (menuToggle.className === 'menu even') {
            menuToggle.className = 'menu odd'
            NaviToggle.className = 'NaviContainer odd'
            fullToggle.className = 'fullscreen darkmode'

        }
        else {
            menuToggle.className = 'menu odd'
            NaviToggle.className = 'NaviContainer odd'
            fullToggle.className = 'fullscreen darkmode'
        }
    }

  return (
    <div className="HeaderContainer" id="HeaderContainer">
        <span className="menu-box">
            <img className="menu" id="menu" src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="Menu" onClick={menuClick}/>
        </span>
        <a href="/">
            <img src="https://onesoftdigm.com/img/logo.png" alt="원소프트다임, Logo" style={{ height : "30px"}} className="headImg" />
        </a>

        <span className="mainTitle">
                INTERN PROJECT
        </span>

    </div>
  );
}

export default HeaderContainer;