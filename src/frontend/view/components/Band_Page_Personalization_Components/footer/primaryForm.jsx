import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import "./primaryForm.css";
import Steps from "../content/dualSide/rightSide/primaryForm";

const TwoButtons = ({changers, pageMark, allFilledStep2, hasUserAgreed, closePage, userFollowedEnough}) => {
    const btn1 = useRef(null);
    const btn2 = useRef(null);

    //Enables the nextButton if allFilledStep1 is set to true...
    useEffect(() => {
        // console.log("pageMark: ", + pageMark);
        // console.log("userFollowedEnough: ", userFollowedEnough);
        console.log("pageMark: ", + pageMark);
        if((pageMark == 1 && hasUserAgreed) || (pageMark == 2 && allFilledStep2) || (pageMark == 3) || (pageMark == 4 && userFollowedEnough)) {
            if(btn2.current){
                btn2.current.classList.add('active');
            }
        }

        else{
            if(btn2.current){
                btn2.current.classList.remove('active');
            }
        }

        //Enabling the back button...
        if((pageMark == 2) || (pageMark == 3) || (pageMark == 4)){
            if(btn1.current){
                btn1.current.classList.add('active');
            }
        }

        //If page 1...
        if(pageMark == 1){
            if(btn1.current){
                btn1.current.classList.remove('active');
            }
        }

        // For second page...
    }, [pageMark, hasUserAgreed, allFilledStep2, userFollowedEnough]);    

    const {nextPage, backPage} = changers;

    return (
        <div className="mainFooterContainer">
            <div className="buttonContainer">    
                <button className = "button" id="btn1" ref={btn1} onClick={() => {backPage()}}>BACK</button>

                    <div className="portraitSteps">
                        <Steps></Steps>
                    </div>

                <button className = "button" id="btn2" ref={btn2} onClick={() => {nextPage(), closePage(true)}}>NEXT</button>
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