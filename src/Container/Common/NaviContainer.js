import './FrameStyle.css'
import './Navi.css'


function NaviContainer () {
    return (
        <div className="NaviContainer" id="Navi">
            <div className="Navi-box">
                <a href="/" className="Navi-Link"><i className="fas fa-tv fa-fw me-1"></i> Dashboard</a>
                <a href="/board" className="Navi-Link"><i className="fas fa-edit fa-fw me-1"></i> New Post</a>
                <a href="https://onesoftdigm.com/index.php?getLang=ko" className="Navi-Link"><i className="fas fa-building fa-fw me-1"></i> Company</a>

            </div>
        </div>
    )
}

export default NaviContainer;