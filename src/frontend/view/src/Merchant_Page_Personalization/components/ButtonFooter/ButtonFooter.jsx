import "./ButtonFooter.css";
import StepsIndicator from "../RightPanelView/StepsIndicator";
import { useEffect, useRef } from "react";
export default function ButtonFooter({ goBack, nextPage, view, isChecked }){

    const nextButtonRef = useRef(null);
    const backButtonRef = useRef(null);

    //Enables or disables the buttons according to the view and the completion of required criteria...
    useEffect(() => {
        if (view === 'UserTermsAndAgreements') {
            backButtonRef.current?.classList.remove('active');

            if(isChecked){
                nextButtonRef.current?.classList.add('active');
            }

            else{
                nextButtonRef.current?.classList.remove('active');
            }
        } else {
            backButtonRef.current?.classList.add('active');
        }

        // if(view === 'Step2MerchantPage'){

        // }

    },[view, isChecked]);

    return(
        <div className="buttonContainer">
            <div id="mainContainer">

                {/* Bottom Divider */}
                <hr id="bottomPortraitDivider" />

                {/* Back button */}
                <button id="backButton" ref = {backButtonRef} onClick={goBack}>BACK</button>

                <div id="portraitMode">
                    
                    {/* Step indicator */}
                    <StepsIndicator pageMark={view}></StepsIndicator>
                </div>
                {/* Go button */}
                <button id="goButton" ref = {nextButtonRef} onClick={nextPage}>NEXT</button>
            </div>
        </div>
    );
}