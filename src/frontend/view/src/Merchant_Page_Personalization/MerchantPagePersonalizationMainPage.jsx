import Header from "./components/header";
import "./MerchantPagePersonalizationMainPageStyles.css";
import ButtonFooter from "./components/ButtonFooter/ButtonFooter";
import UserTermsAndAgreements from "../../components/User_Terms_And_Agreements/UserTermsAndAgreements";
import StepsIndicator from "./components/RightPanelView/StepsIndicator";
import LoadingScreen from "../../components/Loading_Screen/LoadingScreen";
import { useEffect, useState, useRef } from "react";
import Step2MerchantPage from "./components/LeftPanelView/Step2/Step2MerchantPage";
import Step3MerchantPage from "./components/LeftPanelView/Step3/Step3MerchantPage";
import Step4MerchantPage from "./components/LeftPanelView/Step4/Step4MerchantPage";
export default function MerchantPagePersonalizationMainPage(){
    const views = [
        'UserTermsAndAgreements',
        'Step2MerchantPage',
        'Step3MerchantPage',
        'Step4MerchantPage',
        'Loading'
    ];

    const promptText = {
        'UserTermsAndAgreements': 'User Terms And Conditions:',
        'Step2MerchantPage': 'Tell us more about your page...',
        'Step3MerchantPage': 'Tell us more about your page...',
        'Step4MerchantPage': 'Tell us more about your page...',
    };

    //Flagger variables...
    const [view, setView] = useState(views[0]);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    // const [allFilledStep2, setAllFilledStep2] = useState(false);
    // const [followedEnough, setFollowedEnough] = useState(false);
    const [isLoading, setIsLoading] = useState(false);  // State for loading screen
    const [ userInput, setUserInput ] = useState({
        step1: false,
        step2: {
            firstName: '',
            lastName: '',
            username: ''
        },
        step3: "",
        step4: {
            month: "",
            day: "",
            year: ""
        }
    });

    const promptLabelRef = useRef(null);

    const stepIndicatorRef = {
        step1: useRef(null),
        step2: useRef(null),
        step3: useRef(null),
        step4: useRef(null),
    };

    const stepIndicatorRefPortrait = {
        step1: useRef(null),
        step2: useRef(null),
        step3: useRef(null),
        step4: useRef(null),
    };

    const submitData = () => {
        toast.success("Data submitted successfully!");
    }

    // Dynamically checks for which step the user is currently in and updates accordingly...
    useEffect(() => {

        Object.values(stepIndicatorRef).forEach(ref => ref.current?.classList.remove('active'));
        Object.values(stepIndicatorRefPortrait).forEach(ref => ref.current?.classList.remove('active'));

        const currentStep = `step${views.indexOf(view) + 1}`;
        stepIndicatorRef[currentStep]?.current?.classList.add('active');
        stepIndicatorRefPortrait[currentStep]?.current?.classList.add('active');

        if (promptLabelRef.current) {
            promptLabelRef.current.textContent = promptText[view];
        }

        if(view === "Loading"){
            setIsLoading(true);
        }

        if (promptLabelRef.current) {
            // Update the mainLabelText content dynamically based on the view
            promptLabelRef.current.textContent = promptText[view] || '';
        }

        // if (view === 'UserTermsAndAgreements') {
        //     backButtonRef.current?.classList.remove('active');
        // } else {
        //     backButtonRef.current?.classList.add('active');
        // }

        // nextButtonRef.current?.classList.remove('active');
    }, [view]);

    const changeView = () => {
        if(view == "Step4IndividualAccountPersonalization"){
            setIsLoading(true);
            submitData();
        }
        
        else
            setView(prev => views[(views.indexOf(prev) + 1) % views.length]);
    };

    const goBack = () => {
        setView(prev => views[(views.indexOf(prev) - 1 + views.length) % views.length]);
    };

    const viewComponents = {
        UserTermsAndAgreements: <UserTermsAndAgreements isChecked={setCheckboxChecked} setUserInput={setUserInput} userInput={userInput.step1} />,
        Step2MerchantPage: <Step2MerchantPage /*isAllFilled={setStep2AllFilled} */ setUserInput={setUserInput} userInput={userInput.step2} />,
        Step3MerchantPage: <Step3MerchantPage /* hasSelected={setStep3Chosen} */ setUserInput={setUserInput} userInput={userInput.step3} />,
        Step4MerchantPage: <Step4MerchantPage /* allSelected={setStep4AllChosen}*/ setUserInput={setUserInput} userInput={userInput.step4} />,
    };

    return(
        <div className="merchantAccountPersonalization">
            { isLoading ? (
                <LoadingScreen /> 

            ) : (
                <>
            {/* Header */}
            <Header view={view}></Header>

            <p id="mainLabelText" ref={promptLabelRef}></p>

            {/* Main Content */}
            <div id="merchantMainContainer">

                {/* Left View Panel */}
                <div id="leftView">

                    {/* Replaceable Content View */}
                    <div id="replaceableContent">
                        {viewComponents[view]}
                    </div>
                </div>

                {/* Right View Panel Step Container */}
                <div id="rightView">
                    <StepsIndicator pageMark={view}></StepsIndicator>
                </div>
            </div>

            <ButtonFooter goBack={goBack} nextPage={changeView} view={view} isChecked={checkboxChecked}></ButtonFooter>
            </>
            )};
        </div>
    );
}