import LogoComponent from "../../components/Logo_Component/LogoComponent";
import './IndividualAccountPersonalizationStyles.css';
import React, { useState, useRef, useEffect } from 'react';
import UserTermsAndAgreements from "../../components/User_Terms_And_Agreements/UserTermsAndAgreements";
import Step2IndividualAccountPersonalization from "../../components/Step2_Individual_Account_Personalization/Step2IndividualAccountPersonalization";
import Step3IndividualAccountPersonalization from "../../components/Step3_Individual_Account_Personalization/Step3IndividualAccountPersonalization";
import Step4IndividualAccountPersonalization from "../../components/Step4_Individual_Account_Personalization/Step4IndividualAccountPersonalization";
import Step5IndividualAccountPersonalization from "../../components/Step5_Individual_Account_Personalization/Step5IndividualAccountPersonalization";
import Step6IndividualAccountPersonalization from "../../components/Step6_Individual_Account_Personalization/Step6IndividualAccountPersonalization";

//NOTE TO SEPARATE THIS FROM MAIN.JSX FILE SO THAT THE ENTRY POINT IS STILL INITIALREGISTRATIONPAGE.JSX


export default function IndividualAccountPersonalization(){
    const views = ['UserTermsAndAgreements', 'Step2IndividualAccountPersonalization', 'Step3IndividualAccountPersonalization', 'Step4IndividualAccountPersonalization', 'Step5IndividualAccountPersonalization', 'Step6IndividualAccountPersonalization'];
    const [view, setView] = useState('UserTermsAndAgreements');
    // const [showBackButton, setShowBackButton] = useState(false);
    const [checkboxChecked, setCheckBoxChecked] = useState(false);
    const nextButtonRef = useRef(null);
    const backButtonRef = useRef(null);
    const promptLabelRef = useRef(null);
    const promptLabelPortraitRef = useRef(null);
    const [step2AllFilled, setStep2AllFilled] = useState(false);
    const [step3Chosen, setStep3Chosen] = useState(false);
    const [step4AllChosen, setStep4AllChosen] = useState(false);
    const [step5AllChosen, setStep5AllChosen] = useState(false);
    const [step6Chosen, setStep6Chosen] = useState(false);
    const stepIndicatorRefPortrait = {
        step1: useRef(null),
        step2: useRef(null),
        step3: useRef(null),
        step4: useRef(null),
        step5: useRef(null),
        step6: useRef(null),
        step7: useRef(null),
        step8: useRef(null)
    };

    const stepIndicatorRef = {
        step1: useRef(null),
        step2: useRef(null),
        step3: useRef(null),
        step4: useRef(null),
        step5: useRef(null),
        step6: useRef(null),
        step7: useRef(null),
        step8: useRef(null)
    };

    //Setter methods...
    //Sets the status of step2AllFilled variable to dynamically check whether all fields in step 2 are filled...
    const isStep2AllFilled = (value) => {
        setStep2AllFilled(value);
    };

    //Flags the checkbox checker when it is checked and unchecked...
    const setCheckBoxStatus = (value) => {
        setCheckboxChecked(value);
    };

    const setSelectedStep3 = (value) => {
        setStep3Chosen(value);
    };

    const setSelectedStep4 = (value) => {
        setStep4AllChosen(value);
    }

    const setSelectedStep5 = (value) => {
        console.log(value);
        setStep5AllChosen(value);
    }

    const setSelectedStep6 = (value) => {
        setStep6Chosen(value);
    };

    //Changes View According to User's Navigation...
    const changeView = () => {
        setView((prev) => {
            const currentIndex = views.indexOf(prev);
            const nextIndex = (currentIndex + 1) % views.length;

            //Activates the back button...
            if(backButtonRef.current){
                backButtonRef.current.classList.add('active');
            }

            if (nextButtonRef.current) {
                nextButtonRef.current.classList.remove('active');
            }

            // console.log('view: ', view );
            // After the last view, show the loading screen
            // if (view === 'TypesOfPageAccounts' && selectedPage != null) {
            //     setShowLoadingScreen(true);
            // }

            return views[nextIndex];
        });
    };

    // Go Back Option Method...
    const goBack = () => {
        setView((prev) => {
            let currentIndex = views.indexOf(prev);
            const prevIndex = (currentIndex - 1 + views.length) % views.length;
            setStep2AllFilled(false);
            setSelectedStep3(false);
            setStep4AllChosen(false);
            setSelectedStep5(false);
            setCheckBoxChecked(false); 

            return views[prevIndex];
        });
    };

    const viewComponents = {
        UserTermsAndAgreements: <UserTermsAndAgreements isChecked = {setCheckBoxChecked}/>,
        Step2IndividualAccountPersonalization: <Step2IndividualAccountPersonalization isAllFilled={isStep2AllFilled}/>,
        Step3IndividualAccountPersonalization: <Step3IndividualAccountPersonalization hasSelected={setSelectedStep3}/>,
        Step4IndividualAccountPersonalization: <Step4IndividualAccountPersonalization allSelected={setSelectedStep4}/>,
        Step5IndividualAccountPersonalization: <Step5IndividualAccountPersonalization allSelected={setSelectedStep5}/>,
        Step6IndividualAccountPersonalization: <Step6IndividualAccountPersonalization hasSelected={setSelectedStep6}/>
    };

    // if(!showBackButton){
    //     if(backButtonRef.current){
    //         backButtonRef.current.style.display = 'none';

    //     }
    // }

    //Dynamically checks for which step the user is currently in and updates accordingly...
    useEffect(() => {

        // Remove the 'active' class from all step indicators
        Object.values(stepIndicatorRef).forEach(ref => {
            if (ref.current) {
                ref.current.classList.remove('active');
            }
        });

        Object.values(stepIndicatorRefPortrait).forEach(ref => {
            if (ref.current) {
                ref.current.classList.remove('active');
            }
        });

        if((stepIndicatorRefPortrait.step1.current || stepIndicatorRef.step1.current) && view === 'UserTermsAndAgreements'){
            stepIndicatorRefPortrait.step1.current.classList.add('active');
            stepIndicatorRef.step1.current.classList.add('active');
        }

        else if((stepIndicatorRefPortrait.step2.current || stepIndicatorRef.step2.current) && view === 'Step2IndividualAccountPersonalization'){
            stepIndicatorRef.step2.current.classList.add('active');
            stepIndicatorRefPortrait.step2.current.classList.add('active');

            if(promptLabelRef.current && promptLabelPortraitRef.current){
                promptLabelRef.current.textContent = "Tell us more about yourself..."; //Changes the landscape display...
                promptLabelPortraitRef.current.textContent = "Tell us more about yourself..."; //Changes the portrait display...
            }
        }

        else if((stepIndicatorRefPortrait.step3.current || stepIndicatorRef.step3.current) && view === 'Step3IndividualAccountPersonalization'){
            stepIndicatorRef.step3.current.classList.add('active');
            stepIndicatorRefPortrait.step3.current.classList.add('active');

            if(promptLabelRef.current && promptLabelPortraitRef.current){
                promptLabelRef.current.textContent = "Tell us more about yourself..."; //Changes the landscape display...
                promptLabelPortraitRef.current.textContent = "Tell us more about yourself..."; //Changes the portrait display...
            }
        }

        else if((stepIndicatorRefPortrait.step4.current || stepIndicatorRef.step4.current) && view === 'Step4IndividualAccountPersonalization'){
            stepIndicatorRef.step4.current.classList.add('active');
            stepIndicatorRefPortrait.step4.current.classList.add('active');
            
            if(promptLabelRef.current && promptLabelPortraitRef.current){
                promptLabelRef.current.textContent = "Tell us more about yourself..."; //Changes the landscape display...
                promptLabelPortraitRef.current.textContent = "Tell us more about yourself..."; //Changes the portrait display...
            }
        }

        else if((stepIndicatorRefPortrait.step5.current || stepIndicatorRef.step5.current) && view === 'Step5IndividualAccountPersonalization'){
            stepIndicatorRef.step5.current.classList.add('active');
            stepIndicatorRefPortrait.step5.current.classList.add('active');

            if(promptLabelRef.current && promptLabelPortraitRef.current){
                promptLabelRef.current.textContent = "Tell us more about yourself..."; //Changes the landscape display...
                promptLabelPortraitRef.current.textContent = "Tell us more about yourself..."; //Changes the portrait display...
            }
        }

        else if(stepIndicatorRef.step6.current){
            stepIndicatorRef.step6.current.classList.add('active');
            stepIndicatorRefPortrait.step6.current.classList.add('active');

            if(promptLabelRef.current && promptLabelPortraitRef.current){
                promptLabelRef.current.textContent = "Tell us more about yourself..."; //Changes the landscape display...
                promptLabelPortraitRef.current.textContent = "Tell us more about yourself..."; //Changes the portrait display...
            }
        }

        else if(stepIndicatorRef.step7.current){
            stepIndicatorRef.step7.current.classList.add('active');
            stepIndicatorRefPortrait.step7.current.classList.add('active');

            if(promptLabelRef.current && promptLabelPortraitRef.current){
                promptLabelRef.current.textContent = "Tell us more about yourself..."; //Changes the landscape display...
                promptLabelPortraitRef.current.textContent = "Tell us more about yourself..."; //Changes the portrait display...
            }
        }

        else if(stepIndicatorRef.step8.current){
            stepIndicatorRef.step8.current.classList.add('active');
            stepIndicatorRefPortrait.step8.current.classList.add('active');

            if(promptLabelRef.current && promptLabelPortraitRef.current){
                promptLabelRef.current.textContent = "Tell us more about yourself..."; //Changes the landscape display...
                promptLabelPortraitRef.current.textContent = "Tell us more about yourself..."; //Changes the portrait display...
            }
        }

        //If view is the very first page, disables the back button
        if(view === 'UserTermsAndAgreements'){
            if(backButtonRef.current){
                backButtonRef.current.classList.remove('active');
            }
        }

        else{
            if(backButtonRef.current){
                backButtonRef.current.classList.add('active');
            }
        }

        if (nextButtonRef.current) {
            nextButtonRef.current.classList.remove('active');
        }

    },[view]);


    //Dynamically enables the goButton...
    useEffect(() => {
        if(view === 'UserTermsAndAgreements' && checkboxChecked){
            if(nextButtonRef.current){
                nextButtonRef.current.classList.add('active');
            }

            else{
                if(nextButtonRef.current){
                    nextButtonRef.current.classList.remove('active');
                }
            }
        }

        else if(view === 'Step2IndividualAccountPersonalization' && step2AllFilled){
            if(nextButtonRef.current){
                nextButtonRef.current.classList.add('active');
            }

            else{
                if(nextButtonRef.current){
                    nextButtonRef.current.classList.remove('active');
                }
            }
        }

        else if(view === 'Step3IndividualAccountPersonalization' && step3Chosen){
            if(nextButtonRef.current){
                nextButtonRef.current.classList.add('active');
            }

            else{
                if(nextButtonRef.current){
                    nextButtonRef.current.classList.remove('active');
                }
            }
        }

        else if(view === 'Step4IndividualAccountPersonalization' && step4AllChosen){
            if(nextButtonRef.current){
                nextButtonRef.current.classList.add('active');
            }

            else{
                if(nextButtonRef.current){
                    nextButtonRef.current.classList.remove('active');
                }
            }
        }

        else if(view === 'Step5IndividualAccountPersonalization' && step5AllChosen){
            if(nextButtonRef.current){
                nextButtonRef.current.classList.add('active');
            }

            else{
                if(nextButtonRef.current){
                    nextButtonRef.current.classList.remove('active');
                }
            }
        }

        else if(view === 'Step6IndividualAccountPersonalization' && step6Chosen){
            if(nextButtonRef.current){
                nextButtonRef.current.classList.add('active');
            }

            else{
                if(nextButtonRef.current){
                    nextButtonRef.current.classList.remove('active');
                }
            }
        }

        else{
            if(nextButtonRef.current){
                nextButtonRef.current.classList.remove('active');
            }
        }

    },[view, checkboxChecked, step2AllFilled, step3Chosen, step4AllChosen, step5AllChosen, step6Chosen]);


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
                        <p id="promptLabelText" ref={promptLabelRef}>User Terms And Conditions: </p>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <hr id="dividerLine" />

            {/* Bottom Main Container */}
            <div className="bottomMainContainer">
                {/* Prompt label at the top right */}
                <div id="promptLabelPortrait">
                    <p id="promptLabelTextPortrait"ref={promptLabelPortraitRef}>User Terms And Conditions: </p>
                </div>

                {/* Upper Container For Main Content */}
                <div className="upperPartContainer">

                    {/* Left InnerContainer */}
                    <div id="leftInnerContainer">
                        <div className="replaceableContent">
                            {viewComponents[view]}
                            {/* <UserTermsAndAgreements></UserTermsAndAgreements> */}
                        </div>
                    </div>

                    {/* Right Inner Container */}
                    <div id="rightInnerContainer">
                        <div className = "stepIndicator" id="step1" ref = {stepIndicatorRef.step1}>Step 1</div>
                        <div className = "stepIndicator" id="step2" ref = {stepIndicatorRef.step2}>Step 2</div>
                        <div className = "stepIndicator" id="step3" ref = {stepIndicatorRef.step3}>Step 3</div>
                        <div className = "stepIndicator" id="step4" ref = {stepIndicatorRef.step4}>Step 4</div>
                        <div className = "stepIndicator" id="step5" ref = {stepIndicatorRef.step5}>Step 5</div>
                        <div className = "stepIndicator" id="step6" ref = {stepIndicatorRef.step6}>Step 6</div>
                        <div className = "stepIndicator" id="step7" ref = {stepIndicatorRef.step7}>Step 7</div>
                        <div className = "stepIndicator" id="step8" ref = {stepIndicatorRef.step8}>Step 8</div>
                    </div>
                </div>

                <hr id = "bottomDivider"/>

                {/* Lower Container for Buttons */}
                <div className="lowerPartContainer">
                    <div className="buttonContainer">
                        
                        {/* Back Button */}
                        <div id="backButtonContainer">
                            <button id = "backButton" ref={backButtonRef} onClick={goBack}>BACK</button>
                        </div>

                        {/* Step Indicator Portrait View Container */}
                        <div id="stepIndicatorPortraitContainer">
                            <div className = "stepIndicator" id="step1" ref = {stepIndicatorRefPortrait.step1}></div>
                            <div className = "stepIndicator" id="step2" ref = {stepIndicatorRefPortrait.step2}></div>
                            <div className = "stepIndicator" id="step3" ref = {stepIndicatorRefPortrait.step3}></div>
                            <div className = "stepIndicator" id="step4" ref = {stepIndicatorRefPortrait.step4}></div>
                            <div className = "stepIndicator" id="step5" ref = {stepIndicatorRefPortrait.step5}></div>
                            <div className = "stepIndicator" id="step6" ref = {stepIndicatorRefPortrait.step6}></div>
                            <div className = "stepIndicator" id="step7" ref = {stepIndicatorRefPortrait.step7}></div>
                            <div className = "stepIndicator" id="step8" ref = {stepIndicatorRefPortrait.step8}></div>
                        </div>

                        {/* Next Button */}
                        <div id="nextButtonContainer">
                            <button id="nextButton" onClick={changeView} ref={nextButtonRef}>NEXT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}