import './Step6IndividualAccountPersonalizationStyles.css';
import { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
export default function Step6IndividualAccountPersonalization({ hasSelected, setUserInput, userInput }){
    // State to track the selected choice
    const [selectedChoice, setSelectedChoice] = useState("");
    const yesChoice = useRef(null);
    const noChoice = useRef(null);

    // Select Container Method
    const selectContainer = (choice) => {
        setUserInput((prev) => ({
            ...prev,
            step6: choice
        }));
        setSelectedChoice(choice);
    };

    useEffect(() => {
        console.log(userInput)
        if(userInput != ''){
            setSelectedChoice(prev => prev = userInput);

        console.log(selectedChoice)}
    }, []);

    useEffect(() => {
        if(selectedChoice !== null){
            hasSelected(true);
        }
    }, [selectedChoice]);

    return(
        <div className="step6IndividualAccountPersonalization">

            {/* Main Label */}
            <p id="mainLabel">Next, are you currently in a band?</p>

            {/* Main Container */}
            <div className = "choiceContainer" id="mainContainer">

                {/* Yes Container */}
                <div id="yesOptionContainer" className={selectedChoice === 'yesChoice' ? 'active' : ''}
                    onClick={() => selectContainer('yesChoice')} ref={yesChoice}>

                    {/* Radio head container */}
                    <div id="radioheadContainer">
                        <input className = "choice" type="radio" id="rad1" name="rads" checked={selectedChoice === 'yesChoice'} onChange={() => selectContainer('yesChoice')} />
                        <label htmlFor="rad1"></label>
                    </div>

                    <div id="radioheadLabel">
                        <p id="radioheadLabelText">Yes, I am in a band</p>
                    </div>
                </div>

                {/* No Container */}
                <div id="noOptionContainer" className={selectedChoice === 'noChoice' ? 'active' : ''}
                    onClick={() => selectContainer('noChoice')} ref={noChoice}>

                    {/* Radio head container */}
                    <div id="radioheadContainer">
                        <input className = "choice" type="radio" id="rad2" name="rads" checked={selectedChoice === 'noChoice'} onChange={() => selectContainer('noChoice')} />
                        <label htmlFor="rad2"></label>
                    </div>

                    <div id="radioheadLabel">
                        <p id="radioheadLabelText">No, I am not in a band</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Step6IndividualAccountPersonalization.propTypes = {
    hasSelected: PropTypes.func.isRequired,
    setUserInput: PropTypes.func.isRequired,
    userInput: PropTypes.string.isRequired,
}