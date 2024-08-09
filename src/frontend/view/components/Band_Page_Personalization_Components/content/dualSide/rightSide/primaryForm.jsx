import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import "./primaryForm.css";

const ThreeStepButtons = ({pageMark}) => {
    const step1 = useRef(null);
    const step2 = useRef(null);
    const step3 = useRef(null);

    useEffect(() => {
        console.log(pageMark);
        if(pageMark == 1){
            step1.current.style.backgroundColor = "rgb(255, 119, 0)";
            step2.current.style.backgroundColor = "gray";
            step3.current.style.backgroundColor = "gray";
        }
        else if(pageMark == 2){
            step1.current.style.backgroundColor = "gray";
            step2.current.style.backgroundColor = "rgb(255, 119, 0)";
            step3.current.style.backgroundColor = "gray";
        }
        else{
            step1.current.style.backgroundColor = "gray";
            step2.current.style.backgroundColor = "gray";
            step3.current.style.backgroundColor = "rgb(255, 119, 0)";
        }
    }, [pageMark]);

    return (
        <div className="threeButtons">
            <button id="step1" ref={step1} className="step">Step 1</button>
            <button id="step2" ref={step2} className="step">Step 2</button>
            <button id="step3" ref={step3} className="step">Step 3</button>
        </div>
    );
}

ThreeStepButtons.propTypes = {
    pageMark: PropTypes.number.isRequired,
}

export default ThreeStepButtons;