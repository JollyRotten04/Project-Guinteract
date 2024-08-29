import { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import "../Band_Page_Personalization_Components/content/singular/customToast.css";
import "./cameraPopUp.css";
import PrevImage from "./imagePreview.jsx";

const Camera = ({ setAppearance, setUserInput }) => {
    
    const camera = useRef(null);
    const [prevImage, setPrevImage] = useState("../../../../assets/Screenshot (48).png");
    const [ seePrev, setPrevVisibility ] = useState(false);

    // captures the image
    const capture = useCallback(async () => {
        let imageSrc = camera.current.getScreenshot();

        // flip the image permanently
        imageSrc = await flipImage(imageSrc);

        // shows poputp notification that shows image successfully captured
        toast.success("Image successflly captured!");
        setPrevImage(imageSrc);
    }, [camera]);

    // ensures that these is an image in the prev small picture before pregviewing the captured image
    const viewImage = () => {
        if(prevImage != "../../../../assets/Screenshot (48).png")
            setPrevVisibility(!seePrev);
        else
            toast.error("Picture not present!");
    }

    // flips the captured image permanently in order to not capture the mirrored image
    const flipImage = (imageSrc) => {
        return new Promise((resolve) => {
            const image = new Image();
            image.src = imageSrc;

            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Set canvas size to match the image
                canvas.width = image.width;
                canvas.height = image.height;

                // Flip the context horizontally
                ctx.scale(-1, 1);
                ctx.drawImage(image, -image.width, 0);

                // Resolve the promise with the flipped image data URL
                resolve(canvas.toDataURL());
            };
        });
    }

    return(
        <div>
            <ToastContainer 
                position="top-center"
                toastClassName="custom-toast" // Apply custom styles
                bodyClassName="custom-toast-body" // Apply custom styles to body
            />
            {seePrev && 
                <PrevImage 
                    setUserInput={setUserInput} 
                    prevImage={prevImage}
                    setPrevVisibility={setPrevVisibility}
                    setAppearance={setAppearance}
                />}
            {!seePrev && 
                <div className="cameraContainer">
                    <Webcam
                        id="camera"
                        audio={false}
                        ref={camera}
                        screenshotFormat="image/jpeg"
                        width="77vw"
                        videoConstraints={{
                            width: 1280,
                            height: 720,
                            facingMode: "user",
                        }}
                        style={{ transform: "scaleX(-1)" }}
                    />
                    <img className="closeButton" onClick={() => {setAppearance(prev => !prev)}} src="../../../../assets/xred.png" />
                    <img className="cameraButton" onClick={() => {capture()}} src="../../../../assets/Screenshot (47).png" />
                    <img className="imgPrev" id="imgPrev" onClick={() => {viewImage()}} src={prevImage} />
                </div>
            }
        </div>
    );
}

Camera.propTypes = {
    setAppearance: PropTypes.func.isRequired,
    setUserInput: PropTypes.func.isRequired,
    userInput: PropTypes.string.isRequired,
};

export default Camera;