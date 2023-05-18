import { Link } from "react-router-dom";
import sampleLogo from "../../images/Logo.png";

export default function Navbar () {
    return (
        <div className="navbar-container">
            <img src={sampleLogo} alt="logo"/>
            <ul>
                <li>
                    <Link to="/">Register ticket</Link>
                </li>
                <li>
                    <Link to="/tickets">Dashboard</Link>
                </li>
            </ul>
        </div>
    )
}