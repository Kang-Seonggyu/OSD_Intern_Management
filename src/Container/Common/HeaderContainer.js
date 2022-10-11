import Header from "../../Components/Common/Header";
import NaviBar from "../../Components/Common/NaviBar";

function HeaderContainer() {

    const menuClick = () => {
        const menuToggle = document.getElementById("menu")
        const NaviToggle = document.getElementById("Navi")

        if (menuToggle.className === 'menu odd') {
            menuToggle.className = 'menu even'
            NaviToggle.className = 'NaviContainer even'

        }
        else {
            menuToggle.className = 'menu odd'
            NaviToggle.className = 'NaviContainer odd'
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