import Home from "../../assets/icons/nav/home.png";
import MyQr from "../../assets/icons/nav/qr.png";
import ScanQr from "../../assets/icons/nav/scan_qr.png";
import Agents from "../../assets/icons/nav/map.png";
import Profile from "../../assets/icons/nav/profile.png";

const BottomNavbar = () => {
    return ( 
        <nav className="navbar bg-light navbar-fixed-bottom mt-3">
            <div className="container mt-1" id="navbar-container" style={{height: "70px"}}>
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img src={Home} width="30" height="30" className="nav-logo d-inline-block align-top mx-auto d-block" />
                        <p className="navbar-text">Home</p>
                    </a>
                </div>
                <div className="navbar-header">
                    <a className="navbar-brand" href="my_qr.html">
                        <img src={MyQr} width="30" height="30" className="nav-logo d-inline-block align-top mx-auto d-block" />
                        <p className="navbar-text">My QR</p>
                    </a>
                </div>
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img src={ScanQr} width="30" height="30" className="nav-logo d-inline-block align-top mx-auto d-block" />
                        <p className="navbar-text">Scan QR</p>
                    </a>
                </div>
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img src={Agents} width="30" height="30" className="nav-logo d-inline-block align-top mx-auto d-block" />
                        <p className="navbar-text">Agents</p>
                    </a>
                </div>
                <div className="navbar-header">
                    <a className="navbar-brand" href="profile.html">
                        <img src={Profile} width="30" height="30" className="nav-logo d-inline-block align-top mx-auto d-block" />
                        <p className="navbar-text">Profile</p>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default BottomNavbar;