import React from "react";
import "./FrameStyle.css"
import "./Hearder.css"
import Button from "../../Components/Common/Button";
import Header from "../../Components/Common/Header";
import NaviBar from "../../Components/Common/NaviBar";

function HeaderContainer() {
    const menuClick = () => {
        const menuToggle = document.getElementById("menu")
        const NaviToggle = document.getElementById("Navi")
        //const fullToggle = document.getElementById("fullscreen")


        if (menuToggle.className === 'menu odd') {
            menuToggle.className = 'menu even'
            NaviToggle.className = 'NaviContainer even'
            //fullToggle.className = 'fullscreen'

        }
        else {
            menuToggle.className = 'menu odd'
            NaviToggle.className = 'NaviContainer odd'
            //fullToggle.className = 'fullscreen darkmode'
        }
    }

  return (
    <div>
      <Header menuClick={menuClick} />
        <div>
            <p>dd</p>
            <p>dd</p>
            <p>dd</p>
            <p>dd</p>
            <p>dd</p>
            <p>dd</p>
            <p>dd</p>
            <p>dd</p>
            <p>dd</p>
        </div>
      <NaviBar />
    </div>
  );
}

export default HeaderContainer;