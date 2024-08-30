import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import "./primaryForm.css";

const TwoButtons = ({changers, pageMark, allFilledStep2, hasUserAgreed, closePage}) => {
    const btn1 = useRef(null);
    const btn2 = useRef(null);

    //Enables the nextButton if allFilledStep1 is set to true...
    useEffect(() => {
        // For first page...
        if(pageMark == 1 && hasUserAgreed) {
            if(btn2.current){
                btn2.current.classList.add('active');
            }
        }

        else if(pageMark == 1 && !hasUserAgreed){
            if(btn2.current){
                btn2.current.classList.remove('active');
            }
        }

        // For second page...
        if(pageMark == 2 && allFilledStep2) {
            if(btn2.current){
                btn2.current.classList.add('active');
            }
        }
        else if(pageMark == 2 && !allFilledStep2){
            if(btn2.current){
                btn2.current.classList.remove('active');
            }
        }

        // For second page...
    }, [hasUserAgreed, allFilledStep2]);    

    const {nextPage, backPage} = changers;

    return (
        <div className="mainFooterContainer">
            <div className="buttonContainer">    
                <button className = "button" id="btn1" ref={btn1} onClick={() => {backPage()}}>Back</button>
                <button className = "button" id="btn2" ref={btn2} onClick={() => {nextPage(), closePage(true)}}>Next</button>
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