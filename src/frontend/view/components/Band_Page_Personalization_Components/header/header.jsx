import LogoComponent from "../../Logo_Component/LogoComponent.jsx";
import "./header.css";

const Header = () => {
    return (
        <div>
            <div className="outerBody">
                <div className="header">
                    <div className="logoGreetContainer">
                        <p id="welcomeTo">WELCOME TO</p>
                        <LogoComponent />
                    </div>
                    <div className="sideText">
                        <h2>Tell us more about the band...</h2>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header;