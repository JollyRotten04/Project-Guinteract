import { useState, useRef, useEffect } from 'react';
import LogoComponent from "../../components/Logo_Component/LogoComponent";
import UserTermsAndAgreements from "../../components/User_Terms_And_Agreements/UserTermsAndAgreements";
import Step2IndividualAccountPersonalization from "../../components/Step2_Individual_Account_Personalization/Step2IndividualAccountPersonalization";
import Step3IndividualAccountPersonalization from "../../components/Step3_Individual_Account_Personalization/Step3IndividualAccountPersonalization";
import Step4IndividualAccountPersonalization from "../../components/Step4_Individual_Account_Personalization/Step4IndividualAccountPersonalization";
import Step5IndividualAccountPersonalization from "../../components/Step5_Individual_Account_Personalization/Step5IndividualAccountPersonalization";
import Step6IndividualAccountPersonalization from "../../components/Step6_Individual_Account_Personalization/Step6IndividualAccountPersonalization";
import Step8IndividualAccountPersonalization from '../../components/Step8_Individual_Account_Personalization/Step8IndividualAccountPersonalization';
import './IndividualAccountPersonalizationStyles.css';

export default function IndividualAccountPersonalization() {
    const views = [
        'UserTermsAndAgreements',
        'Step2IndividualAccountPersonalization',
        'Step3IndividualAccountPersonalization',
        'Step4IndividualAccountPersonalization',
        'Step5IndividualAccountPersonalization',
        'Step6IndividualAccountPersonalization',
        'Step8IndividualAccountPersonalization'
    ];
    
    const [view, setView] = useState(views[0]);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [step2AllFilled, setStep2AllFilled] = useState(false);
    const [step3Chosen, setStep3Chosen] = useState(false);
    const [step4AllChosen, setStep4AllChosen] = useState(false);
    const [step5AllChosen, setStep5AllChosen] = useState(false);
    const [step6Chosen, setStep6Chosen] = useState(false);

    const nextButtonRef = useRef(null);
    const backButtonRef = useRef(null);
    const promptLabelRef = useRef(null);
    const promptLabelPortraitRef = useRef(null);

    const stepIndicatorRef = {
        step1: useRef(null),
        step2: useRef(null),
        step3: useRef(null),
        step4: useRef(null),
        step5: useRef(null),
        step6: useRef(null),
        step7: useRef(null),
        step8: useRef(null),
    };

    const stepIndicatorRefPortrait = {
        step1: useRef(null),
        step2: useRef(null),
        step3: useRef(null),
        step4: useRef(null),
        step5: useRef(null),
        step6: useRef(null),
        step7: useRef(null),
        step8: useRef(null),
    };

    // Dynamically checks for which step the user is currently in and updates accordingly...
    useEffect(() => {
        Object.values(stepIndicatorRef).forEach(ref => ref.current?.classList.remove('active'));
        Object.values(stepIndicatorRefPortrait).forEach(ref => ref.current?.classList.remove('active'));

        const currentStep = `step${views.indexOf(view) + 1}`;
        stepIndicatorRef[currentStep]?.current?.classList.add('active');
        stepIndicatorRefPortrait[currentStep]?.current?.classList.add('active');

        const promptText = {
            'UserTermsAndAgreements': 'User Terms And Conditions:',
            'Step2IndividualAccountPersonalization': 'Tell us more about yourself...',
            'Step3IndividualAccountPersonalization': 'Tell us more about yourself...',
            'Step4IndividualAccountPersonalization': 'Tell us more about yourself...',
            'Step5IndividualAccountPersonalization': 'Tell us more about yourself...',
            'Step6IndividualAccountPersonalization': 'Tell us more about yourself...',
            'Step8IndividualAccountPersonalization': 'Tell us more about yourself...',
        };

        if (promptLabelRef.current && promptLabelPortraitRef.current) {
            promptLabelRef.current.textContent = promptText[view];
            promptLabelPortraitRef.current.textContent = promptText[view];
        }

        if (view === 'UserTermsAndAgreements') {
            backButtonRef.current?.classList.remove('active');
        } else {
            backButtonRef.current?.classList.add('active');
        }

        nextButtonRef.current?.classList.remove('active');
    }, [view]);

    // Dynamically enables the goButton...
    useEffect(() => {
        if (
            (view === 'UserTermsAndAgreements' && checkboxChecked) ||
            (view === 'Step2IndividualAccountPersonalization' && step2AllFilled) ||
            (view === 'Step3IndividualAccountPersonalization' && step3Chosen) ||
            (view === 'Step4IndividualAccountPersonalization' && step4AllChosen) ||
            (view === 'Step5IndividualAccountPersonalization' && step5AllChosen) ||
            (view === 'Step6IndividualAccountPersonalization' && step6Chosen)
        ) {
            nextButtonRef.current?.classList.add('active');
        } else {
            nextButtonRef.current?.classList.remove('active');
        }
    }, [view, checkboxChecked, step2AllFilled, step3Chosen, step4AllChosen, step5AllChosen, step6Chosen]);

    const changeView = () => {
        setView(prev => views[(views.indexOf(prev) + 1) % views.length]);
    };

    const goBack = () => {
        setView(prev => views[(views.indexOf(prev) - 1 + views.length) % views.length]);
    };

    const viewComponents = {
        UserTermsAndAgreements: <UserTermsAndAgreements isChecked={setCheckboxChecked} />,
        Step2IndividualAccountPersonalization: <Step2IndividualAccountPersonalization isAllFilled={setStep2AllFilled} />,
        Step3IndividualAccountPersonalization: <Step3IndividualAccountPersonalization hasSelected={setStep3Chosen} />,
        Step4IndividualAccountPersonalization: <Step4IndividualAccountPersonalization allSelected={setStep4AllChosen} />,
        Step5IndividualAccountPersonalization: <Step5IndividualAccountPersonalization allSelected={setStep5AllChosen} />,
        Step6IndividualAccountPersonalization: <Step6IndividualAccountPersonalization hasSelected={setStep6Chosen} />,
        Step8IndividualAccountPersonalization: <Step8IndividualAccountPersonalization />,
    };

    return (
        <div className="step1IndividualAccountPersonalization">
            <div className="mainLabel">
                <div className="header">
                    <div id="greetingContainer">
                        <p id="welcomeTo">WELCOME TO</p>
                        <div id="logoContainer">
                            <LogoComponent />
                        </div>
                    </div>
                    <div id="promptLabel">
                        <p id="promptLabelText" ref={promptLabelRef}>User Terms And Conditions: </p>
                    </div>
                </div>
            </div>

            <hr id="dividerLine" />

            <div className="bottomMainContainer">
                <div id="promptLabelPortrait">
                    <p id="promptLabelTextPortrait" ref={promptLabelPortraitRef}>User Terms And Conditions: </p>
                </div>

                <div className="upperPartContainer">
                    <div id="leftInnerContainer">
                        <div className="replaceableContent">
                            {viewComponents[view]}
                        </div>
                    </div>
                    <div id="rightInnerContainer">
                        {Object.keys(stepIndicatorRef).map(step => (
                            <div className="stepIndicator" id={step} key={step} ref={stepIndicatorRef[step]}>
                                {step.replace('step', 'Step ')}
                            </div>
                        ))}
                    </div>
                </div>

                <hr id="bottomDivider" />

                <div className="lowerPartContainer">
                    <div className="buttonContainer">
                        <div id="backButtonContainer">
                            <button id="backButton" ref={backButtonRef} onClick={goBack}>BACK</button>
                        </div>
                        <div id="stepIndicatorPortraitContainer">
                            {Object.keys(stepIndicatorRefPortrait).map(step => (
                                <div className="stepIndicator" id={step} key={step} ref={stepIndicatorRefPortrait[step]} />
                            ))}
                        </div>
                        <div id="nextButtonContainer">
                            <button id="nextButton" ref={nextButtonRef} onClick={changeView}>NEXT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
