import { useRef, useContext, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {secondaryPageContext} from "../../../../../src/Band_Page_Personalization/BandPagePersonalization.jsx";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../singular/customToast.css";
import "./secondaryForm.css";

const PictureSelection = ({primPageStatus, setPrimaryPageStatus, setInput}) => {
    const fileUpload = useRef(null);
    const imgContainer = useRef(null);

    const { 
        setCameraVisibility, 
        cameraVisible, 
        cameraSrc, 
        setClosePage, 
        setCameraSrc 
    } = useContext(secondaryPageContext);

    let selectedFileUrl;


    const fetchPhoto = useCallback(() => {
        if(cameraSrc != "../../../../../assets/Screenshot (46)(1)(1).png"){
            console.log("Adjust");
            setInput(prev => ({
                ...prev,
                secondPage: cameraSrc
            }))
            setClosePage(prev => !prev);
            console.log("Adjusted");
        } else {
            toast.error("Please provide an image for the camera!");

            setPrimaryPageStatus(prev => !prev);
        }
    }, [cameraSrc, setClosePage, setPrimaryPageStatus, setInput]);

    useEffect(() => {
        if(primPageStatus){
            fetchPhoto();
        }
    }, [primPageStatus, fetchPhoto]);

    console.log(cameraVisible);

    // need to read all the fileupload to trace what will happen to the button after clicking it

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

                setCameraSrc(prev => prev = selectedFileUrl);

                console.log(cameraSrc)

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
            <ToastContainer 
                position="top-center"
                toastClassName="custom-toast" // Apply custom styles
                bodyClassName="custom-toast-body" // Apply custom styles to body
            />
            <div>
                
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
    setPrimaryPageStatus: PropTypes.func.isRequired,
    setInput: PropTypes.func.isRequired,
};

export default PictureSelection;