import { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import ImgPrev from "./imgPrev.jsx";
import { toast, ToastContainer } from 'react-toastify';
import {useContext} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {cameraContext} from "../../../../src/Band_Page_Personalization/BandPagePersonalization.jsx";
import "./customToast.css";
import "./camerSection.css";

const Camera = () => {
    const {setCameraVisibility, cameraVisible, setCameraSrc} = useContext(cameraContext);
    const camera = useRef(null);
    const imgPrevButton = useRef(null);
    const [prevImage, setPrevImage] = useState("../../../../assets/Screenshot (48).png");
    const [ seePrev, setPrevVisibility ] = useState(false);
    const [capturedImage, setCapturedImage ] = useState(false);

    const capture = useCallback(async () => {
        let imageSrc = camera.current.getScreenshot();

        // flip the image permanently
        imageSrc = await flipImage(imageSrc);
        console.log(imageSrc)

        toast.success("Image successflly captured!");
        setPrevImage(imageSrc);
        setCapturedImage(true);
    }, [camera]);

    const viewImage = () => {
        if(prevImage != "../../../../assets/Screenshot (48).png")
            setPrevVisibility(!seePrev);
        else
            toast.error("Picture not present!");
    }

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
        <div id = "camera">
            <div className="overlay"></div>
            <ToastContainer 
                position="top-center"
                toastClassName="custom-toast" // Apply custom styles
                bodyClassName="custom-toast-body" // Apply custom styles to body
            />
            {seePrev && <ImgPrev src={prevImage} visible={viewImage} setCameraSrc={setCameraSrc} />}
            {!seePrev && (
                <div className="cameraContainer">
                    <p className="closeButton" onClick={() => {setCameraVisibility(!cameraVisible)}} >←</p>
                    <Webcam
                        id="camera"
                        audio={false}
                        ref={camera}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{
                            width: 1280,
                            height: 720,
                            facingMode: "user",
                        }}
                        style={{ transform: "scaleX(-1)" }}
                    />
                    <img className="cameraButton" onClick={() => {capture()}} src="../../../../assets/Screenshot (47).png" />
                    {capturedImage ? ( <img className="imgPrev" id="imgPrev" ref={imgPrevButton} onClick={() => {viewImage()}} src={prevImage} /> ) : null }
                </div>
            )}
        </div>
    );
}

export default Camera;