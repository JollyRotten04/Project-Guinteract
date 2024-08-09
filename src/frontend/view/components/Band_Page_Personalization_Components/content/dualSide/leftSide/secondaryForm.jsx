import { useRef, useState } from "react";
import "./secondaryForm.css";

const PictureSelection = () => {
    const fileUpload = useRef(null);
    const imgContainer = useRef(null);
    const [selectedFileURL, setSelectedFileURL] = useState(null);

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
                setSelectedFileURL(URL.createObjectURL(file));
                console.log(selectedFileURL);
                fileUpload.current.src = selectedFileURL;

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

    return (
        <div>
            <div>
                <h3>Next, select a profile picture</h3>
                
                <div className="innerContainer">
                    <div className="imgContainer" id="imgContainer" ref={imgContainer}>
                        <img src="../../../../../assets/Screenshot (46)(1)(1).png" id="profileImg" ref={fileUpload}/>
                    </div>
                    
                    <div className="selection">
                        <button id="capture">Take Picture</button>
                        <button id="fileUpload" onClick={() => {uploadFile()}} >Select from Gallery</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PictureSelection;