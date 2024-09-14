import Header from "../../components/Band_Page_Personalization_Components/header/header.jsx"
import UserTermsAndAgreementsPage from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/UserTermsAndAgreementsPage.jsx";
import BandNameYear from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/primaryform.jsx";
import ThreeStepButtons from "../../components/Band_Page_Personalization_Components/content/dualSide/rightSide/primaryForm.jsx";
import TwoButtons from "../../components/Band_Page_Personalization_Components/footer/primaryForm.jsx";
import PictureSelection from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/secondaryForm.jsx";
import ThirdPage from "../../components/Band_Page_Personalization_Components/content/dualSide/leftSide/thirdForm.jsx";
import Camera from "../../components/Band_Page_Personalization_Components/content/singular/cameraSection.jsx";
import LoadingScreen from "../../components/Loading_Screen/LoadingScreen.jsx";
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
    const [promptLabelText, setPromptLabelText] = useState('User Terms And Conditions:');


    //Flagger variables...
    const [hasUserAgreed, setUserAgreed] = useState(false);
    const [allFilledStep2, setAllFilledStep2] = useState(false);
    const [followedEnough, setFollowedEnough] = useState(false);
    const [isLoading, setIsLoading] = useState(false);  // State for loading screen

    const clickedRef = useRef([]);

    const [inputs, setInput] = useState({
        firstPage: {
            bandName: '',
            year: '',
            genre: ''
        },
        secondPage: null,
        thirdPage: []
    });

    // Setter methods...
    const step2AllFilled = (value) => {
        setAllFilledStep2(value);
    };

    const setUserConsent = (value) => {
        setUserAgreed(value);
    };

    const updateFollowedPages = (value) => {
        setFollowedEnough(value);
    };

    useEffect(() => {
        // console.log(inputs.firstPage)
        // console.log("userAgreed:" + hasUserAgreed);
        // console.log("allFilledStep2:" + allFilledStep2);
        // console.log('primaryPage: ', primaryPage);
        if(primaryPage == 1){
            if (closePage) {
                // console.log("status" + primPageStatus)
                setUserAgreed(false);
                setPrimaryPage(prev => prev + 1);
                setClosePage(false); // Reset closePage after navigation
                setPrimaryPageStatus(prev => !prev);
            }
        } else if(primaryPage == 2) {
            if (closePage) {
                setAllFilledStep2(false);
                setPrimaryPage(prev => prev + 1);
                setClosePage(false); // Reset closePage after navigation
                setPrimaryPageStatus(prev => !prev);
            }
        } else if(primaryPage == 3) {
            if (closePage) {
                // console.log("status for page 3" + primPageStatus)
                // console.log("send to database", inputs);
                setPrimaryPage(prev => prev + 1);
                setClosePage(false); // Reset closePage after navigation
                setPrimaryPageStatus(prev => !prev);
            }
        } else if(primaryPage == 4) {
            if (closePage) {
                // console.log("status for page 3" + primPageStatus)
                // console.log("send to database", inputs);
                setIsLoading(true);
                setClosePage(false); // Reset closePage after navigation
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

    useEffect(() => {
        switch (primaryPage) {
            case 1:
                setPromptLabelText('User Terms And Conditions:');
                break;
            case 2:
                setPromptLabelText('First, can you provide us some basic information about your band?');
                break;
            case 3:
                setPromptLabelText('Next, please select a profile picture');
                break;
            case 4:
                setPromptLabelText('Lastly, please follow at least five other pages');
                break;
            default:
                setPromptLabelText('');
                break;
        }
    }, [primaryPage]);    

    return (
        <div className="BandPagePersonalization">
             {isLoading ? (
                <div className="displayLoadingScreen">
                    <LoadingScreen />  {/* Render LoadingScreen based on state */}
                </div>
            ) : (
                <>
                    <Header />
                    <hr id="dividerLine" />
                    <p id="promptLabelTextPortrait" >{promptLabelText}</p>
                    <div className="contents">
                        {primaryPage === 1 && (
                            <UserTermsAndAgreementsPage
                                hasUserAgreed={setUserConsent}
                                closePage={setClosePage} 
                            />
                        )}

                        {primaryPage === 2 && (
                            <BandNameYear 
                                setInputs={setInput} 
                                status={primPageStatus} 
                                closePage={setClosePage} 
                                setPrimaryPageStatus={setPrimaryPageStatus} 
                                inputs={inputs} 
                                isAllFilled={step2AllFilled}
                            />
                        )}

                        {primaryPage === 3 && (
                            <secondaryPageContext.Provider 
                                value={{
                                    setCameraVisibility, 
                                    cameraVisible, 
                                    cameraSrc,
                                    setClosePage, 
                                    setCameraSrc
                                }}
                            >
                                <PictureSelection 
                                    primPageStatus={primPageStatus} 
                                    setPrimaryPageStatus={setPrimaryPageStatus} 
                                    setInput={setInput}
                                />
                            </secondaryPageContext.Provider>
                        )}

                        {primaryPage === 4 && (
                            <ThirdPage 
                                setInput={setInput} 
                                primPageStatus={primPageStatus} 
                                setClosePage={setClosePage} 
                                setPrimaryPageStatus={setPrimaryPageStatus} 
                                clickedRef={clickedRef} 
                                userFollowedEnough={updateFollowedPages}
                            />
                        )}

                        <div className="stepsLandscape">
                            <ThreeStepButtons 
                                pageMark={primaryPage} 
                                setPrimaryPageStatus={setPrimaryPageStatus} 
                            />
                        </div>

                        {cameraVisible && (
                            <cameraContext.Provider 
                                value={{
                                    setCameraVisibility, 
                                    cameraVisible, 
                                    setCameraSrc
                                }} 
                            >
                                <Camera setInput={setInput} />
                            </cameraContext.Provider>
                        )}

                    </div>
                    <hr id="bottomDivider" />
                    
                    <TwoButtons 
                        closePage={setClosePage}
                        changers={pageChangers} 
                        pageMark={primaryPage} 
                        submitInput={setPrimaryPageStatus} 
                        hasUserAgreed={hasUserAgreed}
                        allFilledStep2={allFilledStep2}
                        userFollowedEnough={followedEnough}
                    />
                </>
            )}
        </div>
    );
}

export default BandPagePersonalizationPage;