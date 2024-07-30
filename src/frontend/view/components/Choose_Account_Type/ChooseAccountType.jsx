import React, { useState } from 'react';
import './ChooseAccountTypeStyles.css'


export default function ChooseAccountType(){

    const [selectedOption, setSelectedOption] = useState(null);

    // Event handler for choice selection
    const choiceSelect = (event) => {
        // Get the ID of the clicked element
        const id = event.target.closest('.choice').id;
        const individualAccountChoice = document.getElementById('individualAccountChoice');
        const pageAccountChoice = document.getElementById('pageAccountChoice');

        // Update the selected option in the state
        setSelectedOption(id);

        if(id == 'individualAccountChoice'){
            if(individualAccountChoice.classList.contains('active')){
                individualAccountChoice.classList.remove('active');
            }

            else{
                individualAccountChoice.classList.add('active');
                pageAccountChoice.classList.remove('active');
            }
        } 

        else{
            
            if(pageAccountChoice.classList.contains('active')){
                pageAccountChoice.classList.remove('active');
            }

            else{
            pageAccountChoice.classList.add('active');
            individualAccountChoice.classList.remove('active');
            }
        }
    };

    return (
        <div className = "mainContainer">

            {/* Prompt text Container */}
            <div className="promptTextContainer">
                <p id="promptText">Create an account for...</p>
            </div>

            {/* Account Type Choice Container */}
            <div className="choiceContainer">

                {/* Individual Account Choice */}
                <div className = "choice" id="individualAccountChoice" onClick = {choiceSelect}>
                    <div className="choiceOuterContainer">

                        {/* Individual Account Choice Main Label */}
                        <div className="mainLabelContainer">
                            <p id="mainLabel">Myself</p>
                        </div>

                        {/* Individual Account Choice Description Text */}
                        <div id="descriptionTextContainer">
                            <p id="descriptionText">An individual and personalized account just for me</p>
                        </div>
                    </div>
                </div>

                {/* Page Account Choice */}
                <div className = "choice" id="pageAccountChoice"  onClick = {choiceSelect}>
                    <div className="choiceOuterContainer">
                        {/* Page Account Choice Main Label */}
                        <div className="mainLabelContainer">
                            <p id="mainLabel">My Page</p>
                        </div>

                        {/* Page Account Choice Description Text */}
                        <div id="descriptionTextContainer">
                            <p id="descriptionText">A page for our group to represent and promote our music, identity, and/or products and services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}