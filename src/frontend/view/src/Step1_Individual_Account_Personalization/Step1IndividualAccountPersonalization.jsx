import LogoComponent from "../../components/Logo_Component/LogoComponent";
import './Step1IndividualAccountPersonalizationStyles.css';
import UserTermsAndAgreements from "../../components/User_Terms_And_Agreements/UserTermsAndAgreements";
export default function Step1IndividualAccountPersonalization(){
    return(
        <div className="step1IndividualAccountPersonalization">
            <div className="mainLabel">

                {/* First row of items */}
                <div className="header">

                    {/* Welcome to Message */}
                    <div id="greetingContainer">
                        <p id="welcomeTo">WELCOME TO</p>

                        {/* Logo Container */}
                        <div id="logoContainer">
                            <LogoComponent></LogoComponent>
                        </div>
                    </div>

                    {/* Prompt label ath the top right */}
                    <div id="promptLabel">
                        <p id="promptLabelText">User Terms And Conditions: </p>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <hr id="dividerLine" />

            {/* Bottom Main Container */}
            <div className="bottomMainContainer">

                {/* Upper Container For Main Content */}
                <div className="upperPartContainer">
                    {/* Left InnerContainer */}
                    <div id="leftInnerContainer">
                        <div className="replaceableContent">
                            <UserTermsAndAgreements></UserTermsAndAgreements>
                        </div>
                    </div>

                    {/* Right Inner Container */}
                    <div id="rightInnerContainer">
                        <div className = "stepIndicator" id="step1">Step 1</div>
                        <div className = "stepIndicator" id="step2">Step 2</div>
                        <div className = "stepIndicator" id="step3">Step 3</div>
                        <div className = "stepIndicator" id="step4">Step 4</div>
                        <div className = "stepIndicator" id="step5">Step 5</div>
                        <div className = "stepIndicator" id="step6">Step 6</div>
                        <div className = "stepIndicator" id="step7">Step 7</div>
                        <div className = "stepIndicator" id="step8">Step 8</div>
                    </div>
                </div>

                {/* Lower Container for Buttons */}
                <div className="lowerPartContainer">
                    <div className="buttonContainer">
                        
                        {/* Back Button */}
                        <button id = "backButton">BACK</button>

                        {/* Next Button */}
                        <button id="nextButton">NEXT</button>
                    </div>
                </div>
            
            </div>
        </div>
    );
}