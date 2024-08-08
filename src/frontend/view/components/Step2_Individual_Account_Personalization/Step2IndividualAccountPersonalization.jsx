import './Step2IndividualAccountPersonalizationStyles.css';
import React, { useState, useEffect } from 'react';
export default function Step2IndividualAccountPersonalization({ isAllFilled }){

    //Creates state variables to track whether each field has content...
    const [firstNameField, setFirstNameField] = useState('');
    const [lastNameField, setLastNameField] = useState('');
    const [usernameField, setUsernameField] = useState('');

    //Setter methods...
    const handleFirstNameField = (e) => {
        setFirstNameField(e.target.value);
    };

    const handleLastNameField = (e) => {
        setLastNameField(e.target.value);
    };

    const handleUsernameField = (e) => {
        setUsernameField(e.target.value);
    };

    //Dynamically sets the isAllFilled flagger variable...
    useEffect(() => {
        if(firstNameField != '' && lastNameField != '' && usernameField != ''){
            isAllFilled(true);
        }
    },[firstNameField,lastNameField,usernameField]);

    return(
        <div className="step2IndividualAccountPersonalization">
            <p id="textLabel">
                First, what should we call you?
            </p>

            {/* Inner Container for easier styling of fields */}
            <div className="innerContainer">

                {/* First Name Input and Label Field */}
                <div className="firstNameContainer">

                    {/* First Name Label */}
                    <p id="firstNameLabel">
                        First Name:
                    </p>

                    {/* First Name Input Field */}
                    <input type="text" id="firstNameInputField" placeholder = "John Henry" onChange={handleFirstNameField}/>
                </div>

                {/* Last Name Input and Label Field */}
                <div className="lastNameContainer">

                    {/* Last Name Label */}
                    <p id="lastNameLabel">
                        Last Name: 
                    </p>

                    {/* Last Name Input and Label Field */}
                    <input type="text" id="lastNameInputField" placeholder = "Smith" onChange={handleLastNameField}/>
                </div>

                    {/* Desired Username Input and Label Field */}
                    <div className="desiredUsernameContainer">

                    {/* Desired Username Label */}
                    <p id="desiredUsernameLabel">
                        Desired Username: 
                    </p>

                    {/* Desired Username Input Field */}
                    <input type="text" id="desiredUsernameInputField" placeholder = "John_Smith42!" onChange={handleUsernameField}/>
                </div>
            </div>
            
        </div>
    );
}