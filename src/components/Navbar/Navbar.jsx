import { Link } from "react-router-dom";
import sampleLogo from "../../images/Logo.png";
import "./Navbar.css";

export default function Navbar () {
    return (
        <div className="navbar-container">
            <img className="logo-navbar" src={sampleLogo} alt="logo"/>
            <ul className="navbar-list">
                <li>
                    <Link to="/" className="navbar-item">Register ticket</Link>
                </li>
                <li >
                    <Link to="/tickets" className="navbar-item">Dashboard</Link>
                </li>
            </ul>
        </div>
    )
}