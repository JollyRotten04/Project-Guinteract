import Header from "../../components/Band_Page_Personalization_Components/header/header.jsx"
import BandNameYear from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/primaryform.jsx";
import ThreeStepButtons from "../../components/Band_Page_Personalization_Components/content/dualSide/rightSide/primaryForm.jsx";
import TwoButtons from "../../components/Band_Page_Personalization_Components/footer/primaryForm.jsx";
import PictureSelection from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/secondaryForm.jsx";
import ThirdPage from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/thirdForm.jsx";
import Camera from "../../components/Band_Page_Personalization_Components/content/singular/cameraSection.jsx";
import {useState, useEffect, useRef, createContext} from "react";
import "./BandPagePersonalization.css";

export const secondaryPageContext = createContext();

export const cameraContext = createContext();



const BandPagePersonalizationPage = () => {

    const [primaryPage, setPrimaryPage] = useState(1);
    const [cameraVisible, setCameraVisibility] = useState(false);
    const [cameraSrc, setCameraSrc] = useState("../../../../../assets/Screenshot (46)(1)(1).png");
    const [primPageStatus, setPrimaryPageStatus] = useState(false);
    const [closePage, setClosePage] = useState(false);

    const clickedRef = useRef([]);

    const [inputs, setInput] = useState({
        firstPage: null,
        secondPage: null,
        thirdPage: []
    });

    useEffect(() => {
        console.log("ClosePage" + closePage)
        if(primaryPage == 1){
            if (closePage) {
                console.log("status" + primPageStatus)
                setPrimaryPage(primaryPage + 1);
                setClosePage(prev => !prev);
                setPrimaryPageStatus(prev => !prev);
                console.log(inputs);
            }
        } else if(primaryPage == 2) {
            if (closePage) {
                console.log("status for page 2" + primPageStatus)
                setPrimaryPage(primaryPage + 1);
                setClosePage(prev => !prev);
                setPrimaryPageStatus(prev => !prev);
                console.log(inputs);
            }
        } else if(primaryPage == 3) {
            if (closePage) {
                console.log("status for page 3" + primPageStatus)
                console.log("send to database", inputs);
                setClosePage(prev => !prev);
                setPrimaryPageStatus(prev => !prev);
                console.log(inputs);
            }
        }
    }, [closePage, primPageStatus, primaryPage, inputs])

    const pageChangers = {
        nextPage: () => {
            setPrimaryPageStatus(prev => !prev);
        },
        backPage: () => {
            setPrimaryPage(primaryPage - 1);
        }
    };

    return (
        <div className="BandPagePersonalization">
            <Header />
            <div className="contents">
                {primaryPage == 1 &&    <BandNameYear 
                                            setInputs={setInput} 
                                            status={primPageStatus} 
                                            closePage={setClosePage} 
                                            setPrimaryPageStatus={setPrimaryPageStatus} 
                                            inputs={inputs} 
                                        />}
                {primaryPage == 2 && 
                    <secondaryPageContext.Provider value={
                        {
                            setCameraVisibility, 
                            cameraVisible, 
                            cameraSrc,
                            setClosePage, 
                            setCameraSrc
                        }
                    }>
                        <PictureSelection 
                            primPageStatus={primPageStatus} 
                            setPrimaryPageStatus={setPrimaryPageStatus} 
                            setInput={setInput}
                        />
                    </secondaryPageContext.Provider>
                }
                {primaryPage == 3 &&    <ThirdPage 
                                            setInput={setInput} 
                                            primPageStatus={primPageStatus} 
                                            setClosePage={setClosePage} 
                                            setPrimaryPageStatus={setPrimaryPageStatus} 
                                            clickedRef={clickedRef} 
                                        />}
                <ThreeStepButtons 
                    pageMark={primaryPage} 
                    setPrimaryPageStatus={setPrimaryPageStatus} 
                />
                {cameraVisible == true && 
                    <cameraContext.Provider 
                        value={{setCameraVisibility, 
                        cameraVisible, setCameraSrc}
                    } >
                        <Camera setInput={setInput} />
                    </cameraContext.Provider>
                }
            </div>
            <TwoButtons 
                changers={pageChangers} 
                pageMark={primaryPage} 
                submitInput={setPrimaryPageStatus} 
            />
        </div>
    );
}

export default BandPagePersonalizationPage;