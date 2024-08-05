import './ForgotPasswordResetStyles.css';
import {  useEffect, useState } from 'react';
export default function ForgotPasswordReset({ isAllFilled }){

    //Variables to add event listeners to...
    const [newPasswordField, setNewPassword] = useState('');
    const [confirmNewPasswordField, setConfirmNewPassword] = useState('');

    useEffect(() => {
        if(newPasswordField != '' && confirmNewPasswordField != ''){
            isAllFilled(true);
        }

        else{
            isAllFilled(false);
        }
    }, [newPasswordField, confirmNewPasswordField, isAllFilled]);

    // Handlers for input change
    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
    };

    return(
        <div className="forgotPasswordReset">
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

            {/* New Password Input Field */}
            <div className="newPassInputField">
                {/* Label for user to know that the field is for email address */}
                <div id="newPassLabelContainer">
                    <p id="newPassLabel">Enter New Password:</p>
                </div>

                {/* Field for email input */}
                <div id="newPassInputFieldContainer">
                    <input type="password" id="newPassInputField" onChange={handleNewPasswordChange} />
                </div>
            </div>

            {/* Confirm New Password Input Field */}
            <div className="confirmNewPassInputField">
                {/* Label for user to know that the field is for email address */}
                <div id="confirmNewPassLabelContainer">
                    <p id="confirmNewPassLabel">Confirm New Password:</p>
                </div>

                {/* Field for email input */}
                <div id="confirmNewPassInputFieldContainer">
                    <input type="password" id="confirmNewPassInputField" onChange={handleConfirmNewPasswordChange} />
                </div>
            </div>
        </div>
    );
}