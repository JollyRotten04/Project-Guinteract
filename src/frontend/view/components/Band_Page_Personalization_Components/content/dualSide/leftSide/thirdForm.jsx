import { useEffect, useCallback, useState} from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../singular/customToast.css";
import "./thirdForm.css";

const ThirdPage = ({ setInput, primPageStatus, setClosePage, setPrimaryPageStatus, clickedRef, userFollowedEnough }) => {
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
    const [followedPages, setFollowedPages] = useState(0);

    const addClicked = (index, e) => {
        // Change the background color of the clicked button
        if(e.target.textContent == "Follow"){
            e.target.style.backgroundColor = "gray";
            e.target.textContent = "Unfollow";
            setFollowedPages(followedPages + 1);

            // Add the clicked band to the clicked list if not already added
            const band = output[index];
            if (!clickedRef.current.some(b => b.bandName === band.bandName)) {
                clickedRef.current.push(band);
            }

            setInput(prev => ({
                ...prev,
                thirdPage: {
                    clicked: clickedRef.current
                }
            }));

            console.log(clickedRef.current);
        } else{
            e.target.style.backgroundColor = "rgb(255, 119, 0)";
            e.target.textContent = "Follow";
            setFollowedPages(followedPages - 1);

            // Remove the clicked band from the clicked list if it's already added
            const band = output[index];
            clickedRef.current = clickedRef.current.filter(b => b.bandName!== band.bandName);

            setInput(prev => ({
                ...prev,
                thirdPage: {
                    clicked: clickedRef.current
                }
            }));

            console.log(clickedRef.current);
        }
    };

    const addFollowedPage = useCallback(() => {
        console.log("Adjust");
            if(clickedRef.current.length != 0){
                setInput(prev => ({
                    ...prev,
                    thirdPage: {
                        clicked: clickedRef.current
                    }
                }));
                setClosePage(prev => !prev);
                console.log("Adjusted");
            } else {
                toast.error("Please follow page!");
                setPrimaryPageStatus(prev =>!prev);
            }
    }, [setInput, setClosePage, setPrimaryPageStatus]);

    useEffect(() => {
        console.log("status" + clickedRef.current);
        
        if (primPageStatus) {
            addFollowedPage();
        }
    }, [primPageStatus, addFollowedPage]);
    
    //Dynamically updates the followedEnough counter...
    useEffect(() => {
        if(followedPages >= 5){
            userFollowedEnough(true);
        }
    },[followedPages]);

    return (
        <div className = "thirdForm">
            <ToastContainer 
                position="top-center"
                toastClassName="custom-toast" // Apply custom styles
                bodyClassName="custom-toast-body" // Apply custom styles to body
            />
            <div className="body">
                <div id="mainContentContainer">
                    <div className="scrollBar-div">
                        {output.map((band, index) => {
                            
                            let isFollowed =  Array.isArray(clickedRef.current) && clickedRef.current.some(obj => obj.bandName != undefined && obj.bandName === band.bandName);
                            
                            return (
                                
                                <div key={index} className="contentContainer">
                                    <img className="bandProfile" src={band.profile} />
                                    <div className="content" >
                                        <div id="portraitView">
                                            <p className="bandName">{band.bandName}</p>
                                            <p id = "followerCount">{band.follooers + " followers"}</p>
                                        </div>
                                        <div id="landscapeView">
                                            <p className="bandName">{band.bandName}</p>
                                            <p id = "followerCount">{band.follooers + " followers"}</p>
                                        </div>
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
        </div>
    );
}

ThirdPage.propTypes = {
    setInput: PropTypes.func.isRequired,
    primPageStatus: PropTypes.bool.isRequired,
    setClosePage: PropTypes.func.isRequired,
    setPrimaryPageStatus: PropTypes.func.isRequired,
    clickedRef: PropTypes.shape({
        current: PropTypes.array.isRequired,
    }).isRequired,
    userFollowedEnough: PropTypes.func.isRequired,
};

export default ThirdPage;