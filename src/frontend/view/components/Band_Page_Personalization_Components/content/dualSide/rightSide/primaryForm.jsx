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
        }

        else if(pageMark == 2){
            step2.current?.classList.add('active');
        }

        else if(pageMark == 3){
            step3.current?.classList.add('active');
        }

        else if(pageMark == 4){
            step4.current?.classList.add('active');
        }
    }, [pageMark]);

    return (
        <div className="stepsContainer">
            <div className="threeButtons">
            <div id="step1" ref={step1} className="step">Step 1</div>
                <div id="step2" ref={step2} className="step">Step 2</div>
                <div id="step3" ref={step3} className="step">Step 3</div>
                <div id="step4" ref={step4} className="step">Step 4</div>
            </div>
        </div>
    );
}

ThreeStepButtons.propTypes = {
    pageMark: PropTypes.number.isRequired,
}

export default ThreeStepButtons;