import './InitialRegistrationPageStyle.css'; // Initial Registration Page...
import RegistrationFields from '../../components/Replaceable_Content/RegistrationFields'; //Registration Fields Page...
import ChooseAccountType from '../../components/Choose_Account_Type/ChooseAccountType'; //Choose Account Type Page...
import TypesOfPageAccounts from '../../components/Page_Account_Selected/TypesOfPageAccounts'; //Types of Page Accounts Page...
import LogoComponent from '../../components/Logo_Component/LogoComponent';
import React, { useState, useRef, useEffect } from 'react';

export default function InitialRegistrationPage(){    

    //Functionality to change between login and register account options...
    const [selected, changeOption] = useState(null);
    const [loginPage, setIsLoginPage] = useState(false);
    const confirmPasswordFieldRef = useRef(null); // Create a ref for the password field
    const passwordFieldRef = useRef(null); // Create a ref for the password field
    const goButtonRef = useRef(null); // Create a ref for the GO button
    const forgotPasswordLabel = useRef(null);
    const views = ['RegistrationFields', 'ChooseAccountType', 'TypesOfPageAccounts'];
    let [view, setView] = useState('RegistrationFields'); // Initial view
    const [showBackButton, setShowBackButton] = useState(false); // State to manage back button visibility
    const [allFilled, setAllFilled] = useState(false); //Receives the boolean value of the variable allFilled from the childComponent...
    //If the page being viewed is the choose account page...
    const [selectedOne, setSelectedOne] = useState(false);
    const selectedOneRef = useRef(selectedOne);
    //If the page being viewed is where they need to choose the type of page account...
    const [selectedPage, setSelectedPage] = useState(false);

    const changeToLogin = () => {
        if (goButtonRef.current && passwordFieldRef.current) {
            //To reset the values of all flagger variables every time the user goes back...
            setSelectedOne(false);
            setSelectedPage(false);
            
            if (!loginPage) {
                console.log('Switching to login view');
                console.log('YEEYE');
                passwordFieldRef.current.style.marginBottom = '1vh';
                goButtonRef.current.classList.remove('active');
                setIsLoginPage(true);
            } 
            
            else {
                passwordFieldRef.current.style.marginBottom = '5vh';
                goButtonRef.current.classList.remove('active');
                setIsLoginPage(false);
            }
        }
    };

    
    //ADD CONDITION WHERE IF GO BUTTON IS SELECTED AND LOGIN OPTION IS SELECTED...



    // Callback function to handle the boolean value from the child
    const handleChildValue = (value) => {
        setAllFilled(value);
    };

    // Function to change the view
    const changeView = () => {
    console.log('Before: ', goButtonRef.current.classList);
    setView(prev => {
      const currentIndex = views.indexOf(prev);
      const nextIndex = (currentIndex + 1) % views.length;

      setShowBackButton(nextIndex !== 0); // Show the back button if not on the first view
    //   setIsLoginPage(false);
    
      if(goButtonRef.current){
        goButtonRef.current.classList.remove('active');
      }

      return views[nextIndex];
    });
    console.log('After: ', goButtonRef.current.classList);
    };

    if((view == 'ChooseAccountType' || view == 'TypesOfPageAccounts') && loginPage){
    if(forgotPasswordLabel.current){
        forgotPasswordLabel.current.style.display = 'none';
        // setIsLoginPage(false);

        //TO REDIRECT BACK TO REGISTRATION PAGE LOGIN VIEW WHEN LOGIN OPTION IS SELECTED WHEN IN OTHER VIEWS (ChooseAccountType and/or TypesOfPagesAccounts)
        setView('RegistrationFields');
        setShowBackButton(false);
        }
    }

    const selectedAccountType = (newValue) => {
        // console.log(newValue);
        setSelectedOne(newValue);
        selectedOneRef.current = newValue; 
    };

    const selectedPageAccount = (newValue) => {
        setSelectedPage(newValue);
    };

    const viewComponents = { 
        RegistrationFields: <RegistrationFields loginPage={loginPage} ref={(ref) => {
            if (ref) {
              confirmPasswordFieldRef.current = ref.confirmPasswordField.current;
              passwordFieldRef.current = ref.passwordField.current;
            }
          }} onFieldsStatusChange={handleChildValue} />, 
        ChooseAccountType: <ChooseAccountType setSelected = {selectedAccountType}/>, 
        TypesOfPageAccounts: <TypesOfPageAccounts selectedPageType = {selectedPageAccount}/>
      };


    // Function to go back to the previous view
    const goBack = () => {
        setView(prev => {
        let currentIndex = views.indexOf(prev);
        const prevIndex = (currentIndex - 1 + views.length) % views.length;

        setShowBackButton(prevIndex !== 0); // Hide the back button if returning to the first view

        //To reset the values of all flagger variables every time the user goes back...
        setSelectedOne(false);
        setSelectedPage(false);
        setIsLoginPage(false);

        //Disables the goButton when the back button is clicked...
        if(goButtonRef.current){
            goButtonRef.current.classList.remove('active');
        }

        return views[prevIndex];
        });
    };

    // Handle button active state change
    useEffect(() => {
        if (goButtonRef.current) {
            if (view == 'RegistrationFields' && allFilled) {
                goButtonRef.current.classList.add('active');
            } 

            else if (view == 'ChooseAccountType' && selectedOne) {
                goButtonRef.current.classList.add('active');
            }
            
            else if (view == 'TypesOfPageAccounts' && selectedPage){
                goButtonRef.current.classList.add('active');
            }
            
            else {
                goButtonRef.current.classList.remove('active');
            }
        }
    }, [allFilled, selectedOne, selectedPage]);

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
                        <p id="logInRedirect" onClick={changeToLogin}>
                            {loginPage ? 'or register a new account' : 'or log in to an existing account'}
                        </p>
                    </div>
                </div>

                {/* The displays on the right */}
                <div className="rightInnerContainer">
                    {/* Replaceable content */}

                    {/* Replaceable content container */}
                    <div className="replaceableContent">
                        {/* <TypesOfPageAccounts></TypesOfPageAccounts> */}
                        {/* <ChooseAccountType></ChooseAccountType> */}
                        {viewComponents[view]}
                    </div>

                    <p id="forgotPassword" ref = {forgotPasswordLabel} style={{ display: loginPage ? 'block' : 'none' }}>Forgot Password?</p>

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
        </div>
    );

    // JAVASCRIPT SEGMENT
        //
    // POTENTIALLY KAILANGAN SA PAG-REDESIGN NG RESIZED BROWSER WINDOW DYNAMICALLY KAYA INIWAN KO LANG AS COMMENT
        //
    // function getDeviceType() {
    //     const ua = navigator.userAgent;
    //     const body = document.querySelector('.InitialRegistrationPage');
    //     if (/Mobile|Android|iP(ad|hone)/.test(ua)) {
    //         body.classList.add('mobile');
    //     } else if (/Tablet|iPad/.test(ua) || (screen.width >= 600 && screen.width < 1024)) {
    //         body.classList.add('tablet');
    //     } else {
    //         body.classList.add('desktop');
    //     }
    // }
    
    // function applyLayout() {
    //     const deviceType = getDeviceType();
    //     document.body.setAttribute('data-device', deviceType);
    // }
    
    // window.addEventListener('resize', applyLayout);
    // document.addEventListener('DOMContentLoaded', applyLayout);
}