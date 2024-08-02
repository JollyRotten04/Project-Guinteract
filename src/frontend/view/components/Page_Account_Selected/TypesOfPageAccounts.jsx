import './TypesOfPageAccountsStyles.css';
import React, { useState } from 'react';
export default function TypesOfPageAccounts({ selectedPageType }){
    const [selectedOption, setSelectedOption] = useState(null);

    // Event handler for choice selection
    const choiceSelect = (event) => {
        // Get the ID of the clicked element
        let id = event.target.closest('.choice').id;
        const bandAccountChoice = document.getElementById('bandAccountChoice');
        const merchantAccountChoice = document.getElementById('merchantAccountChoice');

        // Update the selected option in the state
        setSelectedOption(id);

        if(id == 'bandAccountChoice'){
            if(bandAccountChoice.classList.contains('active')){
                bandAccountChoice.classList.remove('active');
            }

            else{
                bandAccountChoice.classList.add('active');
                merchantAccountChoice.classList.remove('active');
            }
        } 

        else if(id == 'merchantAccountChoice'){
            
            if(merchantAccountChoice.classList.contains('active')){
                merchantAccountChoice.classList.remove('active');
            }

            else{
            merchantAccountChoice.classList.add('active');
            bandAccountChoice.classList.remove('active');
            }
        }

        //Disables the go button if user deselects both choices...
        if(!bandAccountChoice.classList.contains('active') && !merchantAccountChoice.classList.contains('active')){
            id = null;
        }

        //To return the choice to the parent component...
        selectedPageType(id);
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
                <div className = "choice" id="bandAccountChoice" onClick = {choiceSelect}>
                    <div className="choiceOuterContainer">

                        {/* Individual Account Choice Main Label */}
                        <div className="mainLabelContainer">
                            <p id="mainLabel">My Band</p>
                        </div>

                        {/* Individual Account Choice Description Text */}
                        <div id="descriptionTextContainer">
                            <p id="descriptionText">A page for our group to represent and promote our music and identity</p>
                        </div>
                    </div>
                </div>

                {/* Page Account Choice */}
                <div className = "choice" id="merchantAccountChoice"  onClick = {choiceSelect}>
                    <div className="choiceOuterContainer">
                        {/* Page Account Choice Main Label */}
                        <div className="mainLabelContainer">
                            <p id="mainLabel">My Service</p>
                        </div>

                        {/* Page Account Choice Description Text */}
                        <div id="descriptionTextContainer">
                            <p id="descriptionText">A page to showcase and advertise our offered products and services to potential customers</p>
                        </div>
                    </div>
                </div>
            </div>
        <div/>
    </div>
    );
}