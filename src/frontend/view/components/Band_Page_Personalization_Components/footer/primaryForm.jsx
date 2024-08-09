import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import "./primaryForm.css";

const TwoButtons = ({changers, pageMark}) => {
    const btn1 = useRef(null);
    const btn2 = useRef(null);

    useEffect(() => {
        if(pageMark == 1){
            btn1.current.style.backgroundColor = "rgb(153, 51, 0)"; // Darker orange
            btn1.current.disabled = true; // Disable the button
            btn1.current.style.cursor = "not-allowed"; // Change cursor to indicate non-clickable
            btn1.current.style.color = "gray";
        }
        else{
            btn1.current.style.backgroundColor = "rgb(255, 89, 0)"; // Regular orange
            btn1.current.disabled = false; // Enable the button
            btn1.current.style.cursor = "pointer"; // Default cursor for clickable
            btn1.current.style.color = "white";
        }
    }, [pageMark]);    

    const {nextPage, backPage} = changers;

    return (
        <div className="mainFooterContainer">
            <div className="buttonContainer">    
                <button id="btn1" ref={btn1} onClick={() => {backPage()}}>Back</button>
                <button id="btn2" ref={btn2} onClick={() => {nextPage()}}>Next</button>
            </div>
        </div>
    );
}

TwoButtons.propTypes = {
    changers: PropTypes.shape({
        nextPage: PropTypes.func.isRequired,
        backPage: PropTypes.func.isRequired,
    }).isRequired,
    pageMark: PropTypes.number.isRequired,
};

export default TwoButtons;