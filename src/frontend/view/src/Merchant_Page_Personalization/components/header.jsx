import LogoComponent from "../../../components/Logo_Component/LogoComponent.jsx";
import { useRef, useEffect } from "react";
import "./header.css";

const Header = ({view}) => {

    const promptText = {
        'UserTermsAndAgreements': 'User Terms And Conditions:',
        'Step2MerchantPage': 'Tell us more about your page...',
        'Step3MerchantPage': 'Tell us more about your page...',
        'Step4MerchantPage': 'Tell us more about your page...',
    };

    const promptLabelRef = useRef(null);

    useEffect(() => {

        if (promptLabelRef.current) {
            // Update the mainLabelText content dynamically based on the view
            promptLabelRef.current.textContent = promptText[view] || '';
        }


    }, [view]);

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
                        <p id="promptLabelText" ref={promptLabelRef}></p>
                    </div>
                </div>
            </div>
            <hr id="dividerLine" />
        </div>
    )
}

export default Header;