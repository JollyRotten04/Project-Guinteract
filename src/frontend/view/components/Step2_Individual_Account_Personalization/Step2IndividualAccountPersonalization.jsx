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

    let [userNameErr, setUserNameErr] = useState(false);
    let [firstNameErr, setFirstNameErr] = useState(false);
    let [lastNameErr, setLastNameErr] = useState(false);

    //Setter methods...
    const handleFirstNameField = (e) => {
        setFirstNameErr(prev => prev = /[^a-zA-Z\s'-]/.test(e.target.value) ? true: false);
        console.log(firstNameErr);
        
        if(firstNameErr == false)
            setFirstNameField(prev => prev = e.target.value);
        else
            setFirstNameField(prev => prev = "");
    };

    const handleLastNameField = (e) => {
        setLastNameErr(prev => prev = /[^a-zA-Z\s'-]/.test(e.target.value) ? true: false);
        lastNameErr = /[^a-zA-Z\s'-]/.test(e.target.value) ? true: false;
        console.log(lastNameErr);

        if(lastNameErr == false)
            setLastNameField(prev => prev = e.target.value);
        else
            setLastNameField(prev => prev = "");
    };

    const handleUsernameField = (e) => {
        setUserNameErr(prev => prev = /[^a-zA-Z0-9_-]/.test(e.target.value) ? true: false);
        console.log(userNameErr);

        if(userNameErr == false)
            setUsernameField(prev => prev = e.target.value);
        else
            setUsernameField(prev => prev = "");
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
                    {firstNameErr && <span className='spanErrorStep2'>Please enter a valid first name*</span>}
                </div>

                {/* Last Name Input and Label Field */}
                <div className="lastNameContainer">

                    {/* Last Name Label */}
                    <p id="lastNameLabel">
                        Last Name: 
                    </p>

                    {/* Last Name Input and Label Field */}
                    <input type="text" id="lastNameInputField" ref={lastNameRef} placeholder = "Smith" onChange={handleLastNameField}/>
                    {lastNameErr && <span className='spanErrorStep2'>Please enter a valid last name*</span>}
                </div>

                    {/* Desired Username Input and Label Field */}
                <div className="desiredUsernameContainer">

                    {/* Desired Username Label */}
                    <p id="desiredUsernameLabel">
                        Desired Username: 
                    </p>

                    {/* Desired Username Input Field */}
                    <input type="text" id="desiredUsernameInputField" ref={userNameRef} placeholder = "John_Smith42!" onChange={handleUsernameField}/>
                    {userNameErr && <span className='spanErrorStep2'>Please enter only letters, numbers, underscores, and hyphens*</span>}
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