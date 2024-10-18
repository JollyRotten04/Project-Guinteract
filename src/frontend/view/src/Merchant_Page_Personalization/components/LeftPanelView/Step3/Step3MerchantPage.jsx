import './Step3MerchantPageStyles.css';
export default function Step3MerchantPage(){
    return(
        <div className="step3MerchantPage">
            
            {/* Main Label */}
            <p id="mainLabel">
                Next, please select a profile picture
            </p>

            {/* Bottom Container */}
            <div id="bottomContainer">

                {/* Image Container */}
                <div id="profileContainer">
                    <div id="imgContainer">
                        
                        {/* Add dynamic img */}
                        <img src="../../../../../assets/Screenshot (46)(1)(1).png" alt="" />
                    </div>
                </div>

                <div id="buttonContainer">

                    {/* Take photo button */}
                    <button id="takePhoto">Take Picture</button>

                    {/* Select from gallery button */}
                    <button id="selectFromGallery">Select from Gallery</button>
                </div>
            </div>
        </div>
    );
}