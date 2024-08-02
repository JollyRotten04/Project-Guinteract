import React, { useState, useRef } from 'react';
import './ChooseAccountTypeStyles.css'


export default function ChooseAccountType({ setSelected }){

    //For activation of CSS...
    const [selectedOption, setSelectedOption] = useState(null);
    const individualAccountChoiceRef = useRef(null);
    const pageAccountChoiceRef = useRef(null);

    // Event handler for choice selection
    const choiceSelect = (event) => {
        // Get the ID of the clicked element
        let id = event.target.closest('.choice').id;
        
        // Update the selected option in the state
        setSelectedOption(id);

        // console.log(individualAccountChoiceRef);
        // console.log(pageAccountChoiceRef);
        console.log(id);

        if(id == 'individualAccountChoice'){
            if(individualAccountChoice.classList.contains('active')){
                individualAccountChoice.classList.remove('active');
            }

            else{
                individualAccountChoice.classList.add('active');
                pageAccountChoice.classList.remove('active');
            }
        } 

        else if(id == 'pageAccountChoice'){
            
            if(pageAccountChoice.classList.contains('active')){
                pageAccountChoice.classList.remove('active');
            }

            else{
            pageAccountChoice.classList.add('active');
            individualAccountChoice.classList.remove('active');
            }
        }

        //Disables the go button if user deselects both choices...
        if(!individualAccountChoice.classList.contains('active') && !pageAccountChoice.classList.contains('active')){
            id = false;
        }

        //To return the choice to the parent component...
        setSelected(id);
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
                <div className = "choice" id="individualAccountChoice" ref = {individualAccountChoiceRef} onClick = {choiceSelect}>
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
                <div className = "choice" id="pageAccountChoice" ref={pageAccountChoiceRef} onClick = {choiceSelect}>
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