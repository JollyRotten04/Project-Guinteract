import Header from "../../components/Band_Page_Personalization_Components/header/header.jsx"
import BandNameYear from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/primaryform.jsx";
import ThreeStepButtons from "../../components/Band_Page_Personalization_Components/content/dualSide/rightSide/primaryForm.jsx";
import TwoButtons from "../../components/Band_Page_Personalization_Components/footer/primaryForm.jsx";
import "./BandPagePersonalization.css";

const BandPagePersonalizationPage = () => {
    return (
        <div className="BandPagePersonalization">
            <Header />
            <div className="contents">
                <BandNameYear />
                <ThreeStepButtons />
            </div>
            <TwoButtons />
        </div>
    );
}

export default BandPagePersonalizationPage;