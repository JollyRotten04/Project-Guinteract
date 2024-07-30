import './InitialRegistrationPageStyle.css'; // Initial Registration Page...
import RegistrationFields from './Replaceable_Content/RegistrationFields'; //Registration Fields Page...
import ChooseAccountType from './Choose_Account_Type/ChooseAccountType'; //Choose Account Type Page...
import TypesOfPageAccounts from './Page_Account_Selected/TypesOfPageAccounts'; //Types of Page Accounts Page...
import LogoComponent from './Logo_Component/LogoComponent';
import React, { useState } from 'react';



//// ADD EVENT LISTENER FOR GO BUTTON, THE BUTTON SHOULD FIRST BE UNABLE TO BE SELECTED IF THE USER HASN'T FIRST SELECTED AN OPTION OR FILLED OUT THE NECESSARY FIELDS...






export default function InitialRegistrationPage(){

    //Functionality to change between login and register account options...
    const [selected, changeOption] = useState(null);
    let isLoginPage = false;

    const changeToLogin = (event) => {
        const loginOption = document.getElementById('logInRedirect'); //Gets logIn element by id...
        const confirmPasswordLabel = document.getElementById('confirmPasswordLabel'); //Gets the confirm password text label to either show or remove it...
        const confirmPasswordField = document.getElementById('confirmPasswordInputField'); //Gets the confirm password field by id to either show or remove it when switching between login and register options...
        const forgotPasswordOption = document.getElementById('forgotPassword'); //Gets the forgot password option by id to either show or hide it...
        const topLabel = document.getElementById('label'); //Gets the top label by id to change it according to the option selected...
        const passwordField = document.getElementById('passwordInputField'); //Gets the password input field to change the amount for its bottom margin...

        if(isLoginPage == false){
            loginOption.textContent = 'or register a new account'; //Changes the login choice to register choice after clicking...
            confirmPasswordLabel.style.display = 'none'; //Hides the confirm password field...
            confirmPasswordField.style.display = 'none'; //Hides the confirm password field...
            forgotPasswordOption.style.display = 'block'; //Shows the forgot password option...
            topLabel.textContent = 'Welcome back! Log in to your account!'; //Changes the top label to create an account for...
            passwordField.style.marginBottom = '1vh'; //Changes the bottom margin for the password field...

            isLoginPage = true; //Changes the isLoginPage state to true to show the login option...
        }

        else{
            loginOption.textContent = 'or log in to an existing account'; //Changes the login choice to register choice after clicking...
            confirmPasswordLabel.style.display = 'block'; //Hides the confirm password field...
            confirmPasswordField.style.display = 'block'; //Shows the confirm password field...
            forgotPasswordOption.style.display = 'none'; //Shows the forgot password option...
            topLabel.textContent = 'To get started, create an account!'; //Changes the top label to create an account for...
            passwordField.style.marginBottom = '5vh'; //Changes the bottom margin for the password field...

            isLoginPage = false; //Changes the isLoginPage state to true to show the login option...
        }
    }

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
                        <p id="logInRedirect" onClick={changeToLogin}>or log in into an existing account</p>
                    </div>
                </div>

                {/* The displays on the right */}
                <div className="rightInnerContainer">
                    {/* Replaceable content */}

                    {/* Replaceable content container */}
                    <div className="replaceableContent">
                        {/* <TypesOfPageAccounts></TypesOfPageAccounts> */}
                        {/* <ChooseAccountType></ChooseAccountType> */}
                        <RegistrationFields></RegistrationFields>
                    </div>

                    <p id="forgotPassword">Forgot Password?</p>

                    <div className="goButtonContainer">
                        <button id="goButton">GO</button>
                    </div>

                    <div className="logInPortrait">
                        <p id="logInRedirect" onClick={changeToLogin}>or log in into an existing account</p>
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