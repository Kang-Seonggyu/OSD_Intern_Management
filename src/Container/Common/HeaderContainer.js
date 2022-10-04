import "./FrameStyle.css"
import "./Hearder.css"

function HeaderContainer() {
    const menuClick = () => {

    }
  return (
    <div className="HeaderContainer" id="HeaderContainer">
        <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="Menu" style={{ height : "30px", marginLeft : "10px", cursor : "pointer"}} />
        <a href="https://onesoftdigm.com/index.php?getLang=ko">
            <img src="https://onesoftdigm.com/img/logo.png" alt="원소프트다임, Logo" style={{ height : "30px"}} className="headImg" />
        </a>

        <span className="mainTitle" style={{cursor: "pointer"}}>INTERN PROJECT</span>
    </div>
  );
}

export default HeaderContainer;