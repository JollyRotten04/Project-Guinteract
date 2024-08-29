import PropTypes from "prop-types";
import "./imagePreview.css";

const PrevImage = ({
    setUserInput, 
    prevImage,
    setPrevVisibility,
    setAppearance
}) => {
    

    const setPicture = () => {
        console.log(prevImage);
        setUserInput((prev) => ({
            ...prev,
            step7: prevImage
        }));

        setPrevVisibility(false);
        setAppearance(false);
    }

    const closeCamera = () => {
        setPrevVisibility(prev => !prev);
    }

    return (
        <div>
            <div className="mainOuterContainer">
                <div className="picContainer">
                    <img className="photo" src={prevImage} />
                </div>
                <img className="take" onClick={() => {setPicture()}} src="../../../../assets/chek.png" />
                <img className="close" onClick={() => {closeCamera()}} src="../../../../assets/eks.png" />
            </div>
        </div>
    );
}

PrevImage.propTypes = {
    setUserInput: PropTypes.func.isRequired,
    prevImage: PropTypes.string.isRequired,
    setPrevVisibility: PropTypes.func.isRequired,
    setAppearance: PropTypes.func.isRequired,
};

export default PrevImage;