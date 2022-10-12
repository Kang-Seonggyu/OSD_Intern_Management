import Header from "../../Components/Common/Header";
import NaviBar from "../../Components/Common/NaviBar";
import DarkMode from "../../Components/Common/DarkMode";
import {useState} from "react";

function HeaderContainer() {
    const [menuToggle, setMenuToggle] = useState(false);

    const menuClick = () => {
        const menuClick = document.getElementById("menu")
        const NaviToggle = document.getElementById("Navi")

        if (menuClick.className === 'menu odd') {
            menuClick.className = 'menu even';
            NaviToggle.className = 'NaviContainer even';
            setMenuToggle(false);
        }
        else {
            menuClick.className = 'menu odd';
            NaviToggle.className = 'NaviContainer odd';
            setMenuToggle(true);
        }
    }

  return (
    <div>
      <Header menuClick={menuClick} />
      <NaviBar />
        {
            menuToggle === true ? <DarkMode /> : <></>
        }
    </div>
  );
}

export default HeaderContainer;