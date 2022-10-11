import Header from "../../Components/Common/Header";
import NaviBar from "../../Components/Common/NaviBar";
import Footer from "../../Components/Common/Footer";

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
      <NaviBar />
    </div>
  );
}

export default HeaderContainer;