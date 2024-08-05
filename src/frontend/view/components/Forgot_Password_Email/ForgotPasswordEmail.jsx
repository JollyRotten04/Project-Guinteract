import './ForgotPasswordEmailStyles.css';
import { useEffect, useRef } from 'react';
export default function ForgotPasswordEmail({ setFilled }){

    const emailFieldRef = useRef(null);

    const inputChanged = () => {
        if(emailFieldRef.current){
            if(emailFieldRef.current != ''){
                setFilled(true);
            }

            else{
                setFilled(false);
            }
        }
    };

    return(
        <div className="forgotPasswordEmailMainContainer">
            <div className="labelsContainer">
                <div id="mainLabelContainer">
                    <p id="mainLabel">
                        Password Reset
                    </p>
                </div>

                <div id="extraDescriptionContainer">
                    <p id="extraDescription">
                        Please enter the email address you used to create the account, and we'll send you a code to verify that you are indeed
                        the owner of the account you're trying to retrieve.
                    </p>
                </div>
            </div>

            <div className="emailInputField">
                {/* Label for user to know that the field is for email address */}
                <div id="emailLabelContainer">
                    <p id="emailLabel">Email Address:</p>
                </div>

                {/* Field for email input */}
                <div id="emailInputFieldContainer">
                    <input type="text" id="emailInputField" placeholder = "example@address.com" ref={emailFieldRef} onChange = {inputChanged}/>
                </div>
            </div>
        </div>
    );
}