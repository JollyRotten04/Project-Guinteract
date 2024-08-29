import { useEffect } from "react";
import PropTypes from "prop-types";
import "../Band_Page_Personalization_Components/content/singular/customToast.css";
import "./Step8IndividualAccountPersonalizationStyles.css";

const EightPage = ({ hadPicked, setUserInput, userInput }) => {
    // Sample output from server
    const output = [
        { bandName: "Black Veil Brides", follooers: "8.8m", profile: "../../../../../assets/Screenshot (46)(1)(1).png" },
        { bandName: "Red Rangers", follooers: "8.8m", profile: "../../../../../assets/Screenshot (46)(1)(1).png" },
        { bandName: "White Stuff", follooers: "8.8m", profile: "../../../../../assets/Screenshot (46)(1)(1).png" },
        { bandName: "Black Panthers", follooers: "8.8m", profile: "../../../../../assets/Screenshot (46)(1)(1).png" },
        { bandName: "The Acers", follooers: "8.8m", profile: "../../../../../assets/Screenshot (46)(1)(1).png" },
        { bandName: "jdscsd", follooers: "8.8m", profile: "../../../../../assets/Screenshot (46)(1)(1).png" },
        { bandName: "Black Veil Brides", follooers: "8.8m", profile: "../../../../../assets/Screenshot (46)(1)(1).png" },
    ];

    useEffect(() => {
        console.log(userInput);

        if(userInput.length >= 5)
            hadPicked(true);
        else
            hadPicked(false);
    }, [userInput, hadPicked]);

    const addClicked = (index, e) => {
        // Change the background color of the clicked button
        if(e.target.textContent == "Follow"){
            e.target.style.backgroundColor = "gray";
            e.target.textContent = "Unfollow";

            // Add the clicked band to the clicked list if not already added
            const band = output[index];
            if (!userInput.some(b => b.bandName === band.bandName)) {
                setUserInput((prev) => ({
                    ...prev,
                    step8: [...prev.step8, band]
                }));
            }

            console.log(userInput);
        } else{
            e.target.style.backgroundColor = "rgb(255, 119, 0)";
            e.target.textContent = "Follow";

            // Remove the clicked band from the clicked list if it's already added
            const band = output[index];

            setUserInput((prev) => ({
                ...prev,
                step8: prev.step8.filter(b => b.bandName!== band.bandName)
            }));
        }
    };

    return (
        <div className = "eightForm">
            <h3>Lastly, please follow at least five other pages</h3>
            <div className="body">
                <div className="scrollBar-div">
                    {output.map((band, index) => {
                        
                        let isFollowed =  Array.isArray(userInput) && userInput.some(obj => obj.bandName != undefined && obj.bandName === band.bandName);
                        
                        return (
                            
                            <div key={index} className="innerContentContainer">
                                <img className="bandProfile" src={band.profile} />
                                <div className="content" >
                                    <h4 className="bandName">{band.bandName}</h4>
                                    <p>{band.follooers + "followers"}</p>
                                    <button 
                                        key={index} 
                                        onClick={(e) => {addClicked(index, e)}} 
                                        style={{ backgroundColor: isFollowed ? "gray" : "rgb(255, 119, 0)" }}
                                    >
                                        {isFollowed? "Unfollow" : "Follow"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

EightPage.propTypes = {
    hadPicked: PropTypes.func.isRequired,
    setUserInput: PropTypes.func.isRequired,
    userInput: PropTypes.array.isRequired,
};

export default EightPage;