import PropTypes from "prop-types";
import {useContext} from "react";
import {cameraContext} from "../../../../src/Band_Page_Personalization/BandPagePersonalization.jsx";
import "./imgPrev.css";

const ImgPrev = ({src, visible, setCameraSrc}) => {
    const {setCameraVisibility, cameraVisible} = useContext(cameraContext);
    const setProfile = () => {
        console.log(src);
        setCameraSrc(src);
        visible();
        setCameraVisibility(!cameraVisible);
    } 

    return (
        <div className = "imgPreview">
            <div className="overlay"></div>
            <div className="allContainer">
                <div className="imageContainer">
                    <img className="photo" src={src} />
                </div>

                <div id="buttonContainer">
                    <button className="take" onClick={() => {setProfile()}} >Confirm</button >
                    <button className="close" onClick={() => {visible()}} >Retake</button >
                </div>
            </div>
        </div>
    );
}

ImgPrev.propTypes = {
    src: PropTypes.string.isRequired,
    visible: PropTypes.func.isRequired,
    setCameraSrc: PropTypes.func.isRequired,
};

export default ImgPrev;