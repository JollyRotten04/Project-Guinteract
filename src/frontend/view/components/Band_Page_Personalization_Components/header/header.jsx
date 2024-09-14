import LogoComponent from "../../Logo_Component/LogoComponent.jsx";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="mainLabel">
                <div className="header">
                    <div id="greetingContainer">
                        <p id="welcomeToText">WELCOME TO</p>
                        <div id="logoContainer">
                            <LogoComponent />
                        </div>
                    </div>
                    <div id="promptLabel">
                        <p id="promptLabelText" >User Terms And Conditions: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;