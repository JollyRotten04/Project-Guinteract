import './ForgotPasswordVerificationStyles.css';
import React, { useEffect, useState, } from 'react';

export default function ForgotPasswordVerification({ arrayFilled }){

    // Eventlistener and regex for verification code input...
    const [lines, setLines] = useState(['-', '-', '-', '-', '-']);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (key >= '0' && key <= '9') {
        setLines((prevLines) => {
          const newLines = [...prevLines];
          const emptyIndex = newLines.findIndex((line) => line === '-');
          if (emptyIndex !== -1) {
            newLines[emptyIndex] = key;
          }
          return newLines;
        });
      } else if (key === 'Backspace') {
        setLines((prevLines) => {
          const newLines = [...prevLines];
          const lastIndex = newLines.findLastIndex((line) => line !== '-');
          if (lastIndex !== -1) {
            newLines[lastIndex] = '-';
          }
          return newLines;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  //Checks if the validation array is filled...
  useEffect(() => {
    // Check if all lines are filled
    const allFilled = !lines.includes('-');
    arrayFilled(allFilled);
}, [lines, arrayFilled]);


    return(
        <div className="forgotPasswordVerification">
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


            <div className="innerContainer">

                {/* Main Label */}
                <div id="labelContainer">
                    <p id="label">Enter Code: </p>
                </div>

                {/* Code field */}
                <div className="codeFieldContainer">
                    {lines.map((line, index) => (
                        <div key={index} id={`line${index + 1}`}>
                        {line}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}