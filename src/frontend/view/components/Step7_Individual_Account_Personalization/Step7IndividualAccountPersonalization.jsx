import './Step7IndividualAccountPersonalizationStyles.css';
import PropTypes from "prop-types";
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import "../Band_Page_Personalization_Components/content/singular/customToast.css";
import "./Step7IndividualAccountPersonalizationStyles.css";

export default function Step7IndividualAccountPersonalization({
    hasTaken, 
    setUserInput, 
    userInput,
    setCameraVisibility
}){

    let selectedFileUrl = "";

    useEffect(() => {
        if(userInput != "../../assets/Screenshot (46)(1)(1).png"){
            toast.success("Photo uploaded successfully!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
            hasTaken(true);
        }
    }, [userInput, hasTaken]);
    
    // for upening a img file in the file explorer
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
                // set the step7 to camera src
                console.log(selectedFileUrl);
                setUserInput((prev) => ({
                    ...prev,
                    step7: selectedFileUrl
                }));
            }
        });
    }
    
    return (
        <div className = "seventhForm">
            <ToastContainer 
                position="top-center"
                toastClassName="custom-toast" 
                bodyClassName="custom-toast-body" 
            />
            <div>
                <h3>Next, select a profile picture</h3>
                
                <div className="innerContainer">
                    <div className="pictureContainer" id="imgContainer">
                        <img src={userInput} id="profilePicture" />
                    </div>
                    
                    <div className="choices">
                        <button id="capture" onClick={() => {setCameraVisibility(prev => !prev)}}>Take Picture</button>
                        
                        <button id="fileUpload" onClick={() => {uploadFile()}} >Select from Gallery</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Step7IndividualAccountPersonalization.propTypes = {
    hasTaken: PropTypes.func.isRequired,
    setUserInput: PropTypes.func.isRequired,
    userInput: PropTypes.string.isRequired,
    setCameraVisibility: PropTypes.func.isRequired,
};