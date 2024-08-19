import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./thirdForm.css";

const ThirdPage = ({ setInput, primPageStatus, setClosePage }) => {
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

    const clickedRef = useRef([]);

    const addClicked = (index, e) => {
        // Change the background color of the clicked button
        e.target.style.backgroundColor = "gray";
        e.target.textContent = "Unfollow";

        // Add the clicked band to the clicked list if not already added
        const band = output[index];
        if (!clickedRef.current.some(b => b.bandName === band.bandName)) {
            clickedRef.current.push(band);
        }

        console.log(clickedRef.current);
    };

    useEffect(() => {
        console.log("status" + primPageStatus);
        if (primPageStatus) {
            console.log("Adjust");
            setInput(prev => ({
                ...prev,
                thirdPage: {
                    clicked: clickedRef.current
                }
            }));
            setClosePage(prev => !prev);
            console.log("Adjusted");
        }
    }, [primPageStatus, setClosePage, setInput]);

    return (
        <div className = "thirdForm">
            <h3>Lastly, please follow at least five other pages</h3>
            <div className="body">
                <div className="scrollBar-div">
                    {output.map((band, index) => {
                        return (
                            <div key={index} className="contentContainer">
                                <img className="bandProfile" src={band.profile} />
                                <div className="content" >
                                    <h4 className="bandName">{band.bandName}</h4>
                                    <p>{band.follooers + "followers"}</p>
                                    <button key={index} onClick={(e) => {addClicked(index, e)}} >follow</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

ThirdPage.propTypes = {
    setInput: PropTypes.func.isRequired,
    primPageStatus: PropTypes.bool.isRequired,
    setClosePage: PropTypes.func.isRequired,
};

export default ThirdPage;