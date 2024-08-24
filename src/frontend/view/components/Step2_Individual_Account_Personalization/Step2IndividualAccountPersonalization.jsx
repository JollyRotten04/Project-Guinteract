import './Step2IndividualAccountPersonalizationStyles.css';
import { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";

export default function Step2IndividualAccountPersonalization({ isAllFilled, setUserInput, userInput }){

    //Creates state variables to track whether each field has content...
    const [firstNameField, setFirstNameField] = useState('');
    const [lastNameField, setLastNameField] = useState('');
    const [usernameField, setUsernameField] = useState('');

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const userNameRef = useRef(null);

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

    useEffect(() => {
        if(userInput.firstName != '' && userInput.lastName != '' && userInput.userName != ''){
            firstNameRef.current.value = userInput.firstName;
            lastNameRef.current.value = userInput.lastName;
            userNameRef.current.value = userInput.userName;
        }
    }, []);

    //Dynamically sets the isAllFilled flagger variable...
    useEffect(() => {
        if(firstNameField != '' && lastNameField != '' && usernameField != ''){
            setUserInput((prev) => ({
                ...prev,
                step2: {
                    firstName: firstNameField,
                    lastName: lastNameField,
                    username: usernameField
                }
            }));
            isAllFilled(true);
        }
    },[firstNameField,lastNameField,usernameField, setUserInput, isAllFilled]);

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
                    <input type="text" id="firstNameInputField" ref={firstNameRef} placeholder = "John Henry" onChange={handleFirstNameField}/>
                </div>

                {/* Last Name Input and Label Field */}
                <div className="lastNameContainer">

                    {/* Last Name Label */}
                    <p id="lastNameLabel">
                        Last Name: 
                    </p>

                    {/* Last Name Input and Label Field */}
                    <input type="text" id="lastNameInputField" ref={lastNameRef} placeholder = "Smith" onChange={handleLastNameField}/>
                </div>

                    {/* Desired Username Input and Label Field */}
                    <div className="desiredUsernameContainer">

                    {/* Desired Username Label */}
                    <p id="desiredUsernameLabel">
                        Desired Username: 
                    </p>

                    {/* Desired Username Input Field */}
                    <input type="text" id="desiredUsernameInputField" ref={userNameRef} placeholder = "John_Smith42!" onChange={handleUsernameField}/>
                </div>
            </div>
            
        </div>
    );
}

Step2IndividualAccountPersonalization.propTypes = {
    isAllFilled: PropTypes.func.isRequired,
    setUserInput: PropTypes.func.isRequired,
    userInput: PropTypes.object.isRequired,
}