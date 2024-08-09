import './Step3IndividualAccountPersonalizationStyles.css'
import React, { useState, useRef, useEffect } from 'react';
export default function Step3IndividualAccountPersonalization({ hasSelected }){
    // State to track the selected choice
    const [selectedChoice, setSelectedChoice] = useState(null);
    const maleChoice = useRef(null);
    const femaleChoice = useRef(null);
    const nonbinaryChoice = useRef(null);

    // Select Container Method
    const selectContainer = (choice) => {
        setSelectedChoice(choice);
    };

    useEffect(() => {
        if(selectedChoice !== null){
            hasSelected(true);
        }
    }, [selectedChoice]);

    return(
        <div className="Step3IndividualAccountPersonalization">
            
            {/* Main Label Element */}
            <p id="mainLabelText">Next, what do you identify as?</p>

            <hr id="dividerLine" />

            {/* Choices Container */}
            <div className="choiceContainer">

                {/* Male Choice Container */}
                <div id="maleChoiceContainer" className={selectedChoice === 'male' ? 'active' : ''}
                    onClick={() => selectContainer('male')} ref={maleChoice} > 
                    
                    {/* Radio head container */}
                    <div id="radioheadContainer">
                        <input className = "choice" type="radio" id="rad1" name="rads" checked={selectedChoice === 'male'} onChange={() => selectContainer('male')}/>
                        <label htmlFor="rad1"></label>
                    </div>

                    <div id="radioheadLabel">
                        <p id="radioheadLabelText">I identify as a male</p>
                    </div>

                </div>

                {/* Female Choice Container */}
                <div id="femaleChoiceContainer" className={selectedChoice === 'female' ? 'active' : ''}
                    onClick={() => selectContainer('female')} ref={femaleChoice}>

                    {/* Radio head container */}
                    <div id="radioheadContainer">
                        <input className = "choice" type="radio" id="rad2" name="rads" checked={selectedChoice === 'female'} onChange={() => selectContainer('female')}/>
                        <label htmlFor="rad2"></label>
                    </div>

                    <div id="radioheadLabel">
                        <p id="radioheadLabelText">I identify as a female</p>
                    </div>

                </div>

                {/* Non-Binary Choice Container */}
                <div id="nonbinaryChoiceContainer" className={selectedChoice === 'nonbinary' ? 'active' : ''}
                    onClick={() => selectContainer('nonbinary')} ref={nonbinaryChoice}>

                    {/* Radio head container */}
                    <div id="radioheadContainer">
                        <input className = "choice" type="radio" id="rad3" name="rads" checked={selectedChoice === 'nonbinary'} onChange={() => selectContainer('nonbinary')}/>
                        <label htmlFor="rad3"></label>
                    </div>

                    <div id="radioheadLabel">
                        <p id="radioheadLabelText">I identify as non-binary</p>
                    </div>

                </div>
            </div>
        </div>
    );
}