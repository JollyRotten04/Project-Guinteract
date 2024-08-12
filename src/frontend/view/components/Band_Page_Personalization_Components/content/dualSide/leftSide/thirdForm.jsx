import { useRef } from "react";
import "./thirdForm.css";

const ThirdPage = () => {

    // sample output from server
    const output = [
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Red Rangers",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "White Stuff",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Black Panthers",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "The Acers",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "jdscsd",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        }
        
    ];

    let clicked = [];

    const choicesIndex = useRef(null);
    
    const addClicked = (index, choicesIndex) => {
        choicesIndex.current.styles.backgroundColor = "gray";
        clicked.push(output[index]);
    }

    return (
        <div>
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
                                    <button id={band.bandName} key={index} ref={choicesIndex} onClick={() => {addClicked(index, choicesIndex)}} >follow</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;