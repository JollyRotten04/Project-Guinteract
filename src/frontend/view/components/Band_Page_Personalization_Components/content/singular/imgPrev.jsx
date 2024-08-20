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
        <div>
            <div className="allContainer">
                <div className="imageContainer">
                    <img className="photo" src={src} />
                </div>
                <img className="take" onClick={() => {setProfile()}} src="../../../../assets/chek.png" />
                <img className="close" onClick={() => {visible()}} src="../../../../assets/eks.png" />
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