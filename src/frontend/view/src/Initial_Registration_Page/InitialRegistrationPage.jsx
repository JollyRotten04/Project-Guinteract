import './InitialRegistrationPageStyle.css';
import RegistrationFields from '../../components/Replaceable_Content/RegistrationFields';
import ChooseAccountType from '../../components/Choose_Account_Type/ChooseAccountType';
import TypesOfPageAccounts from '../../components/Page_Account_Selected/TypesOfPageAccounts';
import LogoComponent from '../../components/Logo_Component/LogoComponent';
import ForgotPasswordEmail from '../../components/Forgot_Password_Email/ForgotPasswordEmail';
import ForgotPasswordVerification from '../../components/Forgot_Password_Verification/ForgotPasswordVerification';
import ForgotPasswordReset from '../../components/Forgot_Password_Reset/ForgotPasswordReset';
import LoadingScreen from '../../components/Loading_Screen/LoadingScreen';
import { useState, useRef, useEffect } from 'react';

export default function InitialRegistrationPage() {
    const [loginPage, setIsLoginPage] = useState(false);
    const confirmPasswordFieldRef = useRef(null);
    const passwordFieldRef = useRef(null);
    const goButtonRef = useRef(null);
    const forgotPasswordLabelRef = useRef(null);
    const views = ['RegistrationFields', 'ChooseAccountType', 'TypesOfPageAccounts', 'ForgotPasswordEmail', 'ForgotPasswordVerification', 'ForgotPasswordReset'];
    const [view, setView] = useState('RegistrationFields');
    const [showBackButton, setShowBackButton] = useState(false);
    const [allFilled, setAllFilled] = useState(false);
    const [selectedOne, setSelectedOne] = useState(false);
    const selectedOneRef = useRef(selectedOne);
    const [selectedPage, setSelectedPage] = useState(false);
    const [forgotPasswordPage, setForgotPasswordPage] = useState(false);
    const [forgotPassEmailFilled, setForgotPassEmailFilled] = useState(false);
    const [verificationArrayFilled, setVerificationArrayFilled] = useState(false);
    const [resetAllFilled, setResetAllFilled] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(false);

    const setPasswordResetAllFilled = (value) => {
        console.log('Received value: ', value);
        setResetAllFilled(value);
    }
    
    const handleChildValue = (value) => {
        setAllFilled(value);
    };

    const setForgotPassEmail = (value) => {
        setForgotPassEmailFilled(value);
    };

    const setVerificationStatus = (value) => {
        // console.log(verificationArrayFilled);
        setVerificationArrayFilled(value);
    };

    //Changes View According to User's Navigation...
    const changeView = () => {
        setView((prev) => {
            const currentIndex = views.indexOf(prev);
            const nextIndex = (currentIndex + 1) % views.length;
            setShowBackButton(nextIndex !== 0);
            setForgotPassEmailFilled(false);
            if (goButtonRef.current) {
                goButtonRef.current.classList.remove('active');
            }

            console.log('view: ', view );
            console.log('selected page: ', selectedPage);
            // After the last view, show the loading screen
            if (view === 'TypesOfPageAccounts' && selectedPage != null) {
                setShowLoadingScreen(true);
            }

            return views[nextIndex];
        });
    };

    const forgotPasswordClicked = () => {
        if (!forgotPasswordPage) {
            // Transition to forgot password page
            setView('ForgotPasswordEmail');
            setForgotPasswordPage(true);
            setAllFilled(false);
            setShowBackButton(true);
            setIsLoginPage(false);
        } 
    };
    
    useEffect(() => {
        // Manage view changes based on state
        if (view === 'ChooseAccountType' || view === 'TypesOfPageAccounts') {
            if (loginPage) {
                forgotPasswordLabelRef.current.style.display = 'none';
                setView('RegistrationFields');

                setForgotPasswordPage(false);
            }
        }
    }, [view, forgotPasswordPage, loginPage]);

    const selectedAccountType = (newValue) => {
        setSelectedOne(newValue);
        selectedOneRef.current = newValue;
    };

    const selectedPageAccount = (newValue) => {
        setSelectedPage(newValue);
    };

    //If forgot password page...

    const viewComponents = {
        RegistrationFields: (
            <RegistrationFields
                loginPage={loginPage}
                ref={(ref) => {
                    if (ref) {
                        confirmPasswordFieldRef.current = ref.confirmPasswordField.current;
                        passwordFieldRef.current = ref.passwordField.current;
                    }
                }}
                onFieldsStatusChange={handleChildValue}
            />
        ),
        ChooseAccountType: <ChooseAccountType setSelected={selectedAccountType} />,
        TypesOfPageAccounts: <TypesOfPageAccounts selectedPageType={selectedPageAccount} />,
        ForgotPasswordEmail: <ForgotPasswordEmail setFilled = {setForgotPassEmail}/>,
        ForgotPasswordVerification: <ForgotPasswordVerification arrayFilled = {setVerificationStatus} />,
        ForgotPasswordReset: <ForgotPasswordReset isAllFilled = {setPasswordResetAllFilled} />,
    };

    const changeToLogin = () => {
        // console.log(view);
        // console.log(loginPage);
        if (goButtonRef.current && passwordFieldRef.current) {
            setSelectedOne(false);
            setSelectedPage(false);
            setForgotPassEmailFilled(false);

            if (forgotPasswordPage) {
                // Transition back to login page
                setView('RegistrationFields');
                setShowBackButton(false);
                setForgotPasswordPage(false);
                setIsLoginPage(true);
            }

            if (!loginPage) {
                if(passwordFieldRef.current){
                    // console.log(loginPage);
                    passwordFieldRef.current.style.marginBottom = '5vh';
                    goButtonRef.current.classList.remove('active');
                    setIsLoginPage(true);
                }
            } 

            else if(loginPage) {
                if(passwordFieldRef.current){
                    // console.log(loginPage);
                    passwordFieldRef.current.style.marginBottom = '5vh';
                    goButtonRef.current.classList.remove('active');
                    setIsLoginPage(false);
                }
            }
        }
    };

    const goBack = () => {
        setView((prev) => {
            let currentIndex = views.indexOf(prev);
            const prevIndex = (currentIndex - 1 + views.length) % views.length;
            setShowBackButton(prevIndex !== 0);
            setSelectedOne(false);
            setSelectedPage(false);
            setIsLoginPage(false);
            setForgotPassEmailFilled(false);

            // if (forgotPasswordPage) {
            //     // Transition back to login page
            //     setView('RegistrationFields');
            //     setForgotPasswordPage(false);
            //     setIsLoginPage(true);
            //     setShowBackButton(false);
            // }

            if(view === 'ForgotPasswordReset' || view === 'ForgotPasswordEmail'){
                setView('RegistrationFields');
                setShowBackButton(false);
                return views[views.indexOf('RegistrationFields')];
            }

            if (goButtonRef.current) {
                goButtonRef.current.classList.remove('active');
            }

            return views[prevIndex];
        });
    };

    //Dynamically keeps track of user input to either activate or deactivate the go button...
    useEffect(() => {
        if (goButtonRef.current) {
            if ((view === 'RegistrationFields' && allFilled) || 
                (view === 'ChooseAccountType' && selectedOne) || 
                (view === 'TypesOfPageAccounts' && selectedPage) ||
                (view === 'ForgotPasswordEmail' && forgotPassEmailFilled) || 
                (view === 'ForgotPasswordVerification' && verificationArrayFilled) ||
                (view === 'ForgotPasswordReset' && resetAllFilled)) {
                goButtonRef.current.classList.add('active');
            } else {
                goButtonRef.current.classList.remove('active');
            }
        }
    }, [allFilled, selectedOne, selectedPage, forgotPassEmailFilled, verificationArrayFilled, resetAllFilled]);

    //Syncs the loginPage status to display the forgotPassword label...
    useEffect(() => {
        // Update forgotPasswordLabelRef display based on loginPage state
        if (forgotPasswordLabelRef.current) {
            forgotPasswordLabelRef.current.style.display = loginPage ? 'block' : 'none';
        }
    }, [loginPage]);

    return (
        <div className="InitialRegistrationPage">
            {showLoadingScreen && <LoadingScreen />}
            {!showLoadingScreen && (
            <div className="outerContainer">
                <div className="leftInnerContainer">
                    <div className="logoGreetContainer">
                        <p id="welcomeTo">Welcome To</p>
                        <LogoComponent />
                    </div>
                    <div className="descriptionContainer">
                        <p id="descriptionText">Meet and connect with fellow guitarists</p>
                    </div>
                    <hr id="topDivider" />
                    <div className="logIn">
                        <p id="logInRedirect" onClick={changeToLogin}>
                            {loginPage ? 'or register a new account' : 'or log in to an existing account'}
                        </p>
                    </div>
                </div>
                <div className="rightInnerContainer">
                    <div className="replaceableContent">
                        {viewComponents[view]}
                    </div>
                    <p id="forgotPassword" ref={forgotPasswordLabelRef} style={{ display: loginPage ? 'block' : 'none' }} onClick={forgotPasswordClicked}>
                        Forgot Password?
                    </p>
                    <div className="goButtonContainer">
                        {showBackButton && <button id="backButton" onClick={goBack}>BACK</button>}
                        <button id="goButton" onClick={changeView} ref={goButtonRef}>GO</button>
                    </div>
                    <div className="logInPortrait">
                        <p id="logInRedirect" onClick={changeToLogin}>
                            {loginPage ? 'or register a new account' : 'or log in to an existing account'}
                        </p>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}
