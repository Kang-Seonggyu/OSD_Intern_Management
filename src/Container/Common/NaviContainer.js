import './FrameStyle.css'
import './Navi.css'


function NaviContainer () {
    return (
        <div className="NaviContainer" id="Navi">
            <div className="Navi-box">
                <a href="/" className="Navi-Link"><i className="fas fa-tv fa-fw me-1"></i> Dashboard</a>
                <a href="/board" className="Navi-Link"><i className="fas fa-file-alt fa-fw me-1"></i> New Post</a>
                <p>3rd</p>
                dd
            </div>
        </div>
    )
}

export default NaviContainer;