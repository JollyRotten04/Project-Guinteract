import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import "./primaryForm.css";

const ThreeStepButtons = ({ pageMark }) => {
    const step1 = useRef(null);
    const step2 = useRef(null);
    const step3 = useRef(null);
    const step4 = useRef(null);

    useEffect(() => {
        if(pageMark == 1){
            step1.current?.classList.add('active');
            step2.current?.classList.remove('active');
            step3.current?.classList.remove('active');
            step4.current?.classList.remove('active');
        }

        else if(pageMark == 2){
            step1.current?.classList.remove('active');
            step2.current?.classList.add('active');
            step3.current?.classList.remove('active');
            step4.current?.classList.remove('active');
        }

        else if(pageMark == 3){
            step1.current?.classList.remove('active');
            step2.current?.classList.remove('active');
            step3.current?.classList.add('active');
            step4.current?.classList.remove('active');
        }

        else if(pageMark == 4){
            step1.current?.classList.remove('active');
            step2.current?.classList.remove('active');
            step3.current?.classList.remove('active');
            step4.current?.classList.add('active');
        }
    }, [pageMark]);

    return (
        <div className="stepsContainer">
            <div className="threeButtons">
            <div id="step1" ref={step1} className="step"><p className="stepIndicator">Step 1</p></div>
                <div id="step2" ref={step2} className="step"><p className="stepIndicator">Step 2</p></div>
                <div id="step3" ref={step3} className="step"><p className="stepIndicator">Step 3</p></div>
                <div id="step4" ref={step4} className="step"><p className="stepIndicator">Step 4</p></div>
            </div>
        </div>
    );
}

ThreeStepButtons.propTypes = {
    pageMark: PropTypes.number.isRequired,
}

export default ThreeStepButtons;