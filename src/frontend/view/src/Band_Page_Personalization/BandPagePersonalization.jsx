import Header from "../../components/Band_Page_Personalization_Components/header/header.jsx"
import BandNameYear from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/primaryform.jsx";
import ThreeStepButtons from "../../components/Band_Page_Personalization_Components/content/dualSide/rightSide/primaryForm.jsx";
import TwoButtons from "../../components/Band_Page_Personalization_Components/footer/primaryForm.jsx";
import PictureSelection from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/secondaryForm.jsx";
import ThirdPage from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/thirdForm.jsx";
import Camera from "../../components/Band_Page_Personalization_Components/content/singular/cameraSection.jsx";
import "./BandPagePersonalization.css";

import { useState } from "react";

const BandPagePersonalizationPage = () => {

    const [primaryPage, setPrimaryPage] = useState(1);
    const [cameraVisible, setCameraVisibility] = useState(false);
    const [cameraSrc, setCameraSrc] = useState("../../../../../assets/Screenshot (46)(1)(1).png");

    const pageChangers = {
        nextPage: () => {
            if(primaryPage != 3)
                setPrimaryPage(primaryPage + 1);
        },
        backPage: () => {
                setPrimaryPage(primaryPage - 1);
        }
    };

    return (
        <div className="BandPagePersonalization">
            <Header />
            <div className="contents">
                {primaryPage == 1 && <BandNameYear />}
                {primaryPage == 2 && <PictureSelection cameraVisibility={setCameraVisibility} camVisibilityVar={cameraVisible} profilePicture={cameraSrc}/>}
                {primaryPage == 3 && <ThirdPage />}
                <ThreeStepButtons pageMark={primaryPage} />
                {cameraVisible == true && <Camera visibility={setCameraVisibility} camVisibilityVar={cameraVisible} profilePicture={setCameraSrc} />}
            </div>
            <TwoButtons changers={pageChangers} pageMark={primaryPage} />
        </div>
    );
}

export default BandPagePersonalizationPage;