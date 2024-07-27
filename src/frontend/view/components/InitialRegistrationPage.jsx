import './InitialRegistrationPageStyle.css'
import LogoComponent from './Logo_Component/LogoComponent';
export default function InitialRegistrationPage(){
    return(
        <div className="InitialRegistrationPage">

            {/* Outer container for all elements */}
            <div className="outerContainer">

                {/* The displays on the left */}
                <div className="leftInnerContainer">
                    {/* The display for the welcome and logo */}
                    <div className="logoGreetContainer">
                        <p id="welcomeTo">Welcome To</p>
                        <LogoComponent></LogoComponent>
                    </div>

                    {/* Display for the description of the platform */}
                    <div className="descriptionContainer">
                        <p id="descriptionText">Meet and connect with fellow guitarists</p>
                    </div>

                    <hr id = "topDivider" /> {/* SHOW ONLY IN MOBILE */}

                    {/* Option to log into an existing account */}
                    <div className="logIn">
                        <p id="logInRedirect">or log in into an existing account</p>
                    </div>
                </div>

                {/* The displays on the right */}
                <div className="rightInnerContainer">
                    {/* Replaceable content */}

                    {/* Replaceable content container */}
                    <div className="replaceableContent">
                
                        {/* Top Right Label */}
                        <div className="topRightLabel">
                            <p id="label">To get started, create an account!</p>
                        </div>

                        {/* Registration Form */}
                        <div className="inputFields">
                            
                            {/* Email Container */}
                            <div id="email">
                                <p id="emailLabel">Email: </p>
                                <input type="text" id="emailInputField" placeholder = "example@address.com"/>
                            </div>

                            {/* Password Container */}
                            <div id="password">
                                <p id="passwordLabel">Password: </p>
                                <input type="password" id="passwordInputField" />
                            </div>

                            {/* Confirm Password Container */}
                            <div id="confirmPassword">
                                <p id="confirmPasswordLabel">Confirm Password: </p>
                                <input type="password" id="confirmPasswordInputField" />
                            </div>
                        </div>   
                    </div>

                    <div className="goButtonContainer">
                        <button id="goButton">GO</button>
                    </div>

                    <div className="logInPortrait">
                        <p id="logInRedirect">or log in into an existing account</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // JAVASCRIPT SEGMENT
    function getDeviceType() {
        const ua = navigator.userAgent;
        const body = document.querySelector('.InitialRegistrationPage');
        if (/Mobile|Android|iP(ad|hone)/.test(ua)) {
            body.classList.add('mobile');
        } else if (/Tablet|iPad/.test(ua) || (screen.width >= 600 && screen.width < 1024)) {
            body.classList.add('tablet');
        } else {
            body.classList.add('desktop');
        }
    }
    
    function applyLayout() {
        const deviceType = getDeviceType();
        document.body.setAttribute('data-device', deviceType);
    }
    
    window.addEventListener('resize', applyLayout);
    document.addEventListener('DOMContentLoaded', applyLayout);
    
}