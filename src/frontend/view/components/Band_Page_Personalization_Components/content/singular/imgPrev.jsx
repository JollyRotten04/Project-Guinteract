import PropTypes from "prop-types";
import "./imgPrev.css";

const ImgPrev = ({src, setProfileSrc, visible, cameraVisibility, toggle}) => {

    const setProfile = () => {
        console.log(src);
        setProfileSrc(src)
        visible();
        cameraVisibility(!toggle);
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
    setProfileSrc: PropTypes.func.isRequired,
    visible: PropTypes.func.isRequired,
    cameraVisibility: PropTypes.func.isRequired, 
    toggle: PropTypes.bool.isRequired,
};

export default ImgPrev;