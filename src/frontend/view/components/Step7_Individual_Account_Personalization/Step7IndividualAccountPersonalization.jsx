import './Step7IndividualAccountPersonalizationStyles.css';
export default function Step7IndividualAccountPersonalization(){
    return(
        <div className="step7IndividualAccountPersonalization">

            {/* Main Label */}
            <p id="mainLabel">Next, select a profile picture</p>

            {/* Main Container */}
            <div id="mainContainer">

                {/* Left Inner Container */}
                <div id="leftInnerContainer">
                    <div id="imgContainer"></div>
                </div>

                {/* Right Inner Container */}
                <div id="rightInnerContainer">

                    {/* Take Picture Button */}
                    <div id="takePictureButtonContainer">
                        <p id="takePictureLabel">Take Picture</p>
                    </div>

                    {/* Select From Gallery Button */}
                    <div id="selectGalleryButtonContainer">
                        <p id="selectGalleryLabel">Select from Gallery</p>
                    </div>
                </div>
            </div>

        </div>
    );
}