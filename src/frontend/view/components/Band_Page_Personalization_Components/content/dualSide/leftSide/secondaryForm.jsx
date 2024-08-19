import { useRef } from "react";
import PropTypes from "prop-types";
import "./secondaryForm.css";

const PictureSelection = ({cameraVisibility, camVisibilityVar, profilePicture}) => {
    const fileUpload = useRef(null);
    const imgContainer = useRef(null);

    let selectedFileUrl;

    console.log(camVisibilityVar);

    const uploadFile = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        
        // Trigger the file input click event to open the file manager
        fileInput.click();

        // Handle the file selection
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                selectedFileUrl = URL.createObjectURL(file);
                console.log(selectedFileUrl);
                fileUpload.current.src = selectedFileUrl;
                fileUpload.current.src = selectedFileUrl;

                const fileHeight = fileUpload.current.naturalHeight;
                const fileWidth = fileUpload.current.naturalWidth;

                const containerHeight = fileUpload.containerHeight;
                const containerWidth = fileUpload.containerWidth;

                let scaleWidth = containerWidth / fileWidth;
                let scaleHeight = containerHeight / fileHeight;

                let scale = Math.max(scaleWidth, scaleHeight);

                fileUpload.style.transform = `scale(${scale})`;

                // Center the image in the container
                fileUpload.style.left = `${(containerWidth - fileWidth * scale) / 2}px`;
                fileUpload.style.top = `${(containerHeight - fileHeight * scale) / 2}px`;
            }
        });
    }

    const openCamera = () => {
        cameraVisibility(!camVisibilityVar);
    }

    return (
        <div className = "secondaryForm">
            <div>
                <h3>Next, select a profile picture</h3>
                
                <div className="innerContainer">
                    <div className="imgContainer" id="imgContainer" ref={imgContainer}>
                        <img src={profilePicture} id="profileImg" ref={fileUpload}/>
                    </div>
                    
                    <div className="selection">
                        <button id="capture" onClick={() => {openCamera()}}>Take Picture</button>
                        
                        <button id="fileUpload" onClick={() => {uploadFile()}} >Select from Gallery</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

PictureSelection.propTypes = {
    cameraVisibility: PropTypes.func.isRequired,
    camVisibilityVar: PropTypes.bool.isRequired,
    profilePicture: PropTypes.string.isRequired,
}

export default PictureSelection;