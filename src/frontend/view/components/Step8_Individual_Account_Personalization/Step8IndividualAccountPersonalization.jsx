import React, { useRef, useState, useEffect } from 'react';
import './Step8IndividualAccountPersonalizationStyles.css';

export default function Step8IndividualAccountPersonalization() {
    const accountRefs = useRef([]); // Initialize an array to store refs
    const [addedCounter, setAddedCounter] = useState(0); // Use useState for addedCounter
    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

    const handleAccountClick = (event, index) => {
        const buttonClassList = event.currentTarget.classList;

        if (!buttonClassList.contains('clicked')) {
            buttonClassList.add('clicked');
            setAddedCounter((prevCounter) => prevCounter + 1); // Increment the counter
        } else {
            buttonClassList.remove('clicked');
            setAddedCounter((prevCounter) => prevCounter - 1); // Decrement the counter
        }
    };

    useEffect(() => {
        const updateOrientation = () => {
            setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
        };

        // Add event listener to track orientation changes
        window.addEventListener('resize', updateOrientation);

        return () => {
            window.removeEventListener('resize', updateOrientation);
        };
    }, []);

    return (
        <div className="step8IndividualAccountPersonalization">
            <p id="mainLabel">Lastly, please follow at least 5 other accounts...</p>

            <div id="innerContainer">
                <div id="accountsContainer">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="account"
                            ref={(el) => (accountRefs.current[index] = el)} // Assign the ref
                        >
                            {/* Image Container */}
                            <div id="imgContainer">
                                <img
                                    src="../../assets/GuitarDefaultIcon.png"
                                    alt=""
                                    id="guitarDefaultIcon"
                                    className="profileIcon"
                                />
                            </div>

                            <div id="rightContainer">
                            {isPortrait ? (
                                <div id="portraitMode">
                                    {/* Account Name */}
                                    <p className="accountName">Placeholder {index + 1}</p>

                                    {/* Number of Friends */}
                                    <p className="friendCount">5m friends</p>
                                </div>
                            ) : (
                                <>
                                    {/* Account Name */}
                                    <p className="accountName">Placeholder {index + 1}</p>

                                    {/* Number of Friends */}
                                    <p className="friendCount">5m friends</p>
                                </>
                            )}

                                {/* Button Container */}
                                <button
                                    className="addFriendButton"
                                    onClick={(event) => handleAccountClick(event, index)} // Pass event and index
                                >
                                    ADD FRIEND
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
