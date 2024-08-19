import { useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {secondaryPageContext} from "../../../../../src/Band_Page_Personalization/BandPagePersonalization.jsx";
import "./secondaryForm.css";

const PictureSelection = ({primPageStatus}) => {
    const fileUpload = useRef(null);
    const imgContainer = useRef(null);

    const { setCameraVisibility, cameraVisible, cameraSrc, setClosePage } = useContext(secondaryPageContext);

    let selectedFileUrl;

    useEffect(() => {
        console.log("status" + status)
        if(primPageStatus){

            console.log("Adjust");
            setClosePage(prev => !prev);
            console.log("Adjusted");
        }
    }, [primPageStatus, setClosePage])

    console.log(cameraVisible);

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
        setCameraVisibility(!cameraVisible);
    }

    return (
        <div className = "secondaryForm">
            <div>
                <h3>Next, select a profile picture</h3>
                
                <div className="innerContainer">
                    <div className="imgContainer" id="imgContainer" ref={imgContainer}>
                        <img src={cameraSrc} id="profileImg" ref={fileUpload}/>
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
    primPageStatus: PropTypes.bool.isRequired,
};

export default PictureSelection;