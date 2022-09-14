import "./style.css"

function Header() {
  return (
    <div className="headContainer">
        <a href="https://onesoftdigm.com/index.php?getLang=ko">
            <img src="https://onesoftdigm.com/img/logo.png" alt="원소프트다임, Logo" className="headImg" />
        </a>

        <span className="mainTitle">INTERN MANAGEMENT</span>
        <hr style={{marginTop:"5px"}}/>
    </div>
  );
}

export default Header;