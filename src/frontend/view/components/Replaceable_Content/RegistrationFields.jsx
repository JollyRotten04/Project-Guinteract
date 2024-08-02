import './RegistrationFieldsStyles.css';
import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const RegistrationFields = forwardRef((props, ref) => {
  // Destructure props to get any needed properties (e.g., loginPage)
  const { loginPage, onFieldsStatusChange } = props;
  const confirmPasswordField = useRef(null);
  const passwordField = useRef(null);

//   console.log('RegistrationFields re-rendered. loginPage:', loginPage);

  // Define state hooks for input fields
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  // Effect to check if all fields are filled
  useEffect(() => {
    //Correctly updating dynamically...
    const allFilled =  loginPage? (inputEmail !== '' && inputPassword !== '') : (inputEmail !== '' && inputPassword !== '' && inputConfirmPassword !== '');
    if (onFieldsStatusChange) { //This condition is the issue...
      onFieldsStatusChange(allFilled);
    }
  }, [inputEmail, inputPassword, inputConfirmPassword, onFieldsStatusChange]);

  // Event handler to update state on input change
  const handleInputChange = (event) => {
    const { id, value } = event.target;

    if (id === 'emailInputField') {
      setInputEmail(value);
    } else if (id === 'passwordInputField') {
      setInputPassword(value);
    } else if (id === 'confirmPasswordInputField') {
      setInputConfirmPassword(value);
    }
  };

  // Inline style object to control visibility
  const confirmPasswordStyle = {
    display: loginPage ? 'none' : 'block', // Hide or show based on loginPage
  };

   // Make the refs available to the parent
   useImperativeHandle(ref, () => ({
    confirmPasswordField,
    passwordField
  }));

  return (
    <div className="mainContents">
      {/* Top Right Label */}
      <div className="topRightLabel">
        <p id="label">{loginPage ? 'Welcome back! Please log in.' : 'To get started, create an account!'}</p>
      </div>

      {/* Registration Form */}
      <div className="inputFields">
        {/* Email Container */}
        <div id="email">
          <p id="emailLabel">Email: </p>
          <input
            type="text"
            id="emailInputField"
            placeholder="example@address.com"
            onChange={handleInputChange}
          />
        </div>

        {/* Password Container */}
        <div id="password">
          <p id="passwordLabel">Password: </p>
          <input
            type="password"
            id="passwordInputField"
            onChange={handleInputChange}
            ref={passwordField} 
          />
        </div>

        {/* Confirm Password Container */}
        <div
          id="confirmPassword"
          style={confirmPasswordStyle}
        >
          <p id="confirmPasswordLabel">Confirm Password:</p>

          <input
            type="password"
            id="confirmPasswordInputField"
            ref={confirmPasswordField} // Use the ref passed from the parent
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
});

// PropTypes can be used to validate props if needed
RegistrationFields.propTypes = {
  loginPage: PropTypes.bool, // Specify the type of props being used
  onFieldsStatusChange: PropTypes.func // Prop type for the callback function
};

export default RegistrationFields;
